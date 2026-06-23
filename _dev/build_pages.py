import json

with open("/home/claude/glook-web/_dev/categories.json", encoding="utf-8") as f:
    categories = json.load(f)

slugs = [c["slug"] for c in categories]

NAV_ITEMS = [
    ("../index.html#categorias", "Inicio", "index"),
    ("mugs.html", "Mugs", "mugs"),
    ("termos.html", "Termos", "termos"),
    ("tote-bags.html", "Tote Bags", "tote-bags"),
    ("hoodies.html", "Hoodies", "hoodies"),
    ("camisetas.html", "Camisetas", "camisetas"),
    ("monederos.html", "Monederos", "monederos"),
]

def nav_html(active_slug):
    items = []
    items.append(f'<li><a href="../index.html">Inicio</a></li>')
    for c in categories:
        cls = ' class="active"' if c["slug"] == active_slug else ""
        items.append(f'<li><a href="{c["slug"]}.html"{cls}>{c["name"]}</a></li>')
    items.append('<li><a href="../index.html#empresas">Empresas</a></li>')
    items.append('<li><a href="../index.html#contacto">Contacto</a></li>')
    items.append('<li><a href="../index.html#contacto" class="nav-cta-mobile-link">Cotizar ahora</a></li>')
    return "\n      ".join(items)

def product_card(p, cat):
    tag_html = f'<span class="product-tag">{p["tag"]}</span>' if p.get("tag") else ""
    wa_msg = f'Hola GLOOK! Quiero cotizar: {p["name"]} ({cat["name"]}).'
    return f"""      <div class="product-card reveal">
        <div class="product-media">
          {tag_html}
          <span class="ph-icon" data-icon="{cat['icon']}"></span>
        </div>
        <div class="product-body">
          <h3>{p['name']}</h3>
          <p class="desc">{p['desc']}</p>
          <div class="product-foot">
            <div class="product-price"><span class="from">Desde</span>${p['price']}</div>
            <a href="#" data-wa data-wa-msg="{wa_msg}" class="btn-wa-sm">
              <span data-icon="whatsapp"></span> Cotizar
            </a>
          </div>
        </div>
      </div>"""

def other_categories_html(current_slug):
    chips = []
    for c in categories:
        if c["slug"] == current_slug:
            continue
        chips.append(f"""      <a href="{c['slug']}.html" class="other-cat-chip">
        <span class="chip-ic"><span data-icon="{c['icon']}" style="width:16px;height:16px;display:inline-flex;"></span></span>
        {c['name']}
      </a>""")
    return "\n".join(chips)

def badges_html(cat):
    return "\n          ".join(f'<span class="page-badge">{b}</span>' for b in cat["badges"])

PAGE_TEMPLATE = """<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{name} personalizados en Bogotá | GLOOK</title>
<meta name="description" content="{desc}">
<link rel="icon" type="image/png" href="../images/isotipo.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/style.css">
</head>
<body>

<div class="top-bar">🎁 Producción y personalización a la medida en Bogotá &nbsp;·&nbsp; <strong>Pedidos por WhatsApp</strong></div>

<header class="site-header">
  <nav class="nav container">
    <a href="../index.html" class="nav-logo">
      <img src="../images/logo-horizontal.png" alt="GLOOK - Si lo imaginas, lo creamos">
    </a>
    <ul class="nav-links">
      {nav_items}
    </ul>
    <a href="../index.html#contacto" class="nav-cta">Cotizar ahora</a>
    <button class="nav-toggle" aria-label="Abrir menú">
      <span></span><span></span><span></span>
    </button>
  </nav>
</header>

<section class="page-hero">
  <span class="blob blob-1"></span>
  <span class="blob blob-2"></span>
  <div class="container">
    <div class="breadcrumb">
      <a href="../index.html">Inicio</a> <span class="sep">/</span> <span class="current">{name}</span>
    </div>
    <div class="page-hero-content">
      <div>
        <h1>{tagline}</h1>
        <p>{desc}</p>
        <div class="page-hero-badges">
          {badges}
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-visual-card" style="padding:36px;">
          <span class="ph-icon" data-icon="{icon}" style="width:140px;height:140px;display:block;margin:0 auto 16px;"></span>
          <div class="tagline">Desde ${price_from}</div>
          <div class="tagline-sub">Precio según diseño y cantidad</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="product-toolbar">
      <p class="product-count"><strong>{count}</strong> opciones disponibles en {name_lower}</p>
      <a href="#" data-wa data-wa-msg="Hola GLOOK! Quiero ver más opciones de {name_lower} y cotizar un pedido." class="btn btn-outline btn-sm">
        <span data-icon="whatsapp" style="width:16px;height:16px;display:inline-flex;"></span> Preguntar por más opciones
      </a>
    </div>

    <div class="product-grid">
{product_cards}
    </div>

    <div class="info-band">
      <div class="info-band-card reveal">
        <h4>¿Cómo personalizo mi {singular}?</h4>
        <p>Envíanos tu diseño, foto o idea por WhatsApp y te confirmamos viabilidad, tiempos y precio antes de producir.</p>
      </div>
      <div class="info-band-card reveal">
        <h4>Pedidos por mayor</h4>
        <p>Para empresas y eventos manejamos precios escalonados según cantidad. Cuéntanos cuántas unidades necesitas.</p>
      </div>
      <div class="info-band-card reveal">
        <h4>Tiempos de entrega</h4>
        <p>Los tiempos varían según cantidad y complejidad del diseño. Te confirmamos la fecha exacta al cotizar.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section-dim">
  <div class="container">
    <div class="cta-banner reveal">
      <div>
        <h3>¿Tienes una idea para tu {singular}?</h3>
        <p>Cuéntanos qué imaginas y te ayudamos a hacerlo realidad.</p>
      </div>
      <div class="cta-banner-actions">
        <a href="#" data-wa data-wa-msg="Hola GLOOK! Quiero cotizar un pedido de {name_lower}." class="btn btn-light">
          <span data-icon="whatsapp" style="width:18px;height:18px;display:inline-flex;"></span> Cotizar por WhatsApp
        </a>
      </div>
    </div>

    <div class="section-head left mt-lg reveal" style="margin-bottom:24px;">
      <span class="kicker">También puede interesarte</span>
      <h2 style="font-size:1.5rem;">Explora otras categorías</h2>
    </div>
    <div class="other-cats">
{other_cats}
    </div>
  </div>
</section>

<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="../images/logo-horizontal.png" alt="GLOOK">
        <p>Producción y personalización de productos en Bogotá. Si lo imaginas, lo creamos.</p>
        <div class="social-row">
          <a href="#" data-ig class="social-pill" aria-label="Instagram" data-icon="instagram"></a>
          <a href="#" data-fb class="social-pill" aria-label="Facebook" data-icon="facebook"></a>
          <a href="#" data-tt class="social-pill" aria-label="TikTok" data-icon="tiktok"></a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Catálogo</h5>
        <ul>
          <li><a href="mugs.html">Mugs</a></li>
          <li><a href="tote-bags.html">Tote Bags</a></li>
          <li><a href="hoodies.html">Hoodies</a></li>
          <li><a href="camisetas.html">Camisetas</a></li>
          <li><a href="monederos.html">Monederos</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Empresa</h5>
        <ul>
          <li><a href="../index.html#empresas">Empresas y eventos</a></li>
          <li><a href="../index.html#contacto">Contacto</a></li>
          <li><a href="../index.html#categorias">Catálogo completo</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Contacto</h5>
        <ul>
          <li><a href="#" data-wa data-wa-msg="Hola GLOOK!">+57 322 975 6176</a></li>
          <li><a href="mailto:andbol@glook.com.co">andbol@glook.com.co</a></li>
          <li><a href="mailto:steher@glook.com.co">steher@glook.com.co</a></li>
          <li><a href="#">Kennedy, Bogotá</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© <span class="js-year"></span> GLOOK. Todos los derechos reservados.</span>
      <span>Si lo imaginas, lo creamos.</span>
    </div>
  </div>
</footer>

<a href="#" data-wa data-wa-msg="Hola GLOOK! Quiero hacer un pedido." class="wa-float" aria-label="Escríbenos por WhatsApp" data-icon="whatsapp"></a>

<script src="../js/data.js"></script>
<script src="../js/main.js"></script>
</body>
</html>
"""

for cat in categories:
    html = PAGE_TEMPLATE.format(
        name=cat["name"],
        name_lower=cat["name"].lower(),
        singular=cat["singular"],
        tagline=cat["tagline"],
        desc=cat["desc"],
        icon=cat["icon"],
        price_from=cat["priceFrom"],
        count=len(cat["products"]),
        nav_items=nav_html(cat["slug"]),
        badges=badges_html(cat),
        product_cards="\n".join(product_card(p, cat) for p in cat["products"]),
        other_cats=other_categories_html(cat["slug"]),
    )
    path = f"/home/claude/glook-web/pages/{cat['slug']}.html"
    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    print("Created", path)
