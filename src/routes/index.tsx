import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SectionHeading } from "@/components/SectionHeading";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { reflections } from "@/content/reflections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hòa — Kết nối con người, kiến tạo tổ chức bền vững" },
      {
        name: "description",
        content:
          "Hòa đồng hành cùng doanh nghiệp và ứng viên trên hành trình phát triển bền vững — kết nối đúng người, kiến tạo môi trường đúng.",
      },
      { property: "og:title", content: "Hòa — Kết nối con người, kiến tạo tổ chức bền vững" },
      {
        property: "og:description",
        content: "Recruitment Strategist & Human Development Mentor.",
      },
      { property: "og:image", content: heroPortrait },
    ],
  }),
  component: HomePage,
});

const PARTNERS = ["VINGROUP", "MASAN", "FPT", "VPBANK", "SAMSUNG", "SHOPEE", "VNPAY"];

function HomePage() {
  const featured = reflections.slice(0, 4);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
        <div className="container-editorial relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <RevealOnScroll>
              <div className="eyebrow mb-8">
                Kết nối con người · Kiến tạo tổ chức bền vững
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
              <h1 className="font-display text-[2.6rem] sm:text-5xl lg:text-[4.25rem] leading-[1.05] text-ivory">
                Con người đúng
                <br />
                <span className="italic text-gold-soft">trong môi trường đúng</span>
                <br />
                sẽ tạo nên kết quả phi thường.
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <p className="mt-10 max-w-xl text-base lg:text-lg leading-relaxed text-muted-foreground">
                Hòa đồng hành cùng doanh nghiệp và ứng viên trên hành trình
                phát triển bền vững — tìm đúng người, đúng môi trường,
                đúng thời điểm.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={450}>
              <div className="mt-12 flex items-end gap-6">
                <div>
                  <div className="font-display text-4xl italic text-gold">Hòa</div>
                  <div className="mt-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    Recruitment Strategist
                    <span className="mx-2 text-gold/60">·</span>
                    Human Development Mentor
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-5">
            <RevealOnScroll delay={200}>
              <div className="relative aspect-[4/5] overflow-hidden vignette">
                <img
                  src={heroPortrait}
                  alt="Chân dung Hòa — Recruitment Strategist & Human Development Mentor"
                  className="absolute inset-0 h-full w-full object-cover"
                  width={1024}
                  height={1280}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* subtle backdrop accent */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-gold/5 blur-3xl" />
      </section>

      {/* ENTRY PATHS */}
      <section className="py-24 lg:py-36">
        <div className="container-editorial">
          <RevealOnScroll className="text-center mb-16">
            <div className="eyebrow mb-5">Chọn hành trình phù hợp với bạn</div>
            <div className="hairline w-24 mx-auto" />
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                to: "/doanh-nghiep",
                eyebrow: "Dành cho",
                title: "Tổ chức & Lãnh đạo",
                copy: "Xây đội ngũ mạnh, phát triển tổ chức và tạo giá trị bền vững.",
                cta: "Khám phá giải pháp dành cho doanh nghiệp",
              },
              {
                to: "/ung-vien",
                eyebrow: "Dành cho",
                title: "Người tìm kiếm sự phát triển",
                copy: "Tìm môi trường phù hợp để phát huy tiềm năng và phát triển sự nghiệp.",
                cta: "Khám phá cơ hội dành cho ứng viên",
              },
            ].map((card, i) => (
              <RevealOnScroll key={card.to} delay={i * 150}>
                <Link
                  to={card.to}
                  className="group relative block bg-surface border border-border p-10 lg:p-14 h-full transition-all duration-700 hover:border-gold/60 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_oklch(0.72_0.12_75_/_0.25)]"
                >
                  <div className="eyebrow mb-6 opacity-80">{card.eyebrow}</div>
                  <h3 className="font-display text-3xl lg:text-4xl uppercase tracking-wide text-ivory leading-tight">
                    {card.title}
                  </h3>
                  <p className="mt-6 text-muted-foreground leading-relaxed max-w-sm">
                    {card.copy}
                  </p>
                  <div className="mt-12 flex items-center gap-3 text-sm text-gold tracking-wide">
                    <span>{card.cta}</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-500 group-hover:translate-x-2"
                    />
                  </div>
                  {/* corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold/0 group-hover:border-gold/50 transition-colors duration-700" />
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-20 border-y border-border bg-surface/40">
        <div className="container-editorial">
          <RevealOnScroll className="text-center mb-12">
            <div className="eyebrow">Được tin tưởng bởi các tổ chức & đối tác</div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 lg:gap-x-20">
              {PARTNERS.map((name) => (
                <div
                  key={name}
                  className="font-display text-lg lg:text-xl tracking-[0.25em] text-ivory/40 hover:text-ivory/80 transition-colors duration-500"
                >
                  {name}
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* REFLECTIONS */}
      <section className="py-24 lg:py-36">
        <div className="container-editorial">
          <div className="flex items-end justify-between gap-8 mb-16 flex-wrap">
            <SectionHeading
              align="left"
              eyebrow="Góc nhìn"
              title={
                <>
                  Những suy ngẫm về <span className="italic text-gold-soft">con người,</span>
                  <br />
                  tổ chức và sự phát triển.
                </>
              }
              className="!mx-0"
            />
            <RevealOnScroll>
              <Link
                to="/goc-nhin"
                className="inline-flex items-center gap-2 text-sm text-gold tracking-wide hover:gap-3 transition-all duration-500"
              >
                Xem tất cả bài viết
                <ArrowUpRight size={16} />
              </Link>
            </RevealOnScroll>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featured.map((post, i) => (
              <RevealOnScroll key={post.slug} delay={i * 100}>
                <Link
                  to="/goc-nhin"
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] group-hover:scale-[1.05] group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/20" />
                    <div className="absolute top-5 left-5 eyebrow !text-ivory/90">
                      {post.category}
                    </div>
                  </div>
                  <div className="pt-6">
                    <h3 className="font-display text-xl lg:text-2xl text-ivory leading-snug group-hover:text-gold-soft transition-colors duration-500">
                      {post.title}
                    </h3>
                    <div className="mt-4 text-xs tracking-[0.18em] uppercase text-muted-foreground">
                      {post.date}
                      <span className="mx-2 text-gold/40">·</span>
                      {post.readingTime}
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY QUOTE */}
      <section className="relative py-28 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-background to-background" />
        <div className="container-editorial relative">
          <RevealOnScroll className="text-center max-w-4xl mx-auto">
            <div className="font-display text-5xl text-gold/40 leading-none mb-6">"</div>
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.25] text-ivory italic">
              Kết nối đúng sẽ tiết kiệm thời gian.
              <br />
              Kết nối đúng người sẽ thay đổi tương lai.
            </blockquote>
            <div className="mt-10 hairline w-24 mx-auto" />
            <Link
              to="/doanh-nghiep"
              className="mt-12 inline-flex items-center gap-3 border border-gold px-8 py-4 text-xs tracking-[0.22em] uppercase text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-500"
            >
              Bắt đầu kết nối cùng Hòa
              <ArrowRight size={14} />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </SiteLayout>
  );
}
