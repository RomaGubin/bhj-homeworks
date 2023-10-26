const cartProducts = document.querySelector('.cart__products');
const product = Array.from(document.querySelectorAll('.product'));

product.forEach(product => {
  let quantityGoods = 1;

  product.addEventListener('click', (e) => {
    e.preventDefault();
    const productQuantityValue = product.querySelector('.product__quantity-value');
    const dataId = product.getAttribute('data-id');
    const src = product.querySelector('.product__image').getAttribute('src');

    if (e.target.classList.contains('product__quantity-control_dec') && productQuantityValue.textContent > 1) {
      quantityGoods--;
      productQuantityValue.textContent = quantityGoods;
    } else if (e.target.classList.contains('product__quantity-control_inc')) {
      quantityGoods++;
      productQuantityValue.textContent = quantityGoods;
    }

    if (e.target.classList.contains('product__add')) {
      
      let existingProduct = cartProducts.querySelector('[data-id="' + dataId + '"]');
      let newProduct = document.createElement('div');

      if (existingProduct) {
        let valueQuantityGoods = existingProduct.querySelector('.cart__product-count');
        let sum = quantityGoods + +valueQuantityGoods.textContent;
        valueQuantityGoods.textContent = sum;
      } else {
        newProduct.setAttribute('data-id', dataId);
        newProduct.setAttribute('class', 'cart__product');
        newProduct.innerHTML = 
        `<img class="cart__product-image" src="${src}">
        <div class="cart__product-count">${quantityGoods}</div>`;
        cartProducts.appendChild(newProduct);
      }
    }
  });
});
