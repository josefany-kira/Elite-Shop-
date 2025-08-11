function loadProducts() {
  const productList = document.getElementById("productList");
  if (!productList) return;

  let products = JSON.parse(localStorage.getItem("products")) || [];

  productList.innerHTML = "";

  if (products.length === 0) {
    productList.innerHTML = "<p>Nenhum produto disponível no momento.</p>";
    return;
  }

  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "productCard";

    let imgTag = p.img
      ? `<img src="${p.img}" alt="${p.name}">`
      : `<img src="https://via.placeholder.com/260x160?text=Sem+Imagem" alt="Sem imagem">`;

    card.innerHTML = `
      ${imgTag}
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="price">Kz ${p.price.toFixed(2)}</div>
      <a class="buyBtn" href="https://wa.me/244999999999?text=Quero%20comprar%20o%20produto:%20${encodeURIComponent(p.name)}" target="_blank">Comprar</a>
    `;

    productList.appendChild(card);
  });
      }
