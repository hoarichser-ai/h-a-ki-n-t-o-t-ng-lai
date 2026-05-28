import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import s1 from "@/assets/story-1.jpg";
import s2 from "@/assets/story-2.jpg";
import s3 from "@/assets/story-3.jpg";

export const Route = createFileRoute("/cau-chuyen")({
  head: () => ({
    meta: [
      { title: "Câu chuyện — Những hành trình được đồng hành" },
      {
        name: "description",
        content:
          "Những câu chuyện thật về chuyển hoá tổ chức, hành trình lãnh đạo và sự phát triển con người mà Hòa đã đồng hành.",
      },
      { property: "og:title", content: "Câu chuyện — Những hành trình được đồng hành" },
      {
        property: "og:description",
        content: "Story-driven case studies về tổ chức, lãnh đạo và con người.",
      },
      { property: "og:image", content: s1 },
    ],
  }),
  component: StoriesPage,
});

const STORIES = [
  {
    image: s1,
    tag: "Công ty công nghệ · 200 nhân sự",
    title: "Khi tuyển dụng trở thành chiến lược, không chỉ là quy trình.",
    body:
      "Trong 9 tháng đồng hành, đội ngũ sáng lập đã chuyển từ cảm giác “phải tuyển nhanh để kịp tăng trưởng” sang một cách tiếp cận điềm tĩnh hơn — bắt đầu từ chiến lược và văn hoá. Kết quả không chỉ là 12 vị trí cốt lõi được lấp đầy, mà là một cách nghĩ mới về con người trong tổ chức.",
  },
  {
    image: s2,
    tag: "Doanh nghiệp bán lẻ · 800 nhân sự",
    title: "Xây lớp lãnh đạo kế cận từ bên trong.",
    body:
      "Thay vì tìm kiếm bên ngoài, Hòa cùng ban lãnh đạo nhìn lại đội ngũ hiện hữu — và phát hiện ra rằng 70% nhân tài cần thiết đã ở sẵn trong tổ chức, chỉ thiếu một con đường để phát triển. 18 tháng sau, văn hoá ‘phát triển từ bên trong’ trở thành lợi thế cạnh tranh thật sự.",
  },
  {
    image: s3,
    tag: "Startup fintech · giai đoạn Series A",
    title: "Đồng hành nhà sáng lập qua giai đoạn chuyển mình.",
    body:
      "Khi sản phẩm bắt đầu có lực kéo, nhà sáng lập đối mặt với câu hỏi: ai sẽ cùng tôi đi xa? Quá trình đồng hành không chỉ là tuyển người, mà là cùng định hình mô hình tổ chức, văn hoá và những cuộc đối thoại khó. Đội ngũ nòng cốt được hình thành trong 6 tháng — và vẫn ở lại sau ba năm.",
  },
];

function StoriesPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="pt-40 pb-16">
        <div className="container-editorial max-w-4xl">
          <RevealOnScroll>
            <div className="eyebrow mb-8">Câu chuyện</div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-ivory leading-[1.05]">
              Những hành trình được <span className="italic text-gold-soft">đồng hành.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base lg:text-lg leading-relaxed text-muted-foreground">
              Không phải case study. Đây là những câu chuyện thật về con người,
              tổ chức và sự chuyển hoá — kể bằng sự tôn trọng.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* STORIES */}
      <section className="py-20">
        <div className="container-editorial space-y-32 lg:space-y-40">
          {STORIES.map((s, i) => (
            <RevealOnScroll key={s.title}>
              <article
                className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-7">
                  <div className="relative aspect-[4/3] overflow-hidden vignette">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="font-display text-6xl text-gold/30 leading-none">
                    0{i + 1}
                  </div>
                  <div className="eyebrow mt-6 mb-4">{s.tag}</div>
                  <h2 className="font-display text-3xl md:text-4xl text-ivory leading-[1.2]">
                    {s.title}
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-40 border-t border-border">
        <div className="container-editorial">
          <RevealOnScroll className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-ivory">
              Mỗi câu chuyện bắt đầu bằng
              <br />
              <span className="italic text-gold-soft">một cuộc trò chuyện thật.</span>
            </h2>
            <a
              href="mailto:hello@hoa.com"
              className="mt-12 inline-flex items-center gap-3 border border-gold px-8 py-4 text-xs tracking-[0.22em] uppercase text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-500"
            >
              Bắt đầu câu chuyện của bạn
              <ArrowRight size={14} />
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </SiteLayout>
  );
}
