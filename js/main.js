// Render the menu from MENU (js/menu.js)
(function renderMenu() {
  const root = document.getElementById("menu-root");
  if (!root || typeof MENU === "undefined") return;

  const rupees = (n) => "Rs " + n.toLocaleString("en-US");

  root.innerHTML = MENU.map((cat) => `
    <div class="menu-category">
      <h3>${cat.category}</h3>
      <div class="menu-grid">
        ${cat.items.map((d) => `
          <article class="dish">
            <div class="dish-img" data-icon="${cat.icon}">
              <img src="images/menu/${d.id}.jpg" alt="${d.name}" loading="lazy">
            </div>
            <div>
              <h4>${d.name}</h4>
              <p class="price">${d.from ? "from " : ""}${rupees(d.price)}</p>
              <p class="desc">${d.desc}</p>
            </div>
          </article>`).join("")}
      </div>
    </div>`).join("");

  // Missing photo: fall back to the category icon
  root.querySelectorAll(".dish-img img").forEach((img) => {
    img.addEventListener("error", () => {
      const box = img.parentElement;
      box.textContent = box.dataset.icon;
    });
  });
})();

// Mobile navigation
(function nav() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".site-nav");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
})();

// Use images/background.jpg behind the content sections if it exists
(function photoBackground() {
  const backdrop = document.querySelector(".backdrop");
  if (!backdrop) return;
  const img = new Image();
  img.onload = () => backdrop.classList.add("has-photo");
  img.src = "images/background.jpg";
})();

document.getElementById("year").textContent = new Date().getFullYear();
