import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { trialLink } from '@/lib/navigation';
import { cloudinary } from '@/lib/cloudinary';

const CHILD_MAIN =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788167436/kindy_slide3.webp';
const CHILD_SECONDARY =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788167404/kindy_nguyenquangkhai.webp';
const TIGER =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788166533/yeya-tiger.svg';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-100">
      {/* Decorative organic background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-[63%_37%_54%_46%_/_55%_48%_52%_45%] bg-sky-200/50 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/3 h-[360px] w-[360px] rounded-[54%_46%_37%_63%_/_48%_55%_45%_52%] bg-blush-200/40 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-8 right-1/4 h-[260px] w-[260px] rounded-[58%_42%_46%_54%_/_52%_55%_45%_48%] bg-cream-200/50 blur-2xl"
      />

      <div className="container-page relative">
        {/* ── Mobile composition ── */}
        <div className="flex flex-col py-10 lg:hidden">
          {/* Badge */}
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-sky-200/70 px-3.5 py-1 font-body text-xs font-semibold text-sky-700">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2.25} />
            Trung tâm Tiếng Anh cho trẻ 3-15 tuổi
          </span>

          {/* Headline */}
          <h1 className="mt-4 font-heading text-[2rem] font-extrabold leading-[1.1] tracking-tight text-ink-900">
            Tiếng Anh mở ra{' '}
            <span className="relative whitespace-nowrap text-sky-600">
              thế giới
              <svg
                aria-hidden
                viewBox="0 0 220 14"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-blush-400"
              >
                <path
                  d="M2 9 C 60 2, 160 2, 218 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            của con.
          </h1>

          {/* Concise supporting copy */}
          <p className="mt-3 max-w-md font-body text-base leading-relaxed text-ink-600">
            Mỗi buổi học là một hành trình khám phá - con học tiếng Anh qua trò
            chơi, câu chuyện và trải nghiệm thực.
          </p>

          {/* CTA */}
          <div className="mt-5 flex items-center gap-4">
            <a href={trialLink} target="_blank" rel="noopener noreferrer" className="btn-accent group">
              Đăng ký học thử
              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 ease-smooth group-hover:translate-x-1"
                strokeWidth={2.25}
              />
            </a>
            <a
              href="#ba-the-gioi-mot-hanh-trinh"
              className="font-body text-sm font-semibold text-ink-700 underline-offset-4 transition-colors hover:text-ink-900 hover:underline"
            >
              Chương trình học
            </a>
          </div>

          {/* Child visual - landscape organic, visible in first viewport */}
          <div className="relative mt-8 w-full">
            <div className="relative aspect-[4/3] w-full">
              <div
                className="absolute inset-0 overflow-hidden shadow-lift ring-1 ring-ink-900/5"
                style={{
                  borderRadius: '48% 52% 50% 50% / 52% 48% 52% 48%',
                }}
              >
                <img
                  src={cloudinary(CHILD_MAIN, 400, 300)}
                  alt="Đứa trẻ đang học tiếng Anh tại ILE"
                  className="h-full w-full object-cover object-top"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/15 via-transparent to-transparent" />
              </div>
            </div>

            {/* Tiger character - peeking from top-right */}
            <img
              src={TIGER}
              alt=""
              aria-hidden
              className="absolute -right-2 -top-6 h-20 w-20 drop-shadow-[0_8px_16px_rgba(31,42,55,0.12)]"
            />

            {/* Secondary photo - overlapping bottom-left */}
            <div className="absolute -bottom-4 -left-3 h-20 w-20">
              <div
                className="h-full w-full overflow-hidden shadow-card ring-4 ring-cream-100"
                style={{
                  borderRadius: '52% 48% 58% 42% / 46% 54% 46% 54%',
                }}
              >
                <img
                  src={cloudinary(CHILD_SECONDARY, 80, 80)}
                  alt="Các bé cùng nhau học tập"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-2 bottom-4 rounded-[20px] bg-cream-100/95 px-3 py-2 shadow-card backdrop-blur-sm">
              <p className="font-heading text-xl font-extrabold text-ink-900">
                10+
              </p>
              <p className="font-body text-[10px] font-semibold text-ink-600">
                năm kinh nghiệm
              </p>
            </div>
          </div>

          {/* Trust row */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  strokeWidth={0}
                />
              ))}
            </div>
            <p className="font-body text-sm text-ink-600">
              <span className="font-bold text-ink-900">2.000+</span> phụ huynh
              tin tưởng ILE
            </p>
          </div>
        </div>

        {/* ── Desktop / tablet composition ── */}
        <div className="hidden grid-cols-12 items-center gap-12 py-16 lg:grid lg:gap-10 lg:py-24">
          {/* Left: editorial copy */}
          <div className="lg:col-span-6 xl:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-200/70 px-4 py-1.5 font-body text-sm font-semibold text-sky-700">
              <Sparkles className="h-4 w-4" strokeWidth={2.25} />
              Trung tâm Tiếng Anh cho trẻ 3-15 tuổi
            </span>

            <h1 className="mt-6 font-heading text-[2.75rem] font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.5rem]">
              Tiếng Anh mở ra{' '}
              <span className="relative whitespace-nowrap text-sky-600">
                thế giới
                <svg
                  aria-hidden
                  viewBox="0 0 220 14"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1.5 left-0 h-3 w-full text-blush-400"
                >
                  <path
                    d="M2 9 C 60 2, 160 2, 218 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              của con.
            </h1>

            <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-ink-600">
              Tại ILE, mỗi buổi học là một hành trình khám phá. Con được học
              tiếng Anh qua trò chơi, câu chuyện và trải nghiệm thực - tự tin
              bước vào thế giới.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a href={trialLink} target="_blank" rel="noopener noreferrer" className="btn-accent group">
                Đăng ký học thử
                <ArrowRight
                  className="h-5 w-5 transition-transform duration-300 ease-smooth group-hover:translate-x-1"
                  strokeWidth={2.25}
                />
              </a>
              <a
                href="#ba-the-gioi-mot-hanh-trinh"
                className="font-body text-base font-semibold text-ink-700 underline-offset-4 transition-colors hover:text-ink-900 hover:underline"
              >
                Khám phá chương trình học
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-12 flex items-center gap-6">
              <div className="flex items-center gap-1.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <p className="font-body text-sm text-ink-600">
                <span className="font-bold text-ink-900">2.000+</span> phụ huynh
                tin tưởng ILE
              </p>
            </div>
          </div>

          {/* Right: visual world */}
          <div className="relative lg:col-span-6 xl:col-span-6">
            <div className="relative mx-auto max-w-[520px] lg:ml-auto lg:mr-0">
              {/* Main organic photo */}
              <div className="relative aspect-[4/5] w-full">
                <div
                  className="absolute inset-0 overflow-hidden shadow-lift ring-1 ring-ink-900/5"
                  style={{
                    borderRadius: '46% 54% 52% 48% / 54% 46% 54% 46%',
                  }}
                >
                  <img
                    src={cloudinary(CHILD_MAIN, 520, 650)}
                    alt="Đứa trẻ đang học tiếng Anh tại ILE"
                    className="h-full w-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/15 via-transparent to-transparent" />
                </div>
              </div>

              {/* Secondary photo - overlapping bottom-left */}
              <div className="absolute -bottom-6 -left-4 h-32 w-32 sm:h-40 sm:w-40 lg:-left-10">
                <div
                  className="h-full w-full overflow-hidden shadow-card ring-4 ring-cream-100"
                  style={{
                    borderRadius: '52% 48% 58% 42% / 46% 54% 46% 54%',
                  }}
                >
                  <img
                    src={cloudinary(CHILD_SECONDARY, 160, 160)}
                    alt="Các bé cùng nhau học tập"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Tiger character - peeking from top-right */}
              <img
                src={TIGER}
                alt=""
                aria-hidden
                className="absolute -right-4 -top-10 h-28 w-28 drop-shadow-[0_8px_16px_rgba(31,42,55,0.12)] sm:-right-8 sm:h-32 sm:w-32 lg:-right-10 lg:h-36 lg:w-36"
              />

              {/* Floating badge */}
              <div className="absolute -right-3 bottom-10 rounded-[20px] bg-cream-100/95 px-4 py-3 shadow-card backdrop-blur-sm sm:right-2">
                <p className="font-heading text-2xl font-extrabold text-ink-900">
                  10+
                </p>
                <p className="font-body text-xs font-semibold text-ink-600">
                  năm kinh nghiệm
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Soft wave divider into WhyILE */}
      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 block h-12 w-full text-sky-300 sm:h-16"
      >
        <path
          d="M0 40 C 240 80, 480 0, 720 30 C 960 60, 1200 20, 1440 45 L 1440 80 L 0 80 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
