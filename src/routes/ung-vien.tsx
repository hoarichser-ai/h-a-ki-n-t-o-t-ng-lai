import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SectionHeading } from "@/components/SectionHeading";
import candidateHero from "@/assets/candidate-hero.jpg";
import community from "@/assets/community.jpg";

export const Route = createFileRoute("/ung-vien")({
  head: () => ({
    meta: [
      { title: "Ứng viên — Tìm môi trường để phát huy năng lực" },
      {
        name: "description",
        content:
          "Hòa đồng hành cùng bạn trên hành trình phát triển sự nghiệp và bản thân — tìm môi trường phù hợp để sống với giá trị của bạn.",
      },
      { property: "og:title", content: "Ứng viên — Tìm môi trường để phát huy năng lực" },
      {
        property: "og:description",
        content: "Định hướng sự nghiệp, mentoring và cơ hội phù hợp.",
      },
      { property: "og:image", content: candidateHero },
    ],
  }),
  component: CandidatePage,
});

const VALUES = [
  { t: "Định hướng sự nghiệp rõ ràng", d: "Hiểu rõ năng lực, giá trị và điểm mạnh để chọn con đường phù hợp." },
  { t: "Kỹ năng & tư duy để phát triển", d: "Mở rộng năng lực lãnh đạo bản thân và tư duy chiến lược dài hạn." },
  { t: "Cơ hội làm việc chất lượng", d: "Tiếp cận môi trường được Hòa chọn lọc — phù hợp với giai đoạn của bạn." },
  { t: "Mentor 1-1 & đồng hành sâu", d: "Một người đồng hành đủ sâu để giúp bạn vượt qua những khúc quanh nghề nghiệp." },
];

const JOURNEY = [
  { n: "01", t: "Hiểu bản thân", d: "Khám phá năng lực, giá trị và định hướng nghề nghiệp." },
  { n: "02", t: "Xây lộ trình phát triển", d: "Thiết lập mục tiêu và kế hoạch hành động rõ ràng." },
  { n: "03", t: "Kết nối cơ hội phù hợp", d: "Tìm môi trường đúng để bạn toả sáng và phát triển." },
];

const OPPORTUNITIES = [
  { role: "Product Manager", company: "Fintech Startup", loc: "HCM", range: "30–50 triệu" },
  { role: "Marketing Lead", company: "Tổ chức công nghệ", loc: "HCM", range: "25–40 triệu" },
  { role: "Business Analyst", company: "Ngân hàng số", loc: "Hà Nội", range: "20–35 triệu" },
];

function CandidatePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={candidateHero} alt="" className="h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        <div className="container-editorial relative z-10">
          <div className="max-w-3xl">
            <RevealOnScroll>
              <div className="eyebrow mb-8">Dành cho người tìm sự phát triển</div>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] text-ivory">
                Tìm môi trường phù hợp
                <br />
                để phát huy năng lực
                <br />
                và <span className="italic text-gold-soft">sống với giá trị của bạn.</span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={300}>
              <p className="mt-10 max-w-xl text-base lg:text-lg leading-relaxed text-muted-foreground">
                Hòa đồng hành cùng bạn trên hành trình phát triển sự nghiệp
                và bản thân — không vội vã, không hời hợt.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 lg:py-32">
        <div className="container-editorial">
          <SectionHeading eyebrow="Đồng hành cùng Hòa" title="Bạn sẽ nhận được gì?" />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {VALUES.map((v, i) => (
              <RevealOnScroll key={v.t} delay={i * 100}>
                <div className="border border-border bg-surface p-8 h-full hover:border-gold/40 transition-colors duration-500">
                  <div className="hairline w-10 mb-8" />
                  <h3 className="font-display text-xl text-ivory leading-snug">{v.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section className="py-24 lg:py-32 bg-surface/40">
        <div className="container-editorial">
          <SectionHeading eyebrow="Cơ hội" title="Cơ hội việc làm nổi bật" />
          <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
            {OPPORTUNITIES.map((o, i) => (
              <RevealOnScroll key={o.role} delay={i * 100}>
                <div className="border border-border bg-background p-10 h-full hover:border-gold/40 hover:-translate-y-1 transition-all duration-500">
                  <div className="eyebrow mb-5">{o.company}</div>
                  <h3 className="font-display text-2xl text-ivory">{o.role}</h3>
                  <div className="mt-8 space-y-3 text-sm text-muted-foreground">
                    <div className="flex justify-between border-b border-border pb-2">
                      <span>Địa điểm</span><span className="text-ivory/80">{o.loc}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mức đãi ngộ</span><span className="text-ivory/80">{o.range}</span>
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

      {/* COMMUNITY */}
      <section className="py-24 lg:py-32">
        <div className="container-editorial grid lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div className="relative aspect-[5/4] overflow-hidden vignette">
              <img
                src={community}
                alt="Cộng đồng phát triển cùng Hòa"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={150}>
            <div className="eyebrow mb-5">Cộng đồng & phát triển</div>
            <h2 className="font-display text-4xl lg:text-5xl text-ivory leading-[1.15]">
              Nơi bạn được <span className="italic text-gold-soft">chia sẻ, học hỏi</span>
              <br />
              và phát triển cùng những
              <br />
              người cùng mục tiêu.
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-md">
              Những buổi workshop, sharing session và những cuộc trò chuyện thật —
              nơi bạn không cần phải giả vờ mình đã có câu trả lời.
            </p>
            <Link
              to="/cau-chuyen"
              className="mt-10 inline-flex items-center gap-3 text-sm text-gold tracking-wide hover:gap-4 transition-all duration-500"
            >
              Tham gia ngay <ArrowRight size={16} />
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-24 lg:py-32 bg-surface/40">
        <div className="container-editorial">
          <SectionHeading eyebrow="Mentorship" title="Hành trình được đồng hành" />
          <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-12">
            {JOURNEY.map((j, i) => (
              <RevealOnScroll key={j.n} delay={i * 120}>
                <div className="border-t border-gold/40 pt-8">
                  <div className="font-display text-5xl text-gold">{j.n}</div>
                  <h3 className="mt-6 font-display text-2xl text-ivory">{j.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{j.d}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll className="mt-20 max-w-2xl mx-auto text-center">
            <p className="font-display italic text-xl md:text-2xl text-ivory/80 leading-relaxed">
              "Một số người chọn được đồng hành sâu hơn để phát triển sự nghiệp
              và bản thân dài hạn."
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-40">
        <div className="container-editorial">
          <RevealOnScroll className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-ivory">
              Sẵn sàng cho chương mới trong sự nghiệp?
              <br />
              <span className="italic text-gold-soft">Hãy chia sẻ hành trình của bạn với Hòa.</span>
            </h2>
            <Link
              to="/cau-chuyen"
              className="mt-12 inline-flex items-center gap-3 border border-gold px-8 py-4 text-xs tracking-[0.22em] uppercase text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-500"
            >
              Chia sẻ ngay
              <ArrowRight size={14} />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </SiteLayout>
  );
}
