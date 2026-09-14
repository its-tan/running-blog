# Running Blog

Blog cá nhân song ngữ (Việt/Anh) về kinh nghiệm chạy bộ và cách dùng tính năng đồng hồ để tập luyện.
Build bằng [Astro](https://astro.build), host trên GitHub Pages.

## Chạy thử ở máy local

```bash
npm install
npm run dev
```

Mở http://localhost:4321/running-blog/vi/ (hoặc /en/) để xem.

## Cấu trúc thư mục

- `src/content/blog/vi/` và `src/content/blog/en/` — nội dung bài viết (Markdown).
- `src/pages/vi/` và `src/pages/en/` — route theo từng ngôn ngữ.
- `src/layouts/`, `src/components/` — layout & component dùng chung.
- `src/i18n/ui.ts` — chuỗi giao diện song ngữ (nav, nhãn...).

## Thêm một bài viết mới

1. Tạo file Markdown mới trong `src/content/blog/vi/` (và bản dịch trong `src/content/blog/en/` nếu có), đặt tên dạng `YYYY-MM-DD-tieu-de.md`.
2. Điền front-matter theo schema trong `src/content.config.ts` (title, description, pubDate, lang, translationId, tags, watch, activityType, distanceKm...).
   - Hai bài vi/en của cùng một chủ đề nên dùng chung `translationId` để sau này liên kết nút chuyển ngôn ngữ trong bài (tính năng có thể mở rộng thêm).
3. Viết nội dung bằng Markdown như bình thường.

## Thêm ảnh vào bài viết

- Đặt ảnh gốc trong `src/assets/` (tạo thư mục nếu chưa có) để Astro tự tối ưu (resize, nén, WebP) khi build.
- Dùng component `src/components/Gallery.astro` để hiển thị nhiều ảnh dạng lưới trong một bài viết — xem comment trong file đó để biết cách import ảnh và truyền vào prop `images`.
- Nên nén/resize ảnh gốc xuống dưới ~3–4MB trước khi thêm vào repo để tránh repo phình to.

## Build & xem thử bản build

```bash
npm run build
npm run preview
```

## Deploy lên GitHub Pages

1. Tạo repo trên GitHub (ví dụ đặt tên `running-blog`), push code lên nhánh `main`.
2. Sửa `astro.config.mjs`: đổi `site` thành `https://<username-github-cua-ban>.github.io`.
   Nếu tên repo không phải `running-blog`, đổi luôn giá trị `base` cho khớp.
3. Vào repo trên GitHub → **Settings → Pages → Source**, chọn **GitHub Actions**.
4. Push lên nhánh `main` — workflow `.github/workflows/deploy.yml` sẽ tự build & deploy.
5. Sau khi chạy xong, site sẽ có ở `https://<username>.github.io/running-blog/`.

### Domain riêng (tùy chọn)

Thêm file `public/CNAME` chứa domain của bạn (ví dụ `blog.tenmien.com`), rồi trỏ bản ghi CNAME của domain về `<username>.github.io`.

## Việc nên làm tiếp theo

- Viết thêm bài, bổ sung ảnh thật cho từng bài (dùng `Gallery.astro`).
- Nối liên kết "đọc bản tiếng Anh/Việt" trong từng bài dựa vào `translationId`.
- Cân nhắc thêm bình luận (giscus), RSS feed (`@astrojs/rss`), hoặc nhúng dữ liệu buổi chạy từ Strava/Garmin Connect.
