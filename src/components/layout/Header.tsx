import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navItems, trialLink, type NavItem } from '@/lib/navigation';
import { cloudinary } from '@/lib/cloudinary';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setExpandedMobile(null);
  }, [location]);

  return (
    <header
      className={[
        'sticky top-0 z-50 transition-all duration-300 ease-smooth',
        scrolled
          ? 'bg-cream-100/90 shadow-soft backdrop-blur-md'
          : 'bg-cream-100/60 backdrop-blur-sm',
      ].join(' ')}
    >
      <div className="container-page">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2.5"
            aria-label="ILE English Center - Trang chủ"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-[20px] bg-ink-900 shadow-soft transition-transform duration-300 ease-smooth group-hover:scale-105">
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

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <DesktopNavLink key={item.to} item={item} />
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href={trialLink} target="_blank" rel="noopener noreferrer" className="btn-accent">
              Đăng ký học thử
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-default text-ink-800 transition-colors hover:bg-cream-200 lg:hidden"
            aria-label={open ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink-300/40 bg-cream-100 lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <MobileNavItem
                key={item.to}
                item={item}
                expandedKey={expandedMobile}
                toggleExpand={setExpandedMobile}
              />
            ))}
            <a href={trialLink} target="_blank" rel="noopener noreferrer" className="btn-accent mt-2 w-full">
              Đăng ký học thử
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function DesktopNavLink({ item }: { item: NavItem }) {
  const location = useLocation();
  const [pathname] = item.to.split('#');
  const isActive =
    location.pathname === pathname &&
    (!item.to.includes('#') || !location.hash);

  const hasChildren = !!item.children?.length;

  if (!hasChildren) {
    return (
      <Link
        to={item.to}
        className={[
          'rounded-xl px-4 py-2 font-body text-sm font-semibold tracking-wide transition-colors duration-200',
          isActive ? 'text-ink-900' : 'text-ink-600 hover:text-ink-900',
        ].join(' ')}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      {item.disableParentLink ? (
        <span
          className={[
            'inline-flex cursor-default items-center gap-1 rounded-xl px-4 py-2 font-body text-sm font-semibold tracking-wide transition-colors duration-200',
            'text-ink-600 group-hover:text-ink-900',
          ].join(' ')}
        >
          {item.label}
          <ChevronDown
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
            strokeWidth={2.5}
          />
        </span>
      ) : (
        <Link
          to={item.to}
          className={[
            'inline-flex items-center gap-1 rounded-xl px-4 py-2 font-body text-sm font-semibold tracking-wide transition-colors duration-200',
            isActive ? 'text-ink-900' : 'text-ink-600 group-hover:text-ink-900',
          ].join(' ')}
        >
          {item.label}
          <ChevronDown
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
            strokeWidth={2.5}
          />
        </Link>
      )}

      <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all duration-200 ease-smooth group-hover:visible group-hover:opacity-100">
        <div className="min-w-[260px] overflow-hidden rounded-2xl bg-white p-2 shadow-card ring-1 ring-ink-900/5">
          {item.children!.map((child) => (
            <Link
              key={child.to}
              to={child.to}
              className="block rounded-xl px-4 py-2.5 font-body text-sm font-semibold text-ink-700 transition-colors duration-200 hover:bg-cream-100 hover:text-ink-900"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavItem({
  item,
  expandedKey,
  toggleExpand,
}: {
  item: NavItem;
  expandedKey: string | null;
  toggleExpand: (key: string | null) => void;
}) {
  const hasChildren = !!item.children?.length;
  const isExpanded = expandedKey === item.to;

  if (!hasChildren) {
    return (
      <Link
        to={item.to}
        className="rounded-xl px-4 py-3 font-body text-base font-semibold text-ink-800 transition-colors hover:bg-cream-200"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={() => toggleExpand(isExpanded ? null : item.to)}
        className="flex items-center justify-between rounded-xl px-4 py-3 font-body text-base font-semibold text-ink-800 transition-colors hover:bg-cream-200"
      >
        {item.label}
        <ChevronDown
          className={[
            'h-4 w-4 transition-transform duration-200',
            isExpanded ? 'rotate-180' : '',
          ].join(' ')}
          strokeWidth={2.5}
        />
      </button>
      {isExpanded && (
        <div className="flex flex-col gap-0.5 pl-6 pt-1">
          {!item.disableParentLink && (
            <Link
              to={item.to}
              className="rounded-lg px-4 py-2.5 font-body text-sm font-semibold text-ink-700 transition-colors hover:bg-cream-200"
            >
              Tất cả {item.label.toLowerCase()}
            </Link>
          )}
          {item.children!.map((child) => (
            <Link
              key={child.to}
              to={child.to}
              className="rounded-lg px-4 py-2.5 font-body text-sm font-semibold text-ink-700 transition-colors hover:bg-cream-200"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
