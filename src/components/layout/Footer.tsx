import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { navItems, trialLink } from '@/lib/navigation';
import { cloudinary } from '@/lib/cloudinary';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-ink-300/40 bg-cream-100">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-[20px] bg-ink-900">
                <img
                  src={cloudinary("https://res.cloudinary.com/wsaz946u/image/upload/v1788166775/logo-ile.png", 24, 24)}
                  alt="ILE English Center"
                  className="h-6 w-6 rounded-[14px] object-cover"
                />
              </span>
              <span className="font-heading text-xl font-extrabold tracking-tight text-ink-900">
                ILE
              </span>
            </Link>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-ink-600">
              Trung tâm Tiếng Anh uy tín cho trẻ em từ 3 đến 15 tuổi tại Việt
              Nam.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-ink-900">
              Khám phá
            </h2>
            <ul className="mt-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to === '/chuong-trinh-hoc' ? '/#ba-the-gioi-mot-hanh-trinh' : item.to}
                    className="font-body text-sm text-ink-600 transition-colors hover:text-ink-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-ink-900">
              Liên hệ
            </h2>
            <ul className="mt-4 space-y-3 font-body text-sm text-ink-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ink-500" />
                <span>123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-ink-500" />
                <span>+84 28 1234 5678</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-ink-500" />
                <span>hello@ile.edu.vn</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-ink-900">
              Bắt đầu hành trình
            </h2>
            <p className="mt-4 font-body text-sm text-ink-600">
              Đăng ký học thử miễn phí cho bé yêu của bạn.
            </p>
            <a href={trialLink} target="_blank" rel="noopener noreferrer" className="btn-accent mt-4 w-full md:w-auto">
              Đăng ký học thử
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-300/40 pt-6 md:flex-row">
          <p className="font-body text-xs text-ink-500">
            © {new Date().getFullYear()} ILE English Center. Bảo lưu mọi quyền.
          </p>
          <p className="font-body text-xs text-ink-500">
            Thiết kế vì tương lai của trẻ.
          </p>
        </div>
      </div>
    </footer>
  );
}
