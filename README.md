## Hướng dẫn sử dụng

- Tải các thư viện:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

- Đầu tiên ta sẽ cần thay đổi file /src/config/site.tsx, tuỳ chỉnh nội dung theo ý bạn muốn.
- Sau đó ta có thể chạy được trang web bằng cách chạy lệnh `npm run dev` hoặc `yarn dev` hoặc `pnpm dev` hoặc `bun dev`.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Mở trang [http://localhost:3000](http://localhost:3000) Trên trình duyệt để xem kết quả.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## EventCard 3D ThreeJS:
- Chúng ta có để ý rằng có một component EventCard sử dụng ThreeJS để hiển thị một số hiệu ứng 3D. Tuy nhiên để tuỳ chỉnh 
cho nó phù hợp với nội dung của bạn, ta phải thực hiện hơi phức tạp một chút.
### Dây đeo:
- Với dây đeo, ta chỉ đơn giản tạo 1 file ảnh có kích thước 1024x248 và đặt vào thư mục /public/images

### Thẻ 3D:
- Cái này khá phức tạp hơn, ta cần phải tạo một model 3D của thẻ, sau đó export ra file GLTF hoặc GLB.
- Tuy nhiên, Vercel đã làm rồi và chúng ta sẽ sử dụng file GLB mẫu của họ. [Tải tại đây](https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb)
- Sau đó chúng ta sẽ chuẩn bị như sau: 
  - Chuẩn bị 2 ảnh cho mặt trước và mặt sau của thẻ, kích thước 512x770.
  - Ghép 2 ảnh vào 1 ảnh có kích thước 1024x1024.
  - Mở file GLB bằng Blender hoặc 3DS Max, sau đó thay ảnh mặt trước và mặt sau bằng ảnh mà bạn đã chuẩn bị
  - Export lại file GLB và đặt vào thư mục /public/models
  - Thay đổi đường dẫn file GLB trong file site.tsx
- Vậy là bạn đã có thể sử dụng EventCard ThreeJS với nội dung của mình.
- Chi tiết hơn bạn có thể xem tại Youtube của tôi: Coming soon ...

## Tài nguyên và tham khảo:
- https://vercel.com/blog/building-an-interactive-3d-event-badge-with-react-three-fiber
- https://ui.aceternity.com/