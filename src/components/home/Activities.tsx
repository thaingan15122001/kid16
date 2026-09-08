import { type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { cloudinary } from '@/lib/cloudinary';

interface Activity {
  photo: string;
  caption: string;
  width: number;
  rotate: string;
  offset: string;
  captionTint: string;
}

const activities: Activity[] = [
  {
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788841058/hoat-dong_6.jpg',
    caption: 'Giờ kể chuyện',
    width: 380,
    rotate: 'rotate-[-4deg]',
    offset: 'lg:mt-0',
    captionTint: 'bg-sky-200/90 text-sky-700',
  },
  {
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788841058/hoat-dong.jpg',
    caption: 'Trò chơi vận động',
    width: 340,
    rotate: 'rotate-[3deg]',
    offset: 'lg:mt-16',
    captionTint: 'bg-blush-200/90 text-blush-600',
  },
  {
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788841058/hoat-dong_5.jpg',
    caption: 'Góc âm nhạc',
    width: 420,
    rotate: 'rotate-[-2deg]',
    offset: 'lg:mt-6',
    captionTint: 'bg-cream-200 text-ink-700',
  },
];

const STICKER =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788166532/stream-1.svg';

export default function Activities() {
  return (
    <section
      id="hoat-dong"
      className="relative scroll-mt-24 overflow-hidden bg-cream-100 py-20 lg:py-28"
    >
      {/* Soft decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-16 h-[300px] w-[300px] rounded-[54%_46%_37%_63%_/_48%_55%_45%_52%] bg-sky-200/25 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-20 h-[280px] w-[280px] rounded-[46%_54%_58%_42%_/_54%_46%_54%_46%] bg-blush-200/25 blur-2xl"
      />

      <div className="container-page relative">
        {/* Section header */}
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-200/70 px-4 py-1.5 font-body text-sm font-semibold text-sky-700">
              <Sparkles className="h-4 w-4" strokeWidth={2.25} />
              Hoạt động thường ngày
            </span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Mỗi ngày tại ILE là một{' '}
              <span className="relative whitespace-nowrap text-sky-600">
                ngày vui
                <svg
                  aria-hidden
                  viewBox="0 0 160 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-blush-400"
                >
                  <path
                    d="M2 8 C 44 2, 116 2, 158 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>
          <p className="max-w-sm font-body text-base leading-relaxed text-ink-600 lg:text-right">
            Không chỉ học tiếng Anh - con được trải nghiệm, vui chơi và thể hiện
            chính mình qua từng hoạt động mỗi ngày.
          </p>
        </div>

        {/* ── Desktop: scattered polaroid pinboard ── */}
        <div className="relative mt-24 hidden lg:block">
          {/* Loose sticker accent floating behind polaroids */}
          <img
            src={STICKER}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-[42%] top-[38%] h-16 w-16 rotate-[12deg] drop-shadow-[0_6px_12px_rgba(31,42,55,0.10)]"
          />

          <div className="relative mx-auto flex max-w-5xl flex-wrap items-start justify-center gap-12">
            {activities.map((a) => (
              <Polaroid key={a.caption} activity={a} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/hoat-dong"
              className="group inline-flex items-center gap-2 font-body text-base font-bold text-ink-800 underline decoration-blush-400 decoration-2 underline-offset-4 transition-colors duration-200 hover:text-sky-700"
            >
              Xem thêm
              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 ease-smooth group-hover:translate-x-1"
                strokeWidth={2.25}
              />
            </Link>
          </div>
        </div>

        {/* ── Mobile / tablet: stacked polaroids ── */}
        <div className="relative mt-16 flex flex-col items-center gap-12 lg:hidden">
          {/* Sticker accent between photos */}
          <img
            src={STICKER}
            alt=""
            aria-hidden
            className="pointer-events-none absolute right-6 top-[28%] h-12 w-12 rotate-[15deg] drop-shadow-[0_6px_12px_rgba(31,42,55,0.10)]"
          />

          {activities.map((a, i) => (
            <Polaroid
              key={a.caption}
              activity={a}
              mobile
              mobileRotate={
                i % 2 === 0 ? 'rotate-[-3deg]' : 'rotate-[2.5deg]'
              }
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center lg:hidden">
          <Link
            to="/hoat-dong"
            className="group inline-flex items-center gap-2 font-body text-base font-bold text-ink-800 underline decoration-blush-400 decoration-2 underline-offset-4 transition-colors duration-200 hover:text-sky-700"
          >
            Xem thêm
            <ArrowRight
              className="h-5 w-5 transition-transform duration-300 ease-smooth group-hover:translate-x-1"
              strokeWidth={2.25}
            />
          </Link>
        </div>
      </div>

      {/* Soft wave divider */}
      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="mt-20 block h-12 w-full text-cream-100 sm:h-16"
      >
        <path
          d="M0 40 C 240 80, 480 0, 720 30 C 960 60, 1200 20, 1440 45 L 1440 80 L 0 80 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}

function Polaroid({
  activity,
  mobile = false,
  mobileRotate,
}: {
  activity: Activity;
  mobile?: boolean;
  mobileRotate?: string;
}) {
  const rotate = mobile ? mobileRotate : activity.rotate;
  const widthStyle: CSSProperties = mobile
    ? { width: 300 }
    : { width: activity.width };

  return (
    <div
      className={[
        'group relative shrink-0 bg-white p-3 pb-12 shadow-card ring-1 ring-ink-900/5 transition-all duration-300 ease-smooth hover:rotate-0 hover:scale-105 hover:shadow-lift',
        rotate,
        mobile ? '' : activity.offset,
      ].join(' ')}
      style={{ ...widthStyle, borderRadius: '14px' }}
    >
      {/* Photo with soft rounded corners inside the polaroid frame */}
      <div
        className="relative overflow-hidden"
        style={{ borderRadius: '10px' }}
      >
        <img
          src={cloudinary(activity.photo, 420, 315)}
          alt={activity.caption}
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Handwritten-feel caption sticker */}
      <span
        className={[
          'absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 font-body text-xs font-bold shadow-soft',
          activity.captionTint,
        ].join(' ')}
        style={{ borderRadius: '44% 56% 48% 52% / 58% 42% 58% 42%' }}
      >
        {activity.caption}
      </span>
    </div>
  );
}
