/* ===================================================
   GLOOK — Catálogo dinámico
   Pinta las tarjetas de producto desde GLOOK.categories (data.js)
   y abre una ventana con el detalle al hacer clic.
   Se carga DESPUÉS de data.js y ANTES de main.js, al final del <body>,
   para que main.js active los links de WhatsApp y el reveal.
   =================================================== */

(function () {
  if (typeof GLOOK === "undefined") return;

  const esc = s => String(s ?? "").replace(/[&<>"']/g, ch =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));

  const waMsg = (p, c) => `Hola GLOOK! Quiero cotizar: ${p.name} (${c.name}).`;

  function media(p, c, base) {
    return p.image
      ? `<img src="${base}${esc(p.image)}" alt="${esc(p.name)}" loading="lazy">`
      : `<span class="ph-icon" data-icon="${esc(c.icon)}"></span>`;
  }

  /* ---- "Desde $X" en landing y hero de categoría ---- */
  document.querySelectorAll("[data-price-from]").forEach(el => {
    const min = GLOOK.priceFrom(el.getAttribute("data-price-from"));
    if (min) el.textContent = `$${GLOOK.money(min)}`;
  });

  /* ---- Tarjetas ---- */
  document.querySelectorAll("[data-products]").forEach(grid => {
    const cat = GLOOK.getCategory(grid.getAttribute("data-products"));
    if (!cat || !cat.products.length) return;
    const base = grid.getAttribute("data-base") || "";

    grid.innerHTML = cat.products.map((p, i) => `
      <article class="product-card reveal" data-index="${i}" tabindex="0" role="button"
               aria-label="Ver detalle de ${esc(p.name)}">
        <div class="product-media">
          ${p.tag ? `<span class="product-tag">${esc(p.tag)}</span>` : ""}
          ${media(p, cat, base)}
          <span class="product-more">Ver detalle</span>
        </div>
        <div class="product-body">
          <h3>${esc(p.name)}</h3>
          <p class="desc">${esc(p.short)}</p>
          <div class="product-foot">
            <div class="product-price"><span class="from">Desde</span>$${GLOOK.money(p.price)}${p.unit ? ` <small class="unit">${esc(p.unit)}</small>` : ""}</div>
            <a href="#" data-wa data-wa-msg="${esc(waMsg(p, cat))}" class="btn-wa-sm">
              <span data-icon="whatsapp"></span> Cotizar
            </a>
          </div>
        </div>
      </article>`).join("");

    const count = document.querySelector("[data-product-count]");
    if (count) count.textContent = cat.products.length;

    /* ---- Ventana de detalle ---- */
    const dlg = document.createElement("dialog");
    dlg.className = "product-dialog";
    document.body.appendChild(dlg);

    function open(i) {
      const p = cat.products[i];
      dlg.innerHTML = `
        <button class="pd-close" aria-label="Cerrar">&times;</button>
        <div class="pd-grid">
          <div class="pd-media product-media">
            ${p.tag ? `<span class="product-tag">${esc(p.tag)}</span>` : ""}
            ${media(p, cat, base)}
          </div>
          <div class="pd-body">
            <span class="kicker">${esc(cat.name)}</span>
            <h3>${esc(p.name)}</h3>
            <p class="pd-short">${esc(p.short)}</p>
            ${p.specs?.length ? `<ul class="pd-specs">${p.specs.map(s => `<li>${esc(s)}</li>`).join("")}</ul>` : ""}
            ${p.note ? `<p class="pd-note">${esc(p.note)}</p>` : ""}
            <div class="pd-foot">
              <div class="product-price"><span class="from">Desde</span>$${GLOOK.money(p.price)}${p.unit ? ` <small class="unit">${esc(p.unit)}</small>` : ""}</div>
              <a href="${GLOOK.waLink(waMsg(p, cat))}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
                <span data-icon="whatsapp" style="width:18px;height:18px;display:inline-flex;"></span> Cotizar por WhatsApp
              </a>
            </div>
            <p class="pd-legal">Precio según diseño y cantidad.</p>
          </div>
        </div>`;
      if (typeof injectIcon === "function") dlg.querySelectorAll("[data-icon]").forEach(injectIcon);
      dlg.querySelector(".pd-close").addEventListener("click", () => dlg.close());
      dlg.showModal();
    }

    // Cerrar al hacer clic fuera del contenido
    dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });

    grid.addEventListener("click", e => {
      if (e.target.closest("[data-wa]")) return; // "Cotizar" va directo a WhatsApp
      const card = e.target.closest(".product-card");
      if (card) open(+card.dataset.index);
    });
    grid.addEventListener("keydown", e => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const card = e.target.closest(".product-card");
      if (card && e.target === card) { e.preventDefault(); open(+card.dataset.index); }
    });
  });
})();
