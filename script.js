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

    let imgTag = "";
    if (p.img) {
      imgTag = `<img src="${p.img}" alt="${p.name}">`;
    } else {
      imgTag = `<img src="https://via.placeholder.com/200x120?text=Sem+Imagem" alt="Sem imagem">`;
    }

    card.innerHTML = `
      ${imgTag}
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="price">Kz ${p.price.toFixed(2)}</div>
    `;

    productList.appendChild(card);
  });
        }
