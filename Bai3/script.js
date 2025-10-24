// ...new file...
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const addProductBtn = document.getElementById('addProductBtn');
  const addProductForm = document.getElementById('addProductForm');

  function getProducts() {
    return document.querySelectorAll('.product-item');
  }

  function filterProducts() {
    const q = (searchInput.value || '').trim().toLowerCase();
    getProducts().forEach(item => {
      const nameEl = item.querySelector('.product-name');
      const text = nameEl ? nameEl.textContent.toLowerCase() : item.textContent.toLowerCase();
      item.style.display = text.includes(q) ? '' : 'none';
    });
  }

  // Tìm khi gõ hoặc khi bấm nút
  searchInput.addEventListener('keyup', filterProducts);
  searchBtn.addEventListener('click', filterProducts);

  // Toggle form thêm sản phẩm
  addProductBtn.addEventListener('click', () => {
    addProductForm.classList.toggle('hidden');
  });

  // Xử lý submit form: thêm item mới vào danh sách
  addProductForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = addProductForm.querySelector('[name="productName"]').value.trim();
    const priceVal = addProductForm.querySelector('[name="productPrice"]').value.trim();
    const imgUrl = addProductForm.querySelector('[name="productImage"]').value.trim() || 'placeholder.jpg';
    if (!name) return;

    const ul = document.querySelector('.product-list');
    const li = document.createElement('li');
    li.className = 'product-item';
    const priceText = priceVal ? ('$' + priceVal) : '';

    li.innerHTML = `
      <img src="${imgUrl}" alt="${name}">
      <div class="product-info">
        <span class="product-name">${name}</span>
        <span class="price">${priceText}</span>
      </div>
    `;
    ul.appendChild(li);

    // reset form và ẩn
    addProductForm.reset();
    addProductForm.classList.add('hidden');
  });
});