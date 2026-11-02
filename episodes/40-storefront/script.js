import {
  $,
  $$,
  say,
  reduced,
  formatMoney,
  themeController,
  slideViewer,
  listenCleanup,
} from "./common.js";
import {
  convertTemperature,
  choices,
  countCharacters,
  ageOn,
  remainingMs,
  otpDigits,
  cartTotal,
} from "./logic.js";
const products = [
  {
    id: "laptop",
    name: "Everyday laptop",
    price: 49900,
    asset: "laptop",
    category: "Technology",
  },
  {
    id: "headphones",
    name: "Study headphones",
    price: 2490,
    asset: "audio",
    category: "Technology",
  },
  {
    id: "notebook",
    name: "Project notebook",
    price: 390,
    asset: "poster",
    category: "Stationery",
  },
];
const cart = {};
function renderProducts() {
  const category = $("#category").value;
  let shown = products.filter(
    (p) => category === "All" || p.category === category,
  );
  if ($("#sort").value === "price")
    shown = shown.toSorted((a, b) => a.price - b.price);
  $("#products").replaceChildren(
    ...shown.map((product) => {
      const article = document.createElement("article");
      const img = document.createElement("img");
      img.src = `./assets/${product.asset}.svg`;
      img.alt = `Original illustration for ${product.name}`;
      img.width = 800;
      img.height = 600;
      const h = document.createElement("h3");
      h.textContent = product.name;
      const price = document.createElement("p");
      price.textContent = formatMoney(product.price) + " · sample price";
      const button = document.createElement("button");
      button.textContent = "Add " + product.name;
      button.addEventListener("click", () => {
        cart[product.id] = (cart[product.id] || 0) + 1;
        renderCart();
        say(product.name + " added to demo cart.");
      });
      article.append(img, h, price, button);
      return article;
    }),
  );
}
function renderCart() {
  const selected = products.filter((p) => cart[p.id]);
  $("#cart-count").textContent = Object.values(cart).reduce((s, n) => s + n, 0);
  $("#cart-items").replaceChildren(
    ...selected.map((product) => {
      const row = document.createElement("div");
      row.className = "row between";
      const text = document.createElement("p");
      text.textContent = `${product.name} × ${cart[product.id]} — ${formatMoney(product.price * cart[product.id])}`;
      const remove = document.createElement("button");
      remove.className = "secondary";
      remove.textContent = "Remove " + product.name;
      remove.addEventListener("click", () => {
        delete cart[product.id];
        renderCart();
      });
      row.append(text, remove);
      return row;
    }),
  );
  if (!selected.length)
    $("#cart-items").textContent = "Your demo cart is empty.";
  $("#cart-total").textContent =
    "Total " + formatMoney(cartTotal(products, cart));
}
$("#category").addEventListener("change", renderProducts);
$("#sort").addEventListener("change", renderProducts);
$("#open-cart").addEventListener("click", () => $("#cart-dialog").showModal());
renderProducts();
renderCart();
try {
  const Swiper = window.Swiper;
  const swiper = new Swiper("#featured", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: { prevEl: "#feature-prev", nextEl: "#feature-next" },
    a11y: { enabled: true },
    breakpoints: { 700: { slidesPerView: 2 } },
  });
  listenCleanup(() => swiper.destroy(true, true));
} catch {
  say("Featured slider unavailable; catalogue and demo cart remain usable.");
  $("#featured .swiper-wrapper").style.display = "block";
  $$("#featured .swiper-slide").forEach(
    (el) => (el.style.marginBottom = "12px"),
  );
  $("#feature-prev").disabled = true;
  $("#feature-next").disabled = true;
}
document.documentElement.dataset.lessonReady = "true";
