import { ArrowRight } from 'lucide-react';
import { trialLink } from '@/lib/navigation';
import { cloudinaryFit } from '@/lib/cloudinary';

const LEON =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788166533/yeya-leon.png';

export default function MidPageCTA() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-12 lg:py-16">
      {/* Animal sticker */}
      <img
        src={cloudinaryFit(LEON, 112)}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -top-4 right-12 hidden h-14 w-14 rotate-[8deg] opacity-90 drop-shadow-[0_6px_12px_rgba(31,42,55,0.25)] lg:block"
      />

      <div className="container-page relative">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          {/* Left: badge + heading */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream-100/10 px-4 py-1.5 font-body text-sm font-semibold text-cream-100">
              Học thử miễn phí
            </span>
            <h2 className="mt-4 font-heading text-xl font-extrabold leading-tight text-cream-100 sm:text-2xl">
              Cho con trải nghiệm 1 buổi học thử tiếng Anh Thiếu niên ngay hôm nay!
            </h2>
          </div>

          {/* Right: button */}
          <a href={trialLink} target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-[20px] bg-blush-300 px-6 py-3.5 font-body text-base font-bold text-ink-900 shadow-soft transition-all duration-300 ease-smooth hover:bg-blush-400 hover:shadow-card"
          >
            ĐĂNG KÝ HỌC THỬ
            <ArrowRight
              className="h-5 w-5 transition-transform duration-300 ease-smooth group-hover:translate-x-1"
              strokeWidth={2.25}
            />
          </a>
        </div>
      </div>

      {/* Wave divider into Phase 3 */}
      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 block h-12 w-full text-cream-100 sm:h-16"
      >
        <path
          d="M0 40 C 240 80, 480 0, 720 30 C 960 60, 1200 20, 1440 45 L 1440 80 L 0 80 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
