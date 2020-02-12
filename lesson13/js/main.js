const products = [
    {
        id: '7df3f04b-0ee0-4a8a-bda8-e2931e68860d',
        title: 'MacBook Pro 16-inch',
        description: '2.3GHz 8-Core Processor<br>1TB Storage<br>AMD Radeon Pro 5500M',
        price: {
            value: 2799.00,
            currency: 'USD',
        },
        imageLink: 'https://www.apple.com/v/mac/home/am/images/overview/hero/macbook_pro_16__ni9nkbyq2dm6_large.jpg'
    },
    {
        id: '69d8b82e-1bc6-45a7-bcb0-ba205c91b8bd',
        title: 'MacBook Pro 13-inch',
        description: '2.4GHz Quad-Core Processor with Turbo Boost up to 4.1GHz<br>256GB Storage<br>Touch Bar and Touch ID',
        price: {
            value: 1799.00,
            currency: 'USD',
        },
        imageLink: 'https://www.apple.com/v/mac/home/am/images/overview/hero/macbook_pro_16__ni9nkbyq2dm6_large.jpg'
    },
    {
        id: '9c56a489-5581-4552-802a-6e56249b0056',
        title: 'Mac Pro',
        description: '3.5GHz 8‑core Intel Xeon W processor, Turbo Boost up to 4.0GHz<br>256GB Storage<br>Radeon Pro 580X with 8GB of GDDR5 memory',
        price: {
            value: 5999.00,
            currency: 'USD',
        },
        imageLink: 'https://www.apple.com/v/mac/home/am/images/overview/hero/mac_pro__bn92faz71k6a_large.jpg'
    },
    {
        id: 'e325ae53-ba9b-4b9e-b443-20db05f95c2e',
        title: 'MacBook Air',
        description: '2-core Intel Core i5 processor<br>1TB storage<br>12 hours battery life',
        price: {
            value: 1099.00,
            currency: 'USD',
        },
        imageLink: 'https://www.apple.com/v/mac/home/am/images/overview/compare/macbook_air__csdfieli984m_large.jpg'
    },
    {
        id: '4f50005d-b422-4adf-b1f6-3b6551862500',
        title: 'iPhone 11 Pro Max',
        description: 'Midnight Green<br>521GB Storage<br>20 hours of video playback',
        price: {
            value: 1449.00,
            currency: 'USD',
        },
        imageLink: 'https://www.apple.com/v/iphone/home/af/images/overview/compare/compare_iphone_11_pro__fvqwhr4dkhiu_large.jpg'
    }
];

const currentSortDirection = 'desc';
let currentBasket = [];

const renderBasket = () => {
    const countEl = document.getElementById('count');
    const amountEl = document.getElementById('amount');

    const amount = currentBasket.reduce((acc, productId) => {
        const product = products.find(item => item.id === productId);
        return acc + product.price.value;
    }, 0);

    countEl.textContent = currentBasket.length;
    amountEl.textContent = `${amount}$`;
};

const toggleBasket = productId => event => {
    event.preventDefault();

    if (!currentBasket.includes(productId)) {
        event.target.classList.add('_active');
        event.target.textContent = 'Remove from Basket';
        currentBasket.push(productId);
    } else {
        event.target.classList.remove('_active');
        event.target.textContent = 'Add to Basket';
        currentBasket = currentBasket.filter(item => item !== productId);
    }

    renderBasket();
};

const render = (data, sortDirection) => {
    const productsEl = document.getElementById('products');
    const sortedData = data.sort((a, b) => {
        const sortCondition = sortDirection === 'asc'
            ? a.price.value > b.price.value
            : a.price.value < b.price.value;

        return sortCondition ? 1 : -1;
    });

    for (let i = 0; i < sortedData.length; i++) {
        const product = sortedData[i];
        const cartEl = document.createElement('section');
        cartEl.classList.add('cart');

        cartEl.innerHTML = `
    <div class="cart__image-block">
      <img class="cart__image" src="${product.imageLink}" alt="${product.title}">
    </div>
    <div class="cart__text">
      <div class="cart__title">${product.title}</div>
      <div class="cart__desc">${product.description}</div>
    </div>
    <div class="cart__price-block">
      <div class="cart__price">$${product.price.value}</div>
      <a href="#" class="cart__button">Add to Basket</a>
    </div>
  `;

        productsEl.appendChild(cartEl);

        const buttonEl = cartEl.querySelector('a');
        buttonEl.addEventListener('click', toggleBasket(product.id));
    }
};

render(products, currentSortDirection);
renderBasket();