/* ===================================================
   GLOOK — Comportamiento del sitio
   =================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ---- Menú móvil ---- */
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      toggle.classList.toggle("active");
    });
    links.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => links.classList.remove("open"));
    });
  }

  /* ---- Año en footer ---- */
  document.querySelectorAll(".js-year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    document.documentElement.classList.add("js-reveal-ready");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => obs.observe(el));
    // Safety net: if for any reason an element never intersects (e.g. zero-height
    // container, fast programmatic scroll, or an observer quirk), still reveal it.
    setTimeout(() => {
      revealEls.forEach(el => el.classList.add("in-view"));
    }, 2500);
  } else {
    revealEls.forEach(el => el.classList.add("in-view"));
  }

  /* ---- WhatsApp links: set href dynamically using GLOOK config ---- */
  if (typeof GLOOK !== "undefined") {
    document.querySelectorAll("[data-wa]").forEach(el => {
      const msg = el.getAttribute("data-wa-msg") || "";
      el.setAttribute("href", GLOOK.waLink(msg));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
    document.querySelectorAll("[data-ig]").forEach(el => {
      el.setAttribute("href", GLOOK.instagram);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
    document.querySelectorAll("[data-fb]").forEach(el => {
      el.setAttribute("href", GLOOK.facebook);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
    document.querySelectorAll("[data-tt]").forEach(el => {
      el.setAttribute("href", GLOOK.tiktok);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  }


  /* ---- Formulario de contacto -> envía a WhatsApp ---- */
  const form = document.querySelector("#contact-form");
  if (form && typeof GLOOK !== "undefined") {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name     = form.querySelector("#f-name")?.value || "";
      const phone    = form.querySelector("#f-phone")?.value || "";
      const email    = form.querySelector("#f-email")?.value || "";
      const type     = form.querySelector("#f-type")?.value || "";
      const category = form.querySelector("#f-category")?.value || "";
      const message  = form.querySelector("#f-message")?.value || "";

      const text = `Hola GLOOK! Soy ${name}.\n` +
        (type     ? `Tipo de cliente: ${type}\n`      : "") +
        (phone    ? `Teléfono: ${phone}\n`            : "") +
        (email    ? `Correo: ${email}\n`              : "") +
        (category ? `Me interesa: ${category}\n`      : "") +
        (message  ? `Mensaje: ${message}`             : "");

      window.open(GLOOK.waLink(text), "_blank");
    });
  }
});
