// Lấy các phần tử từ DOM
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const addProductBtn = document.getElementById('addProductBtn');
const addProductForm = document.getElementById('addProductForm');
const cancelBtn = document.getElementById('cancelBtn');
const errorMsg = document.getElementById('errorMsg');
const productList = document.getElementById('product-list');

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
    addProductForm.reset(); // Đặt lại form
    errorMsg.textContent = ''; // Xóa thông báo lỗi
});

// Xử lý sự kiện khi gửi form thêm sản phẩm
addProductForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    const name = document.getElementById('newName').value.trim();
    const price = parseFloat(document.getElementById('newPrice').value);
    const desc = document.getElementById('newDesc').value.trim();

    // Kiểm tra dữ liệu đầu vào
    if (!name || isNaN(price) || price <= 0) {
        errorMsg.textContent = 'Please enter valid name and price!';
        return;
    }

    errorMsg.textContent = ''; // Xóa thông báo lỗi nếu hợp lệ

    // Tạo phần tử mới cho sản phẩm
    const newItem = document.createElement('article');
    newItem.className = 'product-item';
    newItem.innerHTML = `
        <h3 class="product-name">${name}</h3>
        <p class="product-desc">${desc}</p>
        <p class="product-price">Price: $${price}</p>
    `;

    productList.appendChild(newItem); // Thêm sản phẩm vào danh sách
    addProductForm.reset(); // Đặt lại form
    addProductForm.classList.add('hidden'); // Ẩn form
});