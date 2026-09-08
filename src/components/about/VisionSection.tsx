import { Sparkles } from 'lucide-react';
import { cloudinary } from '@/lib/cloudinary';

const PRIMARY_PHOTO =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788167404/kindy_nguyenquangkhai.webp';
const SECONDARY_PHOTO =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788167403/kindy_machtieubang.webp';

export default function VisionSection() {
  return (
    <section className="relative overflow-hidden bg-cream-100 py-20 lg:py-28">
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
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Photo side */}
          <div className="relative order-1 lg:order-1">
            <div id="tam-nhin" className="relative mx-auto w-full max-w-[440px] scroll-mt-24 lg:scroll-mt-0">
              <div
                className="relative aspect-[4/5] w-full overflow-hidden shadow-lift ring-1 ring-ink-900/10 rotate-[-2deg]"
                style={{
                  borderRadius: '52% 48% 56% 44% / 48% 54% 46% 52%',
                }}
              >
                <img
                  src={cloudinary(PRIMARY_PHOTO, 440, 550)}
                  alt="Học viên ILE đầy cảm hứng"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/15 via-transparent to-transparent" />
              </div>

              {/* Secondary overlapping photo */}
              <div className="absolute -bottom-6 -right-4 w-40 rotate-[3deg] lg:-right-8 lg:w-48">
                <div className="bg-cream-50 p-2 shadow-card ring-1 ring-ink-900/5">
                  <div
                    className="overflow-hidden"
                    style={{
                      borderRadius: '46% 54% 60% 40% / 54% 44% 56% 46%',
                    }}
                  >
                    <img
                      src={cloudinary(SECONDARY_PHOTO, 160, 160)}
                      alt="Các bé học tập tại ILE"
                      className="aspect-square w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-2 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-200/70 px-4 py-1.5 font-body text-sm font-semibold text-sky-700">
              <Sparkles className="h-4 w-4" strokeWidth={2.25} />
              TẦM NHÌN
            </span>

            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.5rem]">
              Mở rộng cơ hội học tiếng Anh chất lượng cho{' '}
              <span className="relative whitespace-nowrap text-sky-600">
                mọi người, mọi nơi
                <svg
                  aria-hidden
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-blush-400"
                >
                  <path
                    d="M2 8 C 56 2, 144 2, 198 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h2>

            <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-ink-600 lg:text-lg">
              Trở thành hệ thống giáo dục tiếng Anh truyền cảm hứng hàng đầu tại
              Việt Nam, nơi mọi người - bất kể xuất phát điểm - đều được tiếp cận
              giáo dục chất lượng, phát triển năng lực ngôn ngữ và kỹ năng sống
              để hội nhập, cống hiến và kiến tạo tương lai tích cực cho cộng đồng.
            </p>
          </div>
        </div>
      </div>

      {/* Wave divider into MissionSection */}
      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 block h-12 w-full text-blush-200 sm:h-16"
      >
        <path
          d="M0 40 C 240 80, 480 0, 720 30 C 960 60, 1200 20, 1440 45 L 1440 80 L 0 80 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
