/* Bakery Shop — static site logic (multi-page) */



const products = [
  {
    slug: "strawberry-cake",
    name: "Strawberry Cake",
    image: "../images/strawberry.png",
    price: 32,
    size: 'Ø 8" · serves 8',
    toppings: "Fresh strawberries, vanilla cream",
    description:
      "Whether it's a birthday, a quiet afternoon treat, or a grand celebration, our artisanal cakes are designed to make your special occasions taste and look extraordinary.",
  },
  {
    slug: "gingerbread-village-cake",
    name: "Gingerbread Village Cake",
    image: "../images/gingerbread.png",
    price: 48,
    size: 'Ø 8" · serves 10',
    toppings: "Gingerbread houses, cherries, rosemary",
    description:
      "Looking for something unique? From whimsical holiday themes to elegant custom celebration cakes, we bring your vision to life with meticulous attention to detail and a whole lot of sweetness.",
  },
  {
    slug: "chocolate-drip-cake",
    name: "Chocolate Drip Cake",
    image: "../images/chocolate-drip.png",
    price: 55,
    size: "Two tiers · serves 16",
    toppings: "Chocolate glaze, cookies, pretzels",
    description:
      "Rich, layered chocolate perfection finished with a decadent glaze and custom details. Every slice is designed to make your milestone moments unforgettable.",
  },
  {
    slug: "red-velvet-dream-cupcake",
    name: "Red Velvet Dream Cupcake",
    image: "../images/red-velvet-cupcake.png",
    price: 6,
    size: "Single cupcake",
    toppings: "Cream cheese frosting, macaron",
    description:
      "A decadent red velvet classic crowned with rich cream cheese frosting and an exquisite macaron. The ultimate sweet treat to elevate your day.",
  },
  {
    slug: "red-velvet-layer-cake",
    name: "Red Velvet Layer Cake",
    image: "../images/red-velvet-cake.png",
    price: 38,
    size: 'Ø 7" · serves 8',
    toppings: "Fresh raspberries, mascarpone",
    description:
      "Velvety crumb layered with airy mascarpone and finished with fresh raspberries. Soft, tangy and just sweet enough for any celebration.",
  },
  {
    slug: "raspberry-cream-tart",
    name: "Raspberry Cream Tart",
    image: "../images/raspberry-tart.png",
    price: 34,
    size: 'Ø 9" · serves 10',
    toppings: "Raspberries, vanilla chantilly",
    description:
      "A buttery almond base piled high with vanilla chantilly and a mountain of ruby raspberries. Bright, fresh and beautifully rustic.",
  },
  {
    slug: "cheesecake-selection",
    name: "Cheesecake Selection",
    image: "../images/cheesecake.png",
    price: 24,
    size: "4 slices, assorted",
    toppings: "Mango, berries, chocolate",
    description:
      "A curated plate of our best-loved cheesecake slices — silky, light and topped with seasonal fruit and chocolate.",
  },
 {
    slug: "classic-tiramisu-cake",
    name: "Classic Tiramisu Cake",
    image: "../images/tiramisu.png",
    price: 40,
    size: 'Ø 8" · serves 10',
    toppings: "Cocoa dust, ladyfingers, espresso cream",
    description:
      "Espresso-soaked sponge and mascarpone cream, dusted with cocoa and wrapped in ladyfingers. A timeless finish to any meal.",
  },
  {
    slug: "croissant",
    name: "Croissant",
    image: "../images/croissant.png", // Make sure you have a real croissant.png in your images folder
    price: 4,                        // Updated price (e.g., $4 instead of $40)
    size: "1 piece",                 // Updated size
    toppings: "Butter glaze",        // Updated toppings
    description:                     // Updated description
      "Flaky, golden-brown butter croissant baked fresh daily.",
  },

  {
    slug: "croissant",
    name: "Croissant",
    image: "../images/cake9.png",               // Shown on Menu / Products page
    specialImage: "../images/cake9.png", // Shown ONLY on Special Orders page
    price: 4,
    size: "1 piece",
    toppings: "Butter glaze",
    description: "Flaky, golden-brown butter croissant baked fresh daily.",
  },

    {
    slug: "cuteis cake",
    name: "cuteis cake",
    image: "../images/cake2.png",               // Shown on Menu / Products page
    specialImage: "../images/cake2.png", // Shown ONLY on Special Orders page
    price: 4,
    size: "1 piece",
    toppings: "Butter glaze",
    description: "Flaky, golden-brown butter croissant baked fresh daily.",
  },

    {
    slug: "strawberry",
    name: "strawberry",
    image: "../images/cake3.png",               // Shown on Menu / Products page
    specialImage: "../images/cake3.png", // Shown ONLY on Special Orders page
    price: 4,
    size: "1 piece",
    toppings: "Butter glaze",
    description: "Flaky, golden-brown butter croissant baked fresh daily.",
  },

    {
    slug: "redburry cake",
    name: "redburry cake",
    image: "../images/cake4.png",
    slug: "cherry cake",
    name: "cherry cake",
    image: "../images/cake5.png",               // Shown on Menu / Products page
    specialImage: "../images/cake5.png", // Shown ONLY on Special Orders page
    price: 4,
    size: "1 piece",
    toppings: "Butter glaze",
    description: "Flaky, golden-brown butter croissant baked fresh daily.",
  },
    {
    slug: "croissant",
    name: "Croissant",
    image: "../images/cake6.png",               // Shown on Menu / Products page
    specialImage: "../images/cake6.png", // Shown ONLY on Special Orders page
    price: 4,
    size: "1 piece",
    toppings: "Butter glaze",
    description: "Flaky, golden-brown butter croissant baked fresh daily.",
  },

    {
    slug: "chocolate cake",
    name: "chocolate cake",
    image: "../images/cake7.png",               // Shown on Menu / Products page
    specialImage: "../images/cake7.png", // Shown ONLY on Special Orders page
    price: 4,
    size: "1 piece",
    toppings: "Butter glaze",
    description: "Flaky, golden-brown butter croissant baked fresh daily.",
  },
    {
    slug: "green cake",
    name: "green cake",
    image: "../images/cake8.png",               // Shown on Menu / Products page
    specialImage: "../images/cake8.png", // Shown ONLY on Special Orders page
    price: 4,
    size: "1 piece",
    toppings: "Butter glaze",
    description: "Flaky, golden-brown butter croissant baked fresh daily.",
  },

   {
    slug: "White rose cake pink red",
    name: "White rose cake pink red",
    image: "../images/cake10.png",               // Shown on Menu / Products page
    specialImage: "../images/cake10.png", // Shown ONLY on Special Orders page
    price: 4,
    size: "1 piece",
    toppings: "Butter glaze",
    description: "Flaky, golden-brown butter croissant baked fresh daily.",
  },
];

function productURL(p) {
  return `product.html?slug=${p.slug}`;
}

function simpleCardHTML(p, priceLabel) {
  return `
    <a class="card" href="${productURL(p)}">
      <img src="${p.image}" alt="${p.name}" loading="lazy" />
      <div class="card-body">
        <h3>${p.name}</h3>
        <p>${priceLabel}</p>
      </div>
    </a>`;
}

/* Home: first 4 products */
function renderFeatured() {
  document.getElementById("featured-grid").innerHTML = products
    .slice(0, 4)
    .map((p) => simpleCardHTML(p, `$${p.price} · ${p.size}`))
    .join("");
}

/* Special orders: uses specialImage if available, falls back to regular image */
function renderSpecialOrders() {
  document.getElementById("special-grid").innerHTML = products
    .map((p) => {
      const displayProduct = { ...p, image: p.specialImage || p.image };
      return simpleCardHTML(displayProduct, `from $${p.price}`);
    })
    .join("");
}

/* Products menu: overlay cards */
function renderMenu() {
  document.getElementById("menu-grid").innerHTML = products
    .map(
      (p) => `
    <article class="menu-card">
      <img src="${p.image}" alt="${p.name}" loading="lazy" />
      <div class="menu-overlay">
        <div>
          <h2>${p.name}</h2>
          <p class="desc">${p.description}</p>
        </div>
        <div>
          <div class="menu-row"><span>Price</span><span>$${p.price}</span></div>
          <div class="menu-row small"><span>Size</span><span>${p.size}</span></div>
          <a class="menu-order" href="${productURL(p)}">Order</a>
        </div>
      </div>
    </article>`
    )
    .join("");
}

/* Product detail page: reads ?slug= from the URL */
function renderProductDetail() {
  const slug = new URLSearchParams(location.search).get("slug");
  const p = products.find((x) => x.slug === slug) || products[0];
  document.title = `${p.name} — Bakery Shop`;
  document.getElementById("p-image").src = p.image;
  document.getElementById("p-image").alt = p.name;
  document.getElementById("p-name").textContent = p.name;
  document.getElementById("p-description").textContent = p.description;
  document.getElementById("p-price").textContent = `$${p.price}`;
  document.getElementById("p-size").textContent = p.size;
  document.getElementById("p-toppings").textContent = p.toppings;
}

/* Contact form → confirmation page */
function setupContactForm() {
  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    location.href = "submit-confirmed.html";
  });
}

