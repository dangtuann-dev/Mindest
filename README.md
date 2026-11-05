# Mindest – tổ ấm cho tâm trí

Mindest là web app tiếng Việt giúp người trẻ 12–22 tuổi nhận diện **phong cách ứng phó với áp lực** qua 100 câu hỏi, rồi nhận một trong **16 nhân cách** với avatar riêng, mô tả chi tiết, lời khuyên sơ cứu cảm xúc, thói quen 7 ngày và báo cáo PDF.

> Đây là công cụ tự khám phá và sàng lọc sơ bộ, không phải công cụ y khoa. Trang web không đưa ra kết luận về sức khỏe tinh thần và không thay thế ý kiến của người có chuyên môn.

## Điểm chính

- **Riêng tư từ kiến trúc:** không có backend, không database, không đăng nhập, không API route. Câu trả lời chỉ nằm trong `sessionStorage` của tab đang mở và tự mất khi đóng tab.
- **Không theo dõi:** không analytics, không cookie, không script bên thứ ba. Font được tự lưu trữ, avatar và PDF được tạo ngay trên trình duyệt.
- **Mobile-first:** thang trả lời dạng nút lớn, bàn phím và trình đọc màn hình dùng được, tương phản theo WCAG AA, hỗ trợ dark mode theo hệ thống.
- **Nội dung có kiểm soát:** script `lint:content` chặn các từ ngữ mang tính kết luận y khoa trong toàn bộ nội dung hiển thị.

## Công nghệ

- Next.js 15 (App Router) + React 19 + TypeScript strict
- Tailwind CSS 3, font Be Vietnam Pro qua `next/font/local`
- DiceBear `@dicebear/core` + `@dicebear/collection` (style Lorelei, CC0 1.0) — sinh SVG ngay trong code, không gọi API
- `@react-pdf/renderer` cho PDF phía client
- Vitest cho thuật toán chấm điểm

## Chạy local

Yêu cầu Node.js 20 trở lên.

```bash
npm install
npm run dev
```

Mở http://localhost:3000.

### Các lệnh

| Lệnh                   | Việc cần làm                            |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Chạy môi trường phát triển              |
| `npm run build`        | Build static export vào thư mục `out/`  |
| `npm run start`        | Phục vụ thư mục `out/` bằng `serve`     |
| `npm run lint`         | ESLint                                  |
| `npm run lint:content` | Kiểm tra từ bị cấm trong nội dung       |
| `npm run test`         | Chạy Vitest                             |
| `npm run test:watch`   | Vitest ở chế độ theo dõi                |
| `npm run check`        | Lint + kiểm tra nội dung + test + build |

`next.config.mjs` đặt `output: "export"` và `trailingSlash: true`, nên toàn bộ site là HTML tĩnh. Không cần biến môi trường.

## Triển khai lên Vercel

1. Tạo repository trên GitHub và push mã nguồn:

   ```bash
   git init
   git add .
   git commit -m "Mindest: bản đầu tiên"
   git branch -M main
   git remote add origin https://github.com/<tài-khoản>/mindest.git
   git push -u origin main
   ```

2. Vào [vercel.com/new](https://vercel.com/new), chọn **Import Git Repository** và chọn repo vừa push.
3. Giữ nguyên cấu hình mặc định:
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: để trống (Vercel nhận `out/` từ `output: "export"`)
   - Environment Variables: không cần
4. Bấm **Deploy**. Mỗi lần push lên `main`, Vercel tự build lại.

Có thể kiểm tra bản build tĩnh trước khi deploy:

```bash
npm run build
npm run start
```

## Cấu trúc thư mục

```text
app/
  page.tsx                  Trang bắt đầu (mặc định khi mở web)
  trang-chu/page.tsx        Landing page, mở khi bấm logo
  bat-dau/page.tsx          Bí danh của trang bắt đầu (giữ cho liên kết cũ)
  lam-bai/page.tsx          Làm bài (client)
  ket-qua/page.tsx          Kết quả cá nhân (client, đọc sessionStorage)
  nhan-cach/page.tsx        Thư viện 16 nhân cách
  nhan-cach/[ma]/page.tsx   16 trang nhân cách tĩnh
  quyen-rieng-tu/page.tsx   Chính sách quyền riêng tư
components/                 UI, luồng làm bài, kết quả, PDF, avatar
config/partners.ts          Chỗ trống cấu hình đối tác hỗ trợ (giai đoạn sau)
data/
  questions.ts              100 câu hỏi
  axes.ts                   4 trục và nhãn hiển thị
  archetypes.ts             16 nhân cách, nội dung chi tiết
  avatars.ts                Cấu hình seed/màu avatar từng nhân cách
lib/
  scoring.ts                Thuật toán chấm điểm thuần
  session.ts                sessionStorage, định dạng ngày
  random.ts                 Xáo trộn câu hỏi theo seed
  avatar.ts                 Sinh SVG DiceBear + chuyển PNG
  report-document.tsx       Bố cục PDF A4
scripts/lint-content.mjs    Chặn từ bị cấm
tests/scoring.test.ts       31 ca kiểm thử thuật toán
public/fonts/               Be Vietnam Pro (TTF) cho web và PDF
```

## Cách hoạt động

1. Người dùng đọc disclaimer, chọn nhóm tuổi, xác nhận đồng ý (nhóm 12–15 cần thêm xác nhận của phụ huynh/người giám hộ), rồi bắt đầu bản đầy đủ 100 câu.
2. 96 câu phân loại được xáo trộn theo seed ngẫu nhiên của lượt làm bài; 4 câu an toàn luôn ở cuối và có thể bỏ qua. Mỗi trang 5 câu.
3. Mỗi trục có 12 câu cho mỗi cực. Điểm trung bình hai cực tạo ra vị trí trên trục; chênh lệch từ ±0.4 trở lên quyết định cực, dưới 0.4 hiển thị “Cân bằng”. Mã 4 ký tự ghép từ 4 cực.
4. Care Index = `0.6 × trung bình cực A + 0.4 × trung bình cực R`, chỉ hiển thị 3 bậc Nhẹ / Vừa / Cao.
5. Nếu câu an toàn 97, 98 hoặc 99 ở mức từ 2 trở lên, người dùng thấy màn hình hỗ trợ trước, kèm tổng đài 111 và gợi ý người lớn đáng tin. Chỉ khi chọn “Tiếp tục xem kết quả” mới thấy nhân cách.
6. Kết quả tổng hợp được lưu trong `sessionStorage` để trang kết quả và PDF đọc. Câu trả lời thô bị xóa khỏi bộ nhớ sau khi nộp bài.

## Quyền riêng tư

- Không có mã phía máy chủ, không gửi dữ liệu bài làm ra ngoài.
- Không dùng `localStorage` cho câu trả lời, không cookie, không analytics.
- Nút **“Xóa dữ liệu của mình”** có ở header/footer và trong luồng làm bài.
- Trang `/quyen-rieng-tu` giải thích chi tiết bằng tiếng Việt, có nhắc Nghị định 13/2023/NĐ-CP và quy định xác nhận của phụ huynh cho người dưới 16 tuổi.

## Nội dung và giấy phép

- **Avatar:** style **Lorelei** của **Lisa Wischofsky**, giấy phép **CC0 1.0**, phân phối qua DiceBear. Dòng ghi công có ở footer. SVG được sinh cục bộ bằng `@dicebear/core` + `@dicebear/collection`.
- **Font:** Be Vietnam Pro, giấy phép SIL Open Font License 1.1, tệp TTF đặt trong `public/fonts/` để dùng cho cả web và PDF.
- **Nội dung 16 nhân cách và 100 câu hỏi:** do dự án tự biên soạn cho mục đích tự khám phá, cần được người có chuyên môn về tâm lý học đường đọc duyệt trước khi phát hành rộng rãi.

## Kiểm tra thủ công trước khi ra mắt

- [ ] Đọc lại toàn bộ 100 câu hỏi và 16 mô tả nhân cách với một chuyên gia tâm lý học đường; đặc biệt phần câu an toàn và lời nhắn hỗ trợ.
- [ ] Kiểm tra giấy phép hiện tại của style DiceBear trên trang chính thức trước khi phát hành.
- [ ] Mở một báo cáo PDF trên điện thoại và máy tính, kiểm tra đầy đủ dấu tiếng Việt, chọn/copy được chữ, không có chữ bị cắt.
- [ ] Thử luồng có cờ an toàn (câu 97–99), luồng Care Index cao và luồng bỏ trống câu.
- [ ] Kiểm tra trình đọc màn hình và điều hướng bàn phím trên trang làm bài.
- [ ] Kiểm tra lại chính sách quyền riêng tư với người tư vấn pháp lý.

## Giả định đã chọn

- Câu an toàn được gộp vào trang cuối (1 câu phân loại + 4 câu an toàn) để giữ đúng 5 câu/trang và không tạo trang lẻ.
- Chỉ có một bản làm bài 100 câu; không còn lựa chọn bản rút gọn.
- Thời gian làm bài được tính từ lúc bắt đầu ở `/lam-bai` đến lúc bấm xem kết quả; ngưỡng “quá nhanh” là dưới 4 phút.
- PDF dùng font TTF nhúng và avatar được chuyển từ SVG sang PNG bằng canvas trước khi nhúng.
- Nút “Làm lại” đưa về `/`; dữ liệu cũ vẫn nằm trong tab cho đến khi bắt đầu lượt mới hoặc bấm xóa.
- Không có trang liên hệ/đối tác ở bản này; `config/partners.ts` là chỗ cắm đối tác hỗ trợ trong giai đoạn sau.

## Lưu ý pháp lý

Bản nháp, cần tư vấn pháp lý trước khi ra mắt chính thức.

Nội dung của Mindest mang tính tự khám phá, không phải dịch vụ y tế. Trước khi phát hành rộng rãi, cần rà soát lại theo quy định hiện hành về bảo vệ dữ liệu cá nhân, quyền trẻ em và nội dung sức khỏe tinh thần.
