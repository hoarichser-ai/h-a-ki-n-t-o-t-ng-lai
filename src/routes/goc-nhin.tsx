import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { reflections, categories } from "@/content/reflections";

export const Route = createFileRoute("/goc-nhin")({
  head: () => ({
    meta: [
      { title: "Góc nhìn — Suy ngẫm về con người, tổ chức và phát triển" },
      {
        name: "description",
        content:
          "Những suy ngẫm, quan sát và trải nghiệm về con người, tổ chức, lãnh đạo và sự phát triển bền vững từ Hòan.",
      },
      { property: "og:title", content: "Góc nhìn — Suy ngẫm về con người và tổ chức" },
      {
        property: "og:description",
        content: "Tủ sách điện tử của Hòan về lãnh đạo, tuyển dụng và phát triển con người.",
      },
    ],
  }),
  component: ReflectionsPage,
});

function ReflectionsPage() {
  const [active, setActive] = useState<string>("Tất cả");
  const filtered = active === "Tất cả" ? reflections : reflections.filter((r) => r.category === active);
  const [featured, ...rest] = filtered;

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="pt-40 pb-16">
        <div className="container-editorial">
          <RevealOnScroll>
            <div className="eyebrow mb-8">Góc nhìn</div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-ivory leading-[1.05] max-w-4xl">
              Góc nhìn & <span className="italic text-gold-soft">Chiêm nghiệm.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base lg:text-lg leading-relaxed text-muted-foreground">
              Những suy ngẫm, quan sát và trải nghiệm về con người,
              tổ chức và sự phát triển — viết bởi Hòan.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="pb-12 border-b border-border">
        <div className="container-editorial">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2.5 text-xs tracking-[0.18em] uppercase border transition-all duration-300 ${
                  active === c
                    ? "border-gold bg-gold text-primary-foreground"
                    : "border-border text-ivory/70 hover:border-gold/60 hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      {featured && (
        <section className="py-20">
          <div className="container-editorial">
            <RevealOnScroll>
              <article className="group grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
                <div>
                  <div className="eyebrow mb-5">Bài viết nổi bật · {featured.category}</div>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ivory leading-[1.15] group-hover:text-gold-soft transition-colors duration-500">
                    {featured.title}
                  </h2>
                  <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
                    {featured.excerpt}
                  </p>
                  <div className="mt-8 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    {featured.date} <span className="mx-2 text-gold/40">·</span> {featured.readingTime}
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* GRID */}
      {rest.length > 0 && (
        <section className="py-20 border-t border-border">
          <div className="container-editorial">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {rest.map((post, i) => (
                <RevealOnScroll key={post.slug} delay={i * 80}>
                  <article className="group cursor-pointer">
                    <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] group-hover:scale-105 group-hover:opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                      <div className="absolute top-5 left-5 eyebrow !text-ivory/90">
                        {post.category}
                      </div>
                    </div>
                    <div className="pt-6">
                      <h3 className="font-display text-xl lg:text-2xl text-ivory leading-snug group-hover:text-gold-soft transition-colors duration-500">
                        {post.title}
                      </h3>
                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="mt-5 text-xs tracking-[0.18em] uppercase text-muted-foreground">
                        {post.date}
                      </div>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
