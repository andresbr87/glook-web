/* ===================================================
   GLOOK — Datos compartidos
   =================================================== */

const GLOOK = {
  whatsapp: "573197016805", // +57 319 7016805
  instagram: "https://instagram.com/glook_surprises",
  instagramHandle: "@glook_surprises",
  facebook: "https://www.facebook.com/share/1Ne3yDLb7r/",
  tiktok: "https://www.tiktok.com/@glook_surprises",
  email: "andbol@glook.com.co",
  city: "Bogotá, Colombia",
  address: "Cra 73D # 35B Sur - 11, Kennedy, Bogotá",

  waLink(message) {
    const base = `https://wa.me/${this.whatsapp}`;
    return message ? `${base}?text=${encodeURIComponent(message)}` : base;
  },

  /* ---------------------------------------------------------------
     CATÁLOGO — fuente única de productos y precios.
     Cada producto:
       name   Nombre visible
       short  Descripción corta (tarjeta)
       specs  Descripción larga (lista en la ventana de detalle)
       note   Nota opcional al final del detalle
       price  Precio "desde" en pesos (número, sin puntos)
       unit   Opcional, ej. "c/u" para precios por unidad en paquetes
       tag    Etiqueta opcional (null = sin etiqueta)
       image  Foto opcional (ruta desde la raíz, ej. "images/hoodie.png").
              Si no hay foto se muestra el ícono de la categoría.
     --------------------------------------------------------------- */
  categories: [
    {
      slug: "mugs",
      name: "Mugs",
      singular: "mug",
      tagline: "Tazas personalizadas para regalar todos los días",
      desc: "Cerámica de alta calidad, sublimado a color completo. Ideal para regalos, detalles corporativos y merchandising.",
      icon: "mug",
      products: [
        {
          name: "Mug blanco 11oz",
          short: "Mug de cerámica personalizado.",
          specs: ["Capacidad: 11 onzas", "Material: cerámica", "Alto: 9,5 cm", "Diámetro: 8 cm", "Área de sublimación: 20 x 9 cm"],
          price: 16000, tag: "Más vendido"
        },
        {
          name: "Mug mágico negro 11oz",
          short: "Negro al frío, revela tu diseño con líquido caliente.",
          specs: ["Capacidad: 11 onzas", "Material: cerámica", "Alto: 9,5 cm", "Diámetro: 8 cm", "Área de sublimación: 20 x 9 cm"],
          price: 22000, tag: "Cambia color"
        },
        {
          name: "Mug color interno 11oz",
          short: "Blanco con asa e interior en color.",
          specs: ["Capacidad: 11 onzas", "Material: cerámica", "Alto: 9,5 cm", "Diámetro: 8 cm", "Área de sublimación: 20 x 9 cm"],
          note: "Pregunta por la disponibilidad de colores.",
          price: 18000, tag: null
        },
        {
          name: "Mug blanco por docena (x12)",
          short: "Mug de cerámica personalizado.",
          specs: ["Capacidad: 11 onzas", "Material: cerámica", "Alto: 9,5 cm", "Diámetro: 8 cm", "Área de sublimación: 20 x 9 cm"],
          price: 13000, unit: "c/u", tag: "Por mayor"
        }
      ]
    },
    {
      slug: "tote-bags",
      name: "Tote Bags",
      singular: "tote bag",
      tagline: "Lleva tu diseño a todas partes",
      desc: "Bolsas de tela en algodón resistente, estampadas o bordadas con tu diseño favorito.",
      icon: "totebag",
      products: [] // Pendiente: datos reales
    },
    {
      slug: "hoodies",
      name: "Hoodies",
      singular: "hoodie",
      tagline: "Comodidad y estilo con tu diseño",
      desc: "Hoodies personalizados con estampado DTF o vinilo, en algodón y mezcla algodón-poliéster.",
      icon: "hoodie",
      products: [
        {
          name: "Hoodie unisex con capota",
          short: "Algodón-poliéster 240 gr, personalizado DTF o vinilo.",
          specs: ["Tela: 50 % algodón – 50 % poliéster", "Gramaje: 240 gramos", "Tejido suave, resistente y confortable", "Excelente estabilidad dimensional", "Tallas de la S a la XL"],
          note: "Pregunta por la disponibilidad de colores.",
          price: 125000, tag: "Más vendido", image: "images/hoodie.png"
        },
        {
          name: "Hoodie unisex",
          short: "Algodón-poliéster 240 gr, personalizado DTF o vinilo.",
          specs: ["Tela: 50 % algodón – 50 % poliéster", "Gramaje: 240 gramos", "Cuello: redondo", "Tejido suave, resistente y confortable", "Excelente estabilidad dimensional", "Tallas de la S a la XL"],
          note: "Pregunta por la disponibilidad de colores.",
          price: 105000, tag: "Cuello redondo", image: "images/hoodie.png"
        },
        {
          name: "Hoodie oversize premium con capucha",
          short: "Algodón 350 gr con capucha, personalizado DTF o vinilo.",
          specs: ["Tela: 100 % algodón", "Gramaje: 350 gramos", "Buzo de manga larga con capucha, cordón y bolsillo canguro", "Tallas de la S a la XL"],
          note: "Pregunta por la disponibilidad de colores.",
          price: 145000, tag: "Tendencia", image: "images/hoodie.png"
        },
        {
          name: "Hoodie oversize premium sin capucha",
          short: "Algodón 350 gr cuello redondo, personalizado DTF o vinilo.",
          specs: ["Tela: 100 % algodón", "Gramaje: 350 gramos", "Buzo de manga larga, cuello redondo, sin capucha", "Tallas de la S a la XL"],
          note: "Pregunta por la disponibilidad de colores.",
          price: 130000, tag: "Cuello redondo", image: "images/hoodie.png"
        },
        {
          name: "Hoodie por seis (x6)",
          short: "Algodón-poliéster 240 gr, personalizado DTF o vinilo.",
          specs: ["Tela: 50 % algodón – 50 % poliéster", "Gramaje: 240 gramos", "Tejido suave, resistente y confortable", "Excelente estabilidad dimensional", "Tallas de la S a la XL"],
          note: "Pregunta por la disponibilidad de colores.",
          price: 98000, unit: "c/u", tag: "Por mayor", image: "images/hoodie.png"
        }
      ]
    },
    {
      slug: "camisetas",
      name: "Camisetas",
      singular: "camiseta",
      tagline: "Tu mensaje, tu diseño, tu camiseta",
      desc: "Camisetas en algodón 100% o poliéster para sublimado, con estampado DTF de alta resolución.",
      icon: "tshirt",
      products: [] // Pendiente: datos reales
    },
    {
      slug: "monederos",
      name: "Monederos",
      singular: "monedero",
      tagline: "Detalles pequeños, regalos memorables",
      desc: "Monederos y billeteras personalizadas, ideales como detalle de cumpleaños o souvenir de evento.",
      icon: "wallet",
      products: [] // Pendiente: datos reales
    }
  ],

  getCategory(slug) {
    return this.categories.find(c => c.slug === slug);
  },

  /** Precio mínimo de la categoría (para "Desde $X"). */
  priceFrom(slug) {
    const c = this.getCategory(slug);
    const prices = (c?.products || []).map(p => p.price).filter(Boolean);
    return prices.length ? Math.min(...prices) : null;
  },

  /** 16000 -> "16.000" */
  money(n) {
    return Number(n).toLocaleString("es-CO", { maximumFractionDigits: 0 });
  }
};

/* ===================== Icon library (inline SVG, stroke style) ===================== */
const ICONS = {
  mug: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 22h30v24a8 8 0 0 1-8 8H22a8 8 0 0 1-8-8V22z" stroke="url(#g1)" stroke-width="3" stroke-linejoin="round"/><path d="M44 28h4a6 6 0 0 1 0 12h-4" stroke="url(#g1)" stroke-width="3"/><path d="M22 14c0-2 2-3 2-5M30 14c0-2 2-3 2-5M38 14c0-2 2-3 2-5" stroke="url(#g1)" stroke-width="2.5" stroke-linecap="round"/><defs><linearGradient id="g1" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#2575FC"/><stop offset="1" stop-color="#6A11CB"/></linearGradient></defs></svg>`,
  totebag: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22h40l-3 34a4 4 0 0 1-4 4H19a4 4 0 0 1-4-4l-3-34z" stroke="url(#g3)" stroke-width="3" stroke-linejoin="round"/><path d="M22 22v-4a10 10 0 0 1 20 0v4" stroke="url(#g3)" stroke-width="3"/><defs><linearGradient id="g3" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#2575FC"/><stop offset="1" stop-color="#6A11CB"/></linearGradient></defs></svg>`,
  hoodie: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 8c0 5 3.5 8 8 8s8-3 8-8" stroke="url(#g4)" stroke-width="3" stroke-linecap="round"/><path d="M24 8 8 17l4 11 7-3.5V54a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V24.5L52 28l4-11L40 8" stroke="url(#g4)" stroke-width="3" stroke-linejoin="round"/><path d="M27 16c0 3 2 5 5 5s5-2 5-5" stroke="url(#g4)" stroke-width="2" stroke-linecap="round"/><circle cx="32" cy="30" r="2" fill="url(#g4)"/><path d="M32 32v8" stroke="url(#g4)" stroke-width="2" stroke-linecap="round"/><defs><linearGradient id="g4" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#2575FC"/><stop offset="1" stop-color="#6A11CB"/></linearGradient></defs></svg>`,
  tshirt: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 10 8 18l4 10 6-3v29a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V25l6 3 4-10-14-8c-2 4-6 6-10 6s-8-2-10-6z" stroke="url(#g5)" stroke-width="3" stroke-linejoin="round"/><defs><linearGradient id="g5" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#2575FC"/><stop offset="1" stop-color="#6A11CB"/></linearGradient></defs></svg>`,
  wallet: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="16" width="48" height="34" rx="5" stroke="url(#g6)" stroke-width="3"/><path d="M8 26h48" stroke="url(#g6)" stroke-width="3"/><circle cx="44" cy="36" r="3.5" fill="url(#g6)"/><defs><linearGradient id="g6" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#2575FC"/><stop offset="1" stop-color="#6A11CB"/></linearGradient></defs></svg>`,
  building: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="10" width="36" height="46" rx="2" stroke="currentColor" stroke-width="3"/><path d="M22 20h6M36 20h6M22 30h6M36 30h6M22 40h6M36 40h6" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M26 56v-10h12v10" stroke="currentColor" stroke-width="3"/></svg>`,
  whatsapp: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 3C9 3 3 9 3 16c0 2.4.6 4.6 1.8 6.6L3 29l6.6-1.7c1.9 1 4 1.6 6.3 1.6 7 0 13-6 13-13S23 3 16 3z" fill="#fff"/><path d="M22.7 19.4c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.2.3-.9 1.2-1.2 1.5-.2.2-.4.3-.8.1-1.7-.8-3.3-2.1-4.5-3.9-.3-.5.3-.5.9-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6 0 1.5 1.1 3 1.3 3.2.2.2 2.1 3.3 5.2 4.6 2.6 1.1 3.1.9 3.7.8.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.4-.3z" fill="#25D366"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.8"/><circle cx="17.4" cy="6.6" r="1.2" fill="currentColor"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4c.5 2.4 2 4 4.5 4.2V11c-1.6 0-3-.5-4.5-1.5v6.3a5 5 0 1 1-4.2-4.9v2.8a2.2 2.2 0 1 0 1.7 2.1V4h2.5z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" fill="none"/></svg>`,
  location: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" stroke="url(#gloc)" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="9" r="2.6" stroke="url(#gloc)" stroke-width="1.8"/><defs><linearGradient id="gloc" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#2575FC"/><stop offset="1" stop-color="#6A11CB"/></linearGradient></defs></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="18" height="14" rx="2.5" stroke="url(#gmail)" stroke-width="1.8"/><path d="M4 7l8 6 8-6" stroke="url(#gmail)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="gmail" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#2575FC"/><stop offset="1" stop-color="#6A11CB"/></linearGradient></defs></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="url(#gclock)" stroke-width="1.8"/><path d="M12 7v5l3.5 2" stroke="url(#gclock)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="gclock" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#2575FC"/><stop offset="1" stop-color="#6A11CB"/></linearGradient></defs></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4 10-10" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`
};

let __iconInstanceCounter = 0;

function injectIcon(el) {
  const name = el.getAttribute("data-icon");
  if (!ICONS[name]) return;
  __iconInstanceCounter++;
  const uid = `ic${__iconInstanceCounter}`;
  // Make gradient/clip ids unique per instance so repeated icons on the same
  // page never collide (SVG ids are document-global, not scoped to the element).
  const svg = ICONS[name].replace(/id="([\w-]+)"/g, `id="$1-${uid}"`)
                          .replace(/url\(#([\w-]+)\)/g, `url(#$1-${uid})`);
  el.innerHTML = svg;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-icon]").forEach(injectIcon);
});
