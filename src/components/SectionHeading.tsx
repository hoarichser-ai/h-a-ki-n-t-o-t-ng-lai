import type { ReactNode } from "react";
import { RevealOnScroll } from "./RevealOnScroll";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const isCenter = align === "center";
  return (
    <RevealOnScroll
      className={`${isCenter ? "text-center mx-auto" : "text-left"} max-w-3xl ${className}`}
    >
      {eyebrow && <div className="eyebrow mb-5">{eyebrow}</div>}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ivory">
        {title}
      </h2>
      {description && (
        <p className={`mt-6 text-base md:text-lg leading-relaxed text-muted-foreground ${isCenter ? "mx-auto" : ""} max-w-2xl`}>
          {description}
        </p>
      )}
    </RevealOnScroll>
  );
}
