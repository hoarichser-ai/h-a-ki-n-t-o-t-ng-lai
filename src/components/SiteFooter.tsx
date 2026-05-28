import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-editorial py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="font-display text-3xl tracking-[0.25em] text-ivory">HÒAn</div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Kết nối đúng người. Kiến tạo tổ chức bền vững.
              Đồng hành cùng những hành trình phát triển sâu sắc.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-5">Điều hướng</div>
            <ul className="space-y-3 text-sm text-ivory/80">
              <li><Link to="/goc-nhin" className="hover:text-gold transition-colors">Góc nhìn</Link></li>
              <li><Link to="/doanh-nghiep" className="hover:text-gold transition-colors">Doanh nghiệp</Link></li>
              <li><Link to="/ung-vien" className="hover:text-gold transition-colors">Ứng viên</Link></li>
              <li><Link to="/cau-chuyen" className="hover:text-gold transition-colors">Câu chuyện</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-5">Kết nối</div>
            <ul className="space-y-3 text-sm text-ivory/80">
              <li><a href="mailto:hello@hoa.com" className="hover:text-gold transition-colors">hello@hoa.com</a></li>
              <li><a href="https://linkedin.com" className="hover:text-gold transition-colors">LinkedIn</a></li>
              <li className="text-muted-foreground">Hà Nội · TP. Hồ Chí Minh</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 hairline" />
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Hòa. Bảo lưu mọi quyền.</p>
          <p className="italic">"Kết nối đúng người sẽ thay đổi tương lai của tổ chức."</p>
        </div>
      </div>
    </footer>
  );
}
