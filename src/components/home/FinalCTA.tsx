import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { trialLink } from '@/lib/navigation';
import { cloudinary } from '@/lib/cloudinary';

const HERO_PHOTO =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788166775/HeroBanner-1.jpg';
const TIGER =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788166533/yeya-tiger.svg';

interface FinalCTAProps {
  ctaText?: string;
  ctaHref?: string;
}

export default function FinalCTA({
  ctaText = 'ĐĂNG KÝ HỌC THỬ MIỄN PHÍ NGAY',
  ctaHref = trialLink,
}: FinalCTAProps = {}) {
  const isExternal = ctaHref.startsWith('tel:') || ctaHref.startsWith('http');
  return (
    <section className="relative overflow-hidden bg-cream-200 py-20 lg:py-28">
      {/* Soft decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-[320px] w-[320px] rounded-[54%_46%_37%_63%_/_48%_55%_45%_52%] bg-blush-300/30 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-[300px] w-[300px] rounded-[46%_54%_58%_42%_/_54%_46%_54%_46%] bg-sky-200/30 blur-2xl"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Left: photo centerpiece ── */}
          <div className="relative order-1 lg:order-1">
            <div className="relative mx-auto max-w-[480px] lg:max-w-none">
              <div
                className="relative aspect-[4/5] w-full overflow-hidden shadow-lift ring-1 ring-ink-900/10"
                style={{
                  borderRadius: '46% 54% 52% 48% / 54% 46% 54% 46%',
                }}
              >
                <img
                  src={cloudinary(HERO_PHOTO, 480, 600)}
                  alt="Đứa trẻ vui vẻ học tiếng Anh tại ILE"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/15 via-transparent to-transparent" />
              </div>

              {/* Tiger character — peeking top-right, small celebratory accent */}
              <img
                src={TIGER}
                alt=""
                aria-hidden
                className="absolute -right-4 -top-8 h-20 w-20 drop-shadow-[0_8px_16px_rgba(31,42,55,0.14)] sm:h-24 sm:w-24 lg:-right-8 lg:h-28 lg:w-28"
              />
            </div>
          </div>

          {/* ── Right: CTA content ── */}
          <div className="order-2 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-ink-900/10 px-4 py-1.5 font-body text-sm font-semibold text-ink-900">
              <Sparkles className="h-4 w-4" strokeWidth={2.25} />
              Bắt đầu hành trình cùng con
            </span>

            <h2 className="mt-6 font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.5rem]">
              Cho con một khởi đầu{' '}
              <span className="relative whitespace-nowrap text-ink-900">
                thật vui
                <svg
                  aria-hidden
                  viewBox="0 0 160 14"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1.5 left-0 h-3 w-full text-blush-400"
                >
                  <path
                    d="M2 9 C 50 2, 110 2, 158 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              với tiếng Anh
            </h2>

            <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-ink-700">
              Đăng ký học thử miễn phí ngay hôm nay để con trải nghiệm một buổi
              học thực tế tại ILE - không cần chuẩn bị gì trước.
            </p>

            {/* Primary CTA - scaled up */}
            <div className="mt-8">
              {isExternal ? (
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 rounded-[24px] bg-ink-900 px-8 py-5 font-body text-base font-extrabold tracking-wide text-cream-100 shadow-lift transition-all duration-300 ease-smooth hover:bg-ink-800 hover:shadow-card sm:text-lg lg:px-10 lg:py-6 lg:text-xl"
                >
                  <Star
                    className="absolute -left-2 -top-2 h-5 w-5 fill-yellow-300 text-yellow-300 transition-transform duration-300 ease-smooth group-hover:scale-110 group-hover:rotate-12"
                    strokeWidth={1}
                  />
                  {ctaText}
                  <ArrowRight
                    className="h-6 w-6 transition-transform duration-300 ease-smooth group-hover:translate-x-1"
                    strokeWidth={2.25}
                  />
                </a>
              ) : (
                <Link
                  to={ctaHref}
                  className="group relative inline-flex items-center justify-center gap-3 rounded-[24px] bg-ink-900 px-8 py-5 font-body text-base font-extrabold tracking-wide text-cream-100 shadow-lift transition-all duration-300 ease-smooth hover:bg-ink-800 hover:shadow-card sm:text-lg lg:px-10 lg:py-6 lg:text-xl"
                >
                  <Star
                    className="absolute -left-2 -top-2 h-5 w-5 fill-yellow-300 text-yellow-300 transition-transform duration-300 ease-smooth group-hover:scale-110 group-hover:rotate-12"
                    strokeWidth={1}
                  />
                  {ctaText}
                  <ArrowRight
                    className="h-6 w-6 transition-transform duration-300 ease-smooth group-hover:translate-x-1"
                    strokeWidth={2.25}
                  />
                </Link>
              )}
            </div>

            {/* Microcopy */}
            <p className="mt-5 font-body text-sm font-semibold text-ink-700/80">
              Hoàn toàn miễn phí · Không ràng buộc · Phản hồi trong 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
