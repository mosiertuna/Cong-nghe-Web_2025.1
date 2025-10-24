// Lấy các phần tử từ DOM
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const addProductBtn = document.getElementById('addProductBtn');
const addProductForm = document.getElementById('addProductForm');

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
    if (addProductForm.style.display === 'none') {
        addProductForm.style.display = 'block';
    } else {
        addProductForm.style.display = 'none';
    }
});