import { Sparkles } from 'lucide-react';
import { cloudinary } from '@/lib/cloudinary';

const photos: string[] = [
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788167398/kindy_carousel-1.webp',
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788167399/kindy_carousel-2.webp',
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788167399/kindy_carousel-3.webp',
];

const photoShapes: string[] = [
  '52% 48% 56% 44% / 48% 54% 46% 52%',
  '46% 54% 44% 56% / 54% 46% 54% 46%',
  '58% 42% 45% 55% / 48% 55% 45% 52%',
];

const tilts: string[] = [
  'rotate-[-2deg]',
  'rotate-[1.5deg]',
  'rotate-[-1deg]',
];

const CROW =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788166534/yeya-cuervo-01.svg';

export default function LearningSpace() {
  return (
    <section className="relative overflow-hidden bg-blush-100 py-20 lg:py-28">
      {/* Soft decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-16 h-[320px] w-[320px] rounded-[54%_46%_37%_63%_/_48%_55%_45%_52%] bg-sky-200/25 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-24 h-[300px] w-[300px] rounded-[46%_54%_58%_42%_/_54%_46%_54%_46%] bg-cream-100/30 blur-2xl"
      />

      {/* Animal accent — top-right, desktop only */}
      <img
        src={CROW}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-6 top-10 hidden h-16 w-16 rotate-[12deg] drop-shadow-[0_6px_12px_rgba(31,42,55,0.12)] lg:block"
      />

      <div className="container-page relative">
        {/* Section header */}
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-200/70 px-4 py-1.5 font-body text-sm font-semibold text-sky-700">
              <Sparkles className="h-4 w-4" strokeWidth={2.25} />
              KHÔNG GIAN HỌC TẬP
            </span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Nơi con đến mỗi ngày{' '}
              <span className="relative whitespace-nowrap text-sky-600">
                thật vui
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
            Môi trường học tập gần gũi, an toàn - nơi con tự tin thể hiện bản
            thân và tập trung phát triển.
          </p>
        </div>

        {/* Photo grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={[
                'group relative aspect-[4/3] w-full overflow-hidden shadow-lift ring-1 ring-ink-900/10 transition-all duration-300 ease-smooth hover:rotate-0 hover:scale-[1.02]',
                tilts[i],
              ].join(' ')}
              style={{ borderRadius: photoShapes[i] }}
            >
              <img
                src={cloudinary(photo, 420, 315)}
                alt={`Không gian học tập tại ILE ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/15 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider into FinalCTA */}
      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 block h-12 w-full text-cream-200 sm:h-16"
      >
        <path
          d="M0 40 C 240 80, 480 0, 720 30 C 960 60, 1200 20, 1440 45 L 1440 80 L 0 80 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
