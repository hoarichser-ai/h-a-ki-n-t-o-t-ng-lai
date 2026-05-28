import r1 from "@/assets/reflection-1.jpg";
import r2 from "@/assets/reflection-2.jpg";
import r3 from "@/assets/reflection-3.jpg";
import r4 from "@/assets/reflection-4.jpg";

export type Reflection = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  readingTime: string;
};

export const reflections: Reflection[] = [
  {
    slug: "vi-sao-tuyen-dung-dung-nguoi-kho-hon-tuyen-gioi",
    category: "Lãnh đạo",
    title: "Vì sao tuyển đúng người khó hơn tuyển giỏi?",
    excerpt:
      "Khi tổ chức trưởng thành, năng lực không còn là biến số quan trọng nhất. Sự phù hợp về giá trị và bối cảnh mới là điều quyết định.",
    date: "12.05.2024",
    image: r1,
    readingTime: "6 phút đọc",
  },
  {
    slug: "xay-van-hoa-giu-chan-nhan-tai",
    category: "Tổ chức",
    title: "Xây văn hoá giữ chân nhân tài trong thời đại mới",
    excerpt:
      "Văn hoá không phải khẩu hiệu treo trên tường. Nó là cách chúng ta đối xử với nhau khi không có ai quan sát.",
    date: "28.04.2024",
    image: r2,
    readingTime: "8 phút đọc",
  },
  {
    slug: "tu-duy-lanh-dao-trong-thoi-ky-bien-dong",
    category: "Tư duy",
    title: "Tư duy lãnh đạo trong thời kỳ biến động",
    excerpt:
      "Người lãnh đạo bền vững không phải người đoán đúng tương lai, mà là người tạo ra sự ổn định nội tâm cho đội ngũ của mình.",
    date: "14.04.2024",
    image: r3,
    readingTime: "7 phút đọc",
  },
  {
    slug: "phat-trien-con-nguoi-la-dau-tu-sinh-loi-nhat",
    category: "Phát triển",
    title: "Phát triển con người là đầu tư sinh lời nhất",
    excerpt:
      "Mọi khoản đầu tư đều có giới hạn, ngoại trừ đầu tư vào con người. Đó là nguồn lực duy nhất sinh sôi theo thời gian.",
    date: "02.04.2024",
    image: r4,
    readingTime: "5 phút đọc",
  },
  {
    slug: "nghe-thuat-dat-cau-hoi-trong-tuyen-dung",
    category: "Tuyển dụng",
    title: "Nghệ thuật đặt câu hỏi trong tuyển dụng",
    excerpt:
      "Một câu hỏi đủ sâu có thể mở ra cả một con người. Câu trả lời chỉ là phần nổi của những gì người đó thực sự là.",
    date: "20.03.2024",
    image: r1,
    readingTime: "6 phút đọc",
  },
  {
    slug: "khi-nao-mot-to-chuc-can-thay-doi",
    category: "Tổ chức",
    title: "Khi nào một tổ chức cần thay đổi?",
    excerpt:
      "Không phải khi mọi thứ tan vỡ, mà là khi sự ổn định bắt đầu khiến chúng ta ngừng đặt câu hỏi.",
    date: "08.03.2024",
    image: r2,
    readingTime: "9 phút đọc",
  },
];

export const categories = ["Tất cả", "Lãnh đạo", "Tuyển dụng", "Phát triển", "Tổ chức", "Tư duy"] as const;
