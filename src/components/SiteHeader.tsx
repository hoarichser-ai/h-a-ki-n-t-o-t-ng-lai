import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Trang chủ" },
  { to: "/goc-nhin", label: "Góc nhìn" },
  { to: "/doanh-nghiep", label: "Doanh nghiệp" },
  { to: "/ung-vien", label: "Ứng viên" },
  { to: "/cau-chuyen", label: "Câu chuyện" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex h-20 items-center justify-between">
        <Link
          to="/"
          className="font-display text-2xl tracking-[0.3em] text-ivory hover:text-gold transition-colors"
          onClick={() => setOpen(false)}
        >
          HÒAn
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm tracking-wide text-ivory/75 hover:text-gold transition-colors duration-300"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/doanh-nghiep"
          className="hidden lg:inline-flex items-center gap-2 border border-gold/60 px-5 py-2.5 text-xs tracking-[0.18em] uppercase text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-500"
        >
          Đồng hành cùng Hòa
        </Link>

        <button
          aria-label="Mở menu"
          className="lg:hidden text-ivory p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bottom-0 bg-background/95 backdrop-blur-xl transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="container-editorial flex flex-col gap-8 pt-16">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-ivory hover:text-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/doanh-nghiep"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex w-fit items-center gap-2 border border-gold/60 px-5 py-3 text-xs tracking-[0.18em] uppercase text-gold"
          >
            Đồng hành cùng Hòa
          </Link>
        </nav>
      </div>
    </header>
  );
}
