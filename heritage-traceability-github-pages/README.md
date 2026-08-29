# Heritage Traceability

Landing page truy xuất cho sản phẩm **Dấu Ấn Thượng Triều Nguyễn**, xây dựng bằng Vite, React và Tailwind CSS.

## Chạy project

Yêu cầu Node.js 18 trở lên.

```bash
npm install
npm run dev
```

Mở địa chỉ Vite hiển thị trong terminal (thường là `http://localhost:5173`).

## Build production

```bash
npm run build
npm run preview
```

Thư mục build được tạo tại `dist/`.

## Đưa lên GitHub Pages

Project có sẵn workflow `.github/workflows/deploy-pages.yml`. Hãy đưa **nội
dung bên trong thư mục project** lên gốc repository, sao cho `package.json`,
`index.html`, `src/` và `.github/` nằm ngay ở cấp đầu tiên.

1. Push code lên nhánh `main`.
2. Mở repository trên GitHub → **Settings → Pages**.
3. Tại **Build and deployment → Source**, chọn **GitHub Actions**.
4. Mở tab **Actions** và đợi workflow “Deploy website to GitHub Pages” hoàn tất.
5. Địa chỉ website sẽ có dạng `https://<username>.github.io/<repository>/`.

Không chọn `Deploy from a branch` cho source code Vite chưa build. Nếu muốn
dùng chế độ đó, bạn phải xuất bản nội dung của thư mục `dist`, không phải thư
mục source code.

## Cấu trúc

- `src/components/`: header và các thành phần dùng lại
- `src/sections/`: 6 section chính và khu Hồ sơ xác thực
- `src/data/`: dữ liệu sản phẩm và nhãn công bố
- `public/assets/`: ảnh gốc người dùng cung cấp

## Lưu ý dữ liệu

- `STT-01-HERITAGE` là mã demo.
- Trạng thái chỉ là “Mã truy xuất hợp lệ”, không phải xác nhận sản phẩm chính hãng.
- Lô, serial, số/ngày cấp quyền tác giả, chủ sở hữu demo và số kiểm kê là dữ liệu giả định; giao diện có nhãn công bố tương ứng.
- Các nút hồ sơ chỉ minh họa cấu trúc giao diện, không chứa tài liệu pháp lý thật.
