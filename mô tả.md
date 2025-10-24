# Báo cáo Dự án Flower Shop

### Mục tiêu
Xây dựng một trang web bán hoa đơn giản với các tính năng cơ bản và nâng cao, bao gồm giao diện người dùng, quản lý sản phẩm, tìm kiếm, thêm sản phẩm mới, và tích hợp giỏ hàng.

### Nội dung đã thực hiện

#### Bài tập 1: Tạo trang HTML cơ bản với semantic tags và form đơn giản
- **Mô tả**: Thiết kế giao diện cơ bản sử dụng các thẻ semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`) để hiển thị danh sách hoa (Roses, Tulips, Daisies) và một form liên hệ.
- **Kết quả**: Trang web có cấu trúc rõ ràng, hiển thị thông tin sản phẩm và form nhập liệu.

#### Bài tập 2: Thêm CSS để tạo layout và thiết kế responsive
- **Mô tả**: Áp dụng CSS để tạo bố cục linh hoạt với flexbox, thêm kiểu dáng cho các phần tử (header, nav, product-item, form), và đảm bảo responsive trên các kích thước màn hình (dưới 600px).
- **Kết quả**: Giao diện đẹp mắt, phù hợp với cả desktop và mobile.

#### Bài tập 3: Thêm JavaScript xử lý sự kiện và thao tác DOM
- **Mô tả**: Thêm chức năng tìm kiếm sản phẩm theo tên và nút "Add Flower" để hiển thị form thêm sản phẩm mới.
- **Kết quả**: Người dùng có thể tìm kiếm hoa và mở form nhập liệu mới thông qua JavaScript.

#### Bài tập 4: Tích hợp toàn bộ – Form đăng ký sản phẩm mới, hiển thị và cập nhật danh sách sản phẩm
- **Mô tả**: Hoàn thiện form thêm sản phẩm với kiểm tra dữ liệu (tên và giá), hiển thị sản phẩm mới trong danh sách, và thêm nút "Cancel".
- **Kết quả**: Hệ thống cho phép thêm sản phẩm mới thành công, với thông báo lỗi nếu dữ liệu không hợp lệ.

#### Bài tập 5: Lưu trữ dữ liệu sản phẩm với LocalStorage
- **Mô tả**: Sử dụng LocalStorage để lưu danh sách sản phẩm, tải sản phẩm khi trang load, và tự động lưu khi thêm sản phẩm mới.
- **Kết quả**: Dữ liệu sản phẩm được lưu trữ cục bộ và duy trì giữa các lần tải trang.

#### Bài tập 6: Tích hợp tính năng giỏ hàng với LocalStorage
- **Mô tả**: Thêm chức năng giỏ hàng với nút "Add to Cart" cho mỗi sản phẩm, hiển thị số lượng và tổng tiền, lưu trữ giỏ hàng trong LocalStorage, và nút "Clear Cart".
- **Kết quả**: Người dùng có thể thêm sản phẩm vào giỏ hàng, xem tổng tiền, và xóa toàn bộ giỏ hàng. Giao diện giỏ hàng toggle khi nhấp vào "Cart".

### Công nghệ sử dụng
- **HTML**: Cấu trúc trang web với semantic tags.
- **CSS**: Thiết kế giao diện và responsive layout.
- **JavaScript**: Xử lý sự kiện, thao tác DOM, và quản lý LocalStorage.

### Hạn chế và đề xuất
- **Hạn chế**: 
  - Giỏ hàng không hỗ trợ xóa từng sản phẩm hoặc chỉnh sửa số lượng.
  - Chưa tích hợp tính năng thanh toán hoặc xác nhận đơn hàng.
- **Đề xuất**: 
  - Thêm nút "Remove" cho từng item trong giỏ hàng.
  - Mở rộng với tính năng chọn số lượng trước khi thêm vào giỏ.
  - Tích hợp API đơn giản để mô phỏng thanh toán.

### Kết luận
Dự án Flower Shop đã hoàn thành các yêu cầu từ cơ bản đến nâng cao, cung cấp trải nghiệm cơ bản cho người dùng trong việc quản lý và mua sắm hoa. Các tính năng có thể được mở rộng thêm để đáp ứng nhu cầu thực tế hơn.

---
*Người thực hiện: Bình Mạc*  
*Ngày báo cáo: 24/10/2025*