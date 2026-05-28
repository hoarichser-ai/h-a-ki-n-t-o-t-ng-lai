import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SectionHeading } from "@/components/SectionHeading";
import businessHero from "@/assets/business-hero.jpg";
import s1 from "@/assets/story-1.jpg";
import s2 from "@/assets/story-2.jpg";
import s3 from "@/assets/story-3.jpg";

export const Route = createFileRoute("/doanh-nghiep")({
  head: () => ({
    meta: [
      { title: "Doanh nghiệp — Hòa đồng hành cùng tổ chức & lãnh đạo" },
      {
        name: "description",
        content:
          "Hòa đồng hành cùng lãnh đạo xây hệ thống, phát triển đội ngũ và kiến tạo văn hoá hiệu quả — giải bài toán con người cho tổ chức bền vững.",
      },
      { property: "og:title", content: "Doanh nghiệp — Hòa đồng hành cùng tổ chức & lãnh đạo" },
      {
        property: "og:description",
        content: "Chiến lược tuyển dụng, phát triển đội ngũ và mentoring lãnh đạo.",
      },
      { property: "og:image", content: businessHero },
    ],
  }),
  component: BusinessPage,
});

const PAIN_POINTS = [
  { t: "Tuyển mãi không đúng người", d: "Quy trình tốn kém, nhưng vẫn không tìm được người phù hợp với văn hoá và bài toán thực sự của tổ chức." },
  { t: "Người giỏi không ở lại lâu", d: "Nhân tài đến rồi đi vì môi trường, định hướng hoặc cách dẫn dắt chưa đủ chiều sâu giữ họ ở lại." },
  { t: "Quy trình tuyển dụng thiếu hiệu quả", d: "Thiếu khung tiêu chuẩn, đánh giá chủ quan, không gắn với chiến lược dài hạn của doanh nghiệp." },
  { t: "Đội ngũ thiếu hệ thống & gắn kết", d: "Tăng trưởng nhanh nhưng cấu trúc không theo kịp, khiến văn hoá và sự gắn kết bị bào mòn." },
  { t: "Lãnh đạo quá tải", d: "Người sáng lập gánh quá nhiều vai trò, không đủ thời gian để tư duy chiến lược và phát triển con người." },
];

const PERSPECTIVES = [
  {
    t: "Hiểu chiến lược kinh doanh",
    d: "Tuyển dụng phải bắt đầu từ mục tiêu và chiến lược doanh nghiệp — không chỉ từ vị trí trống.",
  },
  {
    t: "Hiểu con người & văn hoá",
    d: "Đúng năng lực không đủ. Phải đúng giá trị, đúng giai đoạn và đúng môi trường mới bền vững.",
  },
  {
    t: "Thiết kế hệ thống & phát triển đội ngũ",
    d: "Xây quy trình, tiêu chuẩn và môi trường để con người phát triển — thay vì chỉ lấp chỗ trống.",
  },
];

const COLLABORATIONS = [
  "Chiến lược tuyển dụng",
  "Thiết kế quy trình tuyển dụng",
  "Tìm kiếm & thu hút nhân tài",
  "Leadership Mentoring",
  "Phát triển đội ngũ & văn hoá",
];

const STORIES = [
  {
    tag: "Công ty công nghệ",
    title: "Tái cấu trúc hệ thống tuyển dụng",
    copy: "Giảm 40% thời gian tuyển dụng, tăng 70% chất lượng ứng viên qua việc thiết kế lại khung tiêu chuẩn và quy trình phỏng vấn.",
    image: s1,
  },
  {
    tag: "Doanh nghiệp bán lẻ",
    title: "Xây văn hoá & đội ngũ quản lý kế cận",
    copy: "Thiết lập tiêu chuẩn lãnh đạo và lộ trình phát triển nội bộ — tăng 30% giữ chân quản lý cấp trung trong 18 tháng.",
    image: s2,
  },
  {
    tag: "Startup fintech",
    title: "Xây văn hoá & đội ngũ nòng cốt",
    copy: "Đồng hành nhà sáng lập xây nền tảng con người và mô hình tổ chức — tăng tốc tăng trưởng gấp ba trong hai năm.",
    image: s3,
  },
];

const TALENT_POOL = [
  { role: "Product Manager", domain: "Fintech Startup", loc: "HCM", range: "30–50 triệu" },
  { role: "Marketing Lead", domain: "Tổ chức công nghệ", loc: "HCM", range: "25–40 triệu" },
  { role: "Business Analyst", domain: "Ngân hàng số", loc: "Hà Nội", range: "20–35 triệu" },
];

function BusinessPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={businessHero}
            alt=""
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>

        <div className="container-editorial relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <RevealOnScroll>
              <div className="eyebrow mb-8">Dành cho tổ chức & lãnh đạo</div>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] text-ivory">
                Giúp bạn giải quyết bài toán
                <br />
                <span className="italic text-gold-soft">con người</span> để tổ chức
                <br />
                phát triển bền vững.
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={300}>
              <p className="mt-10 max-w-2xl text-base lg:text-lg leading-relaxed text-muted-foreground">
                Không chỉ tuyển người. Hòa đồng hành cùng lãnh đạo xây hệ thống,
                phát triển đội ngũ và kiến tạo văn hoá hiệu quả.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-24 lg:py-32">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Hiện thực tổ chức"
            title="Những vấn đề doanh nghiệp thường gặp"
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {PAIN_POINTS.map((p, i) => (
              <RevealOnScroll key={p.t} delay={i * 80} className="bg-background">
                <div className="p-10 h-full">
                  <div className="font-display text-3xl text-gold/60">0{i + 1}</div>
                  <h3 className="mt-6 font-display text-2xl text-ivory leading-snug">{p.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* HÒA'S PERSPECTIVE */}
      <section className="py-24 lg:py-32 bg-surface/40">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Hoà nhìn nhận & tiếp cận"
            title={<>Tuyển dụng là <span className="italic text-gold-soft">chiến lược con người,</span> không chỉ là quy trình.</>}
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
            {PERSPECTIVES.map((p, i) => (
              <RevealOnScroll key={p.t} delay={i * 120}>
                <div className="border border-border bg-background p-10 h-full hover:border-gold/40 transition-colors duration-500">
                  <div className="hairline w-10 mb-8" />
                  <h3 className="font-display text-2xl text-ivory leading-snug">{p.t}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* COLLABORATIONS */}
      <section className="py-24 lg:py-32">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Đồng hành"
            title="Những cách Hòa thường đồng hành cùng doanh nghiệp"
          />
          <div className="mt-16 max-w-4xl mx-auto">
            {COLLABORATIONS.map((c, i) => (
              <RevealOnScroll key={c} delay={i * 80}>
                <div className="group flex items-baseline justify-between gap-8 py-8 border-b border-border hover:border-gold/40 transition-colors duration-500">
                  <div className="flex items-baseline gap-8">
                    <span className="font-display text-sm text-gold/60 tracking-[0.2em]">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl text-ivory group-hover:text-gold-soft transition-colors duration-500">
                      {c}
                    </h3>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-gold/50 transition-all duration-500 group-hover:text-gold group-hover:translate-x-2"
                  />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* REAL STORIES */}
      <section className="py-24 lg:py-32 bg-surface/40">
        <div className="container-editorial">
          <SectionHeading eyebrow="Case study" title="Câu chuyện thực tế" />
          <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
            {STORIES.map((s, i) => (
              <RevealOnScroll key={s.title} delay={i * 120}>
                <article className="group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                  <div className="pt-6">
                    <div className="eyebrow mb-3">{s.tag}</div>
                    <h3 className="font-display text-2xl text-ivory leading-snug">{s.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CURATED TALENT */}
      <section className="py-24 lg:py-32">
        <div className="container-editorial">
          <SectionHeading eyebrow="Talent pool" title="Tiếp cận nguồn ứng viên chất lượng" />
          <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
            {TALENT_POOL.map((t, i) => (
              <RevealOnScroll key={t.role} delay={i * 100}>
                <div className="border border-border bg-surface p-10 h-full hover:border-gold/40 hover:-translate-y-1 transition-all duration-500">
                  <div className="eyebrow mb-6">{t.domain}</div>
                  <h3 className="font-display text-2xl text-ivory">{t.role}</h3>
                  <div className="mt-8 space-y-3 text-sm text-muted-foreground">
                    <div className="flex justify-between border-b border-border pb-2">
                      <span>Địa điểm</span><span className="text-ivory/80">{t.loc}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mức đãi ngộ</span><span className="text-ivory/80">{t.range}</span>
                    </div>
                  </div>
                  <div className="mt-8 text-xs tracking-[0.2em] uppercase text-gold flex items-center gap-2">
                    Xem chi tiết <ArrowRight size={12} />
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-40">
        <div className="container-editorial">
          <RevealOnScroll className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-ivory">
              Nếu bạn đang tìm đúng người để cùng xây điều lớn hơn,
              <br />
              <span className="italic text-gold-soft">hãy chia sẻ bài toán của bạn với Hòa.</span>
            </h2>
            <Link
              to="/cau-chuyen"
              className="mt-12 inline-flex items-center gap-3 border border-gold px-8 py-4 text-xs tracking-[0.22em] uppercase text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-500"
            >
              Kết nối cùng Hòa
              <ArrowRight size={14} />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </SiteLayout>
  );
}
