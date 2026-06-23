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

  categories: [
    {
      slug: "mugs",
      name: "Mugs",
      singular: "mug",
      tagline: "Tazas personalizadas para regalar todos los días",
      desc: "Cerámica de alta calidad, sublimado a color completo. Ideal para regalos, detalles corporativos y merchandising.",
      icon: "mug",
      priceFrom: "18.000",
      products: [
        { name: "Mug clásico 11oz", desc: "Cerámica blanca, sublimado full color en ambos lados.", price: "18.000" },
        { name: "Mug mágico cambia color", desc: "Negro al frío, revela tu diseño con líquido caliente.", price: "26.000" },
        { name: "Mug con asa de color", desc: "Blanco con asa e interior en color a elección.", price: "22.000" },
        { name: "Mug térmico con tapa", desc: "Acero inoxidable de doble pared, mantiene temperatura.", price: "38.000" },
        { name: "Set de 2 mugs pareja", desc: "Diseños complementarios, caja de regalo incluida.", price: "34.000" },
        { name: "Mug empresarial (x50)", desc: "Logo corporativo, precio especial por volumen.", price: "15.000" }
      ]
    },
    {
      slug: "termos",
      name: "Termos",
      singular: "termo",
      tagline: "Hidratación con tu estilo, a donde vayas",
      desc: "Termos en acero inoxidable con grabado o sticker personalizado, perfectos para el día a día o como regalo corporativo.",
      icon: "thermos",
      priceFrom: "32.000",
      products: [
        { name: "Termo deportivo 500ml", desc: "Acero inoxidable, doble pared, mantiene frío/calor 12h.", price: "32.000" },
        { name: "Termo con pitillo 750ml", desc: "Ideal para hidratación durante el ejercicio.", price: "38.000" },
        { name: "Termo café para llevar", desc: "Tapa hermética antiderrames, agarre ergonómico.", price: "35.000" },
        { name: "Termo grabado láser", desc: "Grabado permanente de nombre o logo.", price: "42.000" },
        { name: "Termo infantil 350ml", desc: "Diseños divertidos, asa segura para niños.", price: "28.000" },
        { name: "Termo empresarial (x50)", desc: "Logo corporativo, precio especial por volumen.", price: "27.000" }
      ]
    },
    {
      slug: "tote-bags",
      name: "Tote Bags",
      singular: "tote bag",
      tagline: "Lleva tu diseño a todas partes",
      desc: "Bolsas de tela en algodón resistente, estampadas o bordadas con tu diseño favorito.",
      icon: "totebag",
      priceFrom: "20.000",
      products: [
        { name: "Tote bag algodón crudo", desc: "Estampado a una tinta, tamaño estándar 35x40cm.", price: "20.000" },
        { name: "Tote bag full color", desc: "Sublimado de tu diseño completo en ambas caras.", price: "28.000" },
        { name: "Tote bag bordada", desc: "Bordado de alta durabilidad, acabado premium.", price: "34.000" },
        { name: "Tote bag reforzada con bolsillo", desc: "Bolsillo interior, base reforzada para más peso.", price: "30.000" },
        { name: "Set tote bag + mug", desc: "Combo de regalo con diseño a juego.", price: "44.000" },
        { name: "Tote bag empresarial (x50)", desc: "Logo corporativo, precio especial por volumen.", price: "17.000" }
      ]
    },
    {
      slug: "hoodies",
      name: "Hoodies",
      singular: "hoodie",
      tagline: "Comodidad y estilo con tu diseño",
      desc: "Hoodies en algodón perchado, personalizadas con estampado DTF de alta durabilidad y colores vivos.",
      icon: "hoodie",
      priceFrom: "75.000",
      products: [
        { name: "Hoodie unisex básica", desc: "Algodón perchado 320gr, estampado DTF.", price: "75.000" },
        { name: "Hoodie oversize", desc: "Corte amplio, tendencia streetwear.", price: "85.000" },
        { name: "Hoodie bordada", desc: "Logo o nombre bordado en pecho o espalda.", price: "92.000" },
        { name: "Hoodie pareja/familia", desc: "Diseños a juego, tallas niño a adulto.", price: "78.000" },
        { name: "Hoodie equipo/evento", desc: "Diseño único para grupos, mínimo 6 unidades.", price: "70.000" },
        { name: "Hoodie empresarial (x20)", desc: "Logo corporativo, precio especial por volumen.", price: "65.000" }
      ]
    },
    {
      slug: "camisetas",
      name: "Camisetas",
      singular: "camiseta",
      tagline: "Tu mensaje, tu diseño, tu camiseta",
      desc: "Camisetas en algodón 100% o poliéster para sublimado, con estampado DTF de alta resolución.",
      icon: "tshirt",
      priceFrom: "32.000",
      products: [
        { name: "Camiseta algodón básica", desc: "100% algodón, estampado DTF un solo lado.", price: "32.000" },
        { name: "Camiseta sublimada full print", desc: "Diseño de borde a borde en poliéster.", price: "42.000" },
        { name: "Camiseta deportiva dry-fit", desc: "Tela transpirable, ideal para equipos deportivos.", price: "38.000" },
        { name: "Camiseta evento/grupo", desc: "Diseño único para grupos, mínimo 10 unidades.", price: "29.000" },
        { name: "Camiseta niño/bebé", desc: "Tallas desde 6 meses, algodón suave.", price: "26.000" },
        { name: "Camiseta empresarial (x30)", desc: "Logo corporativo, precio especial por volumen.", price: "24.000" }
      ]
    },
    {
      slug: "monederos",
      name: "Monederos",
      singular: "monedero",
      tagline: "Detalles pequeños, regalos memorables",
      desc: "Monederos y billeteras personalizadas, ideales como detalle de cumpleaños o souvenir de evento.",
      icon: "wallet",
      priceFrom: "15.000",
      products: [
        { name: "Monedero plano estampado", desc: "Cuero sintético, cierre con cremallera.", price: "15.000" },
        { name: "Monedero con llavero", desc: "Combo a juego con llavero personalizado.", price: "19.000" },
        { name: "Billetera personalizada", desc: "Varios compartimentos, diseño full color.", price: "24.000" },
        { name: "Monedero souvenir evento (x20)", desc: "Detalle ideal para bodas, baby shower o grados.", price: "13.000" },
        { name: "Monedero bordado", desc: "Bordado de iniciales o nombre.", price: "21.000" },
        { name: "Monedero empresarial (x50)", desc: "Logo corporativo, precio especial por volumen.", price: "11.000" }
      ]
    }
  ],

  getCategory(slug) {
    return this.categories.find(c => c.slug === slug);
  }
};

/* ===================== Icon library (inline SVG, stroke style) ===================== */
const ICONS = {
  mug: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 22h30v24a8 8 0 0 1-8 8H22a8 8 0 0 1-8-8V22z" stroke="url(#g1)" stroke-width="3" stroke-linejoin="round"/><path d="M44 28h4a6 6 0 0 1 0 12h-4" stroke="url(#g1)" stroke-width="3"/><path d="M22 14c0-2 2-3 2-5M30 14c0-2 2-3 2-5M38 14c0-2 2-3 2-5" stroke="url(#g1)" stroke-width="2.5" stroke-linecap="round"/><defs><linearGradient id="g1" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#2575FC"/><stop offset="1" stop-color="#6A11CB"/></linearGradient></defs></svg>`,
  thermos: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="8" width="24" height="10" rx="2" stroke="url(#g2)" stroke-width="3"/><path d="M18 18h28l-3 38a4 4 0 0 1-4 4H25a4 4 0 0 1-4-4l-3-38z" stroke="url(#g2)" stroke-width="3" stroke-linejoin="round"/><path d="M22 30h20" stroke="url(#g2)" stroke-width="2.5"/><defs><linearGradient id="g2" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#2575FC"/><stop offset="1" stop-color="#6A11CB"/></linearGradient></defs></svg>`,
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
