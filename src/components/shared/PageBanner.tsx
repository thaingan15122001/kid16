import { type ReactNode } from 'react';
import { Sparkles } from 'lucide-react';
import { cloudinary } from '@/lib/cloudinary';

interface PageBannerProps {
  title: ReactNode;
  badge?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  fullBleed?: boolean;
}

const TIGER =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788166533/yeya-tiger.svg';

export default function PageBanner({
  title,
  badge,
  subtitle,
  image,
  imageAlt = '',
  fullBleed = false,
}: PageBannerProps) {
  if (fullBleed && image) {
    return (
      <section className="relative overflow-hidden">
        <div className="relative min-h-[420px] lg:min-h-[520px]">
          <img
            src={cloudinary(image, 1280, 520)}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/30 to-ink-900/10" />

          <img
            src={TIGER}
            alt=""
            aria-hidden
            className="absolute right-6 top-6 hidden h-16 w-16 drop-shadow-[0_8px_16px_rgba(31,42,55,0.25)] sm:block lg:right-10 lg:top-8 lg:h-24 lg:w-24"
          />

          <div className="container-page relative flex min-h-[420px] flex-col justify-end pb-16 lg:min-h-[520px] lg:pb-20">
            {badge && (
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-blush-300/90 px-4 py-1.5 font-body text-sm font-semibold text-ink-900 shadow-soft backdrop-blur-sm">
                <Sparkles className="h-4 w-4" strokeWidth={2.25} />
                {badge}
              </span>
            )}

            <h1 className="mt-5 max-w-3xl font-heading text-3xl font-extrabold leading-[1.12] tracking-tight text-cream-100 sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-cream-100/90 lg:text-lg">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <svg
          aria-hidden
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block h-10 w-full text-cream-100 sm:h-14"
        >
          <path
            d="M0 40 C 240 80, 480 0, 720 30 C 960 60, 1200 20, 1440 45 L 1440 80 L 0 80 Z"
            fill="currentColor"
          />
        </svg>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-sky-100">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-16 h-[280px] w-[280px] rounded-[63%_37%_54%_46%_/_55%_48%_52%_45%] bg-sky-200/50 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/3 h-[240px] w-[240px] rounded-[54%_46%_37%_63%_/_48%_55%_45%_52%] bg-blush-200/30 blur-2xl"
      />

      {image ? (
        <div className="container-page relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            {badge && (
              <span className="inline-flex items-center gap-2 rounded-full bg-blush-200/70 px-4 py-1.5 font-body text-sm font-semibold text-blush-600">
                <Sparkles className="h-4 w-4" strokeWidth={2.25} />
                {badge}
              </span>
            )}

            <h1 className="mt-5 font-heading text-3xl font-extrabold leading-[1.12] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-ink-600 lg:text-lg">
                {subtitle}
              </p>
            )}
          </div>

          <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
            <div
              className="relative aspect-[4/3] overflow-hidden shadow-lift ring-1 ring-ink-900/10"
              style={{ borderRadius: '46% 54% 52% 48% / 54% 46% 54% 46%' }}
            >
              <img
                src={cloudinary(image, 520, 390)}
                alt={imageAlt}
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/15 via-transparent to-transparent" />
            </div>
            <span
              aria-hidden
              className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-cream-100 shadow-card ring-4 ring-sky-100 sm:h-24 sm:w-24"
            />
          </div>
        </div>
      ) : (
        <div className="container-page relative py-16 lg:py-20">
          {badge && (
            <span className="inline-flex items-center gap-2 rounded-full bg-blush-200/70 px-4 py-1.5 font-body text-sm font-semibold text-blush-600">
              <Sparkles className="h-4 w-4" strokeWidth={2.25} />
              {badge}
            </span>
          )}

          <h1 className="mt-5 font-heading text-3xl font-extrabold leading-[1.12] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-ink-600 lg:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-10 w-full text-cream-100 sm:h-14"
      >
        <path
          d="M0 40 C 240 80, 480 0, 720 30 C 960 60, 1200 20, 1440 45 L 1440 80 L 0 80 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
