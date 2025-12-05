// Lấy các phần tử từ DOM
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const addProductBtn = document.getElementById('addProductBtn');
const addProductForm = document.getElementById('addProductForm');
const cancelBtn = document.getElementById('cancelBtn');
const errorMsg = document.getElementById('errorMsg');
const productList = document.getElementById('product-list');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartSection = document.getElementById('cart-section');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cartTotal');
const clearCartBtn = document.getElementById('clearCartBtn');

// Hàm tải danh sách sản phẩm từ LocalStorage
function loadProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [
        { name: 'Roses', price: 2.5, desc: 'Roses are a classic symbol of love and beauty. Available in various colors.' },
        { name: 'Tulips', price: 1.5, desc: 'Tulips are vibrant and cheerful flowers that bloom in spring.' },
        { name: 'Daisies', price: 1.0, desc: 'Daisies represent innocence and purity, perfect for any occasion.' }
    ];
    products.forEach(product => {
        const newItem = document.createElement('article');
        newItem.className = 'product-item';
        newItem.innerHTML = `
            <h3 class="product-name">${product.name}</h3>
            <p class="product-desc">${product.desc}</p>
            <p class="product-price">Price: $${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        productList.appendChild(newItem);
    });
}

// Hàm lưu danh sách sản phẩm vào LocalStorage
function saveProducts() {
    const products = [];
    document.querySelectorAll('.product-item').forEach(item => {
        products.push({
            name: item.querySelector('.product-name').textContent,
            price: parseFloat(item.querySelector('.product-price').textContent.replace('Price: $', '')),
            desc: item.querySelector('.product-desc').textContent
        });
    });
    localStorage.setItem('products', JSON.stringify(products));
}

// Hàm tải giỏ hàng từ LocalStorage
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} (Qty: ${item.quantity})`;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartTotal.textContent = total.toFixed(2);
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

// Xử lý sự kiện khi nhấn nút tìm kiếm
searchBtn.addEventListener('click', () => {
    const keyword = searchInput.value.toLowerCase();
    const products = document.querySelectorAll('.product-item');
    products.forEach(product => {
        const name = product.querySelector('.product-name').textContent.toLowerCase();
        if (name.includes(keyword)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
});

// Xử lý sự kiện khi nhấn nút thêm sản phẩm
addProductBtn.addEventListener('click', () => {
    addProductForm.classList.toggle('hidden');
});

// Xử lý sự kiện khi nhấn nút hủy
cancelBtn.addEventListener('click', () => {
    addProductForm.classList.add('hidden');
    addProductForm.reset();
    errorMsg.textContent = '';
});

// Xử lý sự kiện khi gửi form thêm sản phẩm
addProductForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('newName').value.trim();
    const price = parseFloat(document.getElementById('newPrice').value);
    const desc = document.getElementById('newDesc').value.trim();

    if (!name || isNaN(price) || price <= 0) {
        errorMsg.textContent = 'Please enter valid name and price!';
        return;
    }

    errorMsg.textContent = '';

    const newItem = document.createElement('article');
    newItem.className = 'product-item';
    newItem.innerHTML = `
        <h3 class="product-name">${name}</h3>
        <p class="product-desc">${desc}</p>
        <p class="product-price">Price: $${price}</p>
        <button onclick="addToCart('${name}', ${price})">Add to Cart</button>
    `;

    productList.appendChild(newItem);
    addProductForm.reset();
    addProductForm.classList.add('hidden');
    saveProducts();
});

// Xử lý sự kiện khi nhấn nút giỏ hàng
cartBtn.addEventListener('click', () => {
    cartSection.classList.toggle('hidden');
    loadCart();
});

// Xử lý sự kiện khi nhấn nút xóa giỏ hàng
clearCartBtn.addEventListener('click', () => {
    localStorage.removeItem('cart');
    loadCart();
    cartSection.classList.add('hidden');
});

// Gọi hàm tải sản phẩm và giỏ hàng khi trang load
loadProducts();
loadCart();