const grid = document.getElementById("product-grid");
if (grid && Array.isArray(PRODUCTS)) {
  grid.innerHTML = PRODUCTS.map((product) => `
    <article class="product-card">
      <div class="product-visual">
        <span class="product-number">${product.number || ""} / FIGURA</span>
        <span class="product-emoji" role="img" aria-label="${product.name}">${product.emoji || "✳"}</span>
      </div>
      <div class="product-info">
        <div class="product-title-row">
          <h3>${product.name}</h3>
          <span class="product-price">Desde ${product.priceBasic || "Consultar"}</span>
        </div>
        <p>${product.description || ""}</p>
        <div class="product-meta">BASIC · ${product.priceBasic || "Consultar"} &nbsp;&nbsp; / &nbsp;&nbsp; PREMIUM · ${product.pricePremium || "Consultar"}</div>
      </div>
    </article>
  `).join("");
}
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();