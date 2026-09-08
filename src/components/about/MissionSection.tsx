import { Sparkles, BookOpen, Heart, Users } from 'lucide-react';
import { cloudinary } from '@/lib/cloudinary';

const MISSION_PHOTO =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788167396/kindy_tranbaokhang.webp';

interface MissionCard {
  icon: typeof BookOpen;
  text: string;
  badgeClass: string;
  shape: string;
  tilt: string;
}

const missionCards: MissionCard[] = [
  {
    icon: BookOpen,
    text: 'Cung cấp chương trình học tiếng Anh bài bản, khoa học, và dễ tiếp cận cho mọi gia đình.',
    badgeClass: 'bg-sky-200/70 text-sky-700',
    shape: '20px 20px 20px 44px',
    tilt: 'rotate-[-1deg]',
  },
  {
    icon: Heart,
    text: 'Khơi dậy tình yêu học tập, phát triển tư duy và khả năng sử dụng tiếng Anh tự nhiên ở người học.',
    badgeClass: 'bg-blush-300/70 text-blush-600',
    shape: '20px 44px 20px 20px',
    tilt: 'rotate-[1deg]',
  },
  {
    icon: Users,
    text: 'Đồng hành cùng các trường học và đối tác nhượng quyền để lan tỏa giá trị giáo dục bền vững, nhân văn.',
    badgeClass: 'bg-ink-900/10 text-ink-900',
    shape: '20px 20px 44px 20px',
    tilt: 'rotate-[-0.5deg]',
  },
];

export default function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-blush-200 py-20 lg:py-28">
      {/* Soft decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-16 h-[300px] w-[300px] rounded-[54%_46%_37%_63%_/_48%_55%_45%_52%] bg-cream-100/30 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-20 h-[280px] w-[280px] rounded-[46%_54%_58%_42%_/_54%_46%_54%_46%] bg-sky-200/25 blur-2xl"
      />

      <div className="container-page relative">
        {/* Section header */}
        <div id="su-menh" className="mx-auto max-w-2xl scroll-mt-24 text-center lg:scroll-mt-0">
          <span className="inline-flex items-center gap-2 rounded-full bg-ink-900/10 px-4 py-1.5 font-body text-sm font-semibold text-ink-900">
            <Sparkles className="h-4 w-4" strokeWidth={2.25} />
            SỨ MỆNH
          </span>
          <h2 className="mt-5 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.5rem]">
            Giảng dạy bằng trái tim; Phát triển bằng công nghệ; Lan tỏa bằng giá
            trị thật.
          </h2>
        </div>

        {/* Tagline pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <span className="rotate-[-2deg] rounded-full bg-cream-50 px-5 py-2.5 font-body text-sm font-bold text-ink-900 shadow-soft">
            Giảng dạy bằng trái tim
          </span>
          <span className="rotate-[1.5deg] rounded-full bg-sky-200 px-5 py-2.5 font-body text-sm font-bold text-sky-800 shadow-soft">
            Phát triển bằng công nghệ
          </span>
          <span className="rotate-[-1deg] rounded-full bg-ink-900 px-5 py-2.5 font-body text-sm font-bold text-cream-100 shadow-soft">
            Lan tỏa bằng giá trị thật
          </span>
        </div>

        {/* Zigzag row: text left, photo right */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text side - mission cards */}
          <div className="order-1 lg:order-1">
            <div className="flex flex-col gap-5">
              {missionCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className={[
                      'flex items-start gap-4 bg-cream-50/80 p-5 shadow-soft ring-1 ring-ink-300/20 transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:shadow-card',
                      card.tilt,
                    ].join(' ')}
                    style={{ borderRadius: card.shape }}
                  >
                    <span
                      className={[
                        'flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px]',
                        card.badgeClass,
                      ].join(' ')}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2.25} />
                    </span>
                    <p className="font-body text-base leading-relaxed text-ink-700">
                      {card.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Photo side */}
          <div className="order-2 lg:order-2">
            <div className="relative mx-auto w-full max-w-[440px]">
              <div
                className="relative aspect-[4/5] w-full overflow-hidden shadow-lift ring-1 ring-ink-900/10 rotate-[2deg]"
                style={{
                  borderRadius: '46% 54% 52% 48% / 54% 46% 54% 46%',
                }}
              >
                <img
                  src={cloudinary(MISSION_PHOTO, 440, 550)}
                  alt="Học viên ILE phát triển tự tin"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/15 via-transparent to-transparent" />
              </div>
            </div>
          </div>
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
