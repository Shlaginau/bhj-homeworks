const addToCartButtons = document.querySelectorAll('.product__add');
const quantityControls = document.querySelectorAll('.product__quantity-control');
  
  addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });
  
  quantityControls.forEach(control => {
    control.addEventListener('click', updateQuantity);
  });

  function addToCart(p) {
    const product = p.target.closest('.product');
    const productId = product.dataset.id;
    const productTitle = product.querySelector('.product__title').textContent;
    const productImageSrc = product.querySelector('.product__image').src;
    const productQuantity = parseInt(product.querySelector('.product__quantity-value').textContent);
    const cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);
  
    if (cartProduct) {
      const cartProductCount = parseInt(cartProduct.querySelector('.cart__product-count').textContent);
      const newCount = cartProductCount + productQuantity;
      cartProduct.querySelector('.cart__product-count').textContent = newCount;
    } else {
      const cartProductElement = createCartProduct(productId, productTitle, productImageSrc, productQuantity);
      document.querySelector('.cart__products').appendChild(cartProductElement);
    }
  }
  
  function updateQuantity(event) {
    const quantityControl = event.target;
    const product = quantityControl.closest('.product');
    const quantityValue = product.querySelector('.product__quantity-value');
    let quantity = parseInt(quantityValue.textContent);
  
    if (quantityControl.classList.contains('product__quantity-control_dec')) {
      quantity = Math.max(quantity - 1, 1);
    } else if (quantityControl.classList.contains('product__quantity-control_inc')) {
      quantity += 1;
    }
  
    quantityValue.textContent = quantity;
  }
  
  function createCartProduct(id, title, imageSrc, count) {
    const cartProduct = document.createElement('div');
    cartProduct.classList.add('cart__product');
    cartProduct.dataset.id = id;
  
    const cartProductImage = document.createElement('img');
    cartProductImage.classList.add('cart__product-image');
    cartProductImage.src = imageSrc;
  
    const cartProductCount = document.createElement('div');
    cartProductCount.classList.add('cart__product-count');
    cartProductCount.textContent = count;
  
    cartProduct.appendChild(cartProductImage);
    cartProduct.appendChild(cartProductCount);
  
    return cartProduct;
  }
