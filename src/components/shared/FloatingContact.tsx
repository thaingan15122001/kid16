import { MessageCircle, Phone, Send } from 'lucide-react';
import zaloLogo from '@/assets/images/zalo-logo.webp';

const ZALO_URL = 'https://zalo.me/0398519485';

interface ContactAction {
  label: string;
  href: string;
  external?: boolean;
  icon: 'phone' | 'zalo' | 'facebook' | 'messenger';
  className: string;
}

const actions: ContactAction[] = [
  {
    label: 'Gọi điện cho ILE',
    href: 'tel:0398519485',
    icon: 'phone',
    className: 'bg-ink-900 text-cream-100 hover:bg-ink-800',
  },
  {
    label: 'Nhắn tin qua Zalo',
    href: ZALO_URL,
    external: true,
    icon: 'zalo',
    className: 'bg-sky-200 text-sky-700 hover:bg-sky-300',
  },
  {
    label: 'Theo dõi ILE trên Facebook',
    href: ZALO_URL,
    external: true,
    icon: 'facebook',
    className: 'bg-cream-200 text-ink-900 hover:bg-cream-300',
  },
  {
    label: 'Nhắn tin qua Messenger',
    href: ZALO_URL,
    external: true,
    icon: 'messenger',
    className: 'bg-blush-300 text-ink-900 hover:bg-blush-400',
  },
];

export default function FloatingContact() {
  return (
    <div
      className="fixed bottom-5 right-4 z-40 flex flex-col items-center gap-3 sm:bottom-6 sm:right-6"
      aria-label="Liên hệ nhanh"
    >
      {actions.map((action) => (
        <a
          key={action.label}
          href={action.href}
          target={action.external ? '_blank' : undefined}
          rel={action.external ? 'noopener noreferrer' : undefined}
          aria-label={action.label}
          className={`flex h-12 w-12 items-center justify-center rounded-full shadow-soft ring-1 ring-ink-900/10 transition-all duration-300 ease-smooth hover:scale-110 hover:shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-900 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 sm:h-14 sm:w-14 ${action.className}`}
        >
          <ContactIcon icon={action.icon} />
        </a>
      ))}
    </div>
  );
}

function ContactIcon({ icon }: { icon: ContactAction['icon'] }) {
  if (icon === 'zalo') {
    return <img src={zaloLogo} alt="" className="h-7 w-7 rounded-full object-cover sm:h-8 sm:w-8" />;
  }

  if (icon === 'phone') {
    return <Phone className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.25} />;
  }

  if (icon === 'facebook') {
    return <span className="font-heading text-2xl font-extrabold leading-none">f</span>;
  }

  return <Send className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.25} />;
}
