import { type CSSProperties } from 'react';
import { Compass, Users, ChartLine as LineChart, Heart, Milestone } from 'lucide-react';
import { cloudinary } from '@/lib/cloudinary';

interface Strength {
  icon: typeof Compass;
  title: string;
  body: string;
  accent: 'sky' | 'blush' | 'ink' | 'cream';
}

const strengths: Strength[] = [
  {
    icon: Compass,
    title: 'Kinh nghiệm thực tiễn',
    body: 'Tiếng Anh được đưa vào tình huống thực - con không chỉ học ngữ pháp mà biết dùng ngôn ngữ để giao tiếp, kể chuyện và giải quyết vấn đề.',
    accent: 'sky',
  },
  {
    icon: Users,
    title: 'Đội ngũ giáo viên chất lượng',
    body: 'Giáo viên bản ngữ và Việt Nam giàu kinh nghiệm, yêu trẻ và được đào tạo liên tục để đồng hành cùng từng giai đoạn phát triển của con.',
    accent: 'ink',
  },
  {
    icon: LineChart,
    title: 'Theo dõi tiến bộ rõ ràng',
    body: 'Bố mẹ được cập nhật định kỳ về sự tiến bộ của con - từng kỹ năng, từng cột mốc - qua báo cáo chi tiết và phiên đánh giá riêng.',
    accent: 'blush',
  },
  {
    icon: Heart,
    title: 'Môi trường học tập truyền cảm hứng',
    body: 'Không gian học được thiết kế an toàn, ấm áp và khơi gợi sự tò mò - nơi con muốn đến mỗi ngày và tự tin thể hiện bản thân.',
    accent: 'cream',
  },
  {
    icon: Milestone,
    title: 'Lộ trình phù hợp từng độ tuổi',
    body: 'Từ 3 đến 15 tuổi, mỗi bé theo một lộ trình được cá nhân hoá theo năng lực và sở thích - không học theo khuôn mẫu chung.',
    accent: 'ink',
  },
];

const accentMap: Record<Strength['accent'], string> = {
  sky: 'bg-sky-200/70 text-sky-700',
  blush: 'bg-blush-200/70 text-blush-600',
  ink: 'bg-ink-900 text-cream-100',
  cream: 'bg-cream-200 text-ink-700',
};

const cardBgMap: Record<Strength['accent'], string> = {
  sky: 'bg-sky-100/60',
  blush: 'bg-blush-100/50',
  ink: 'bg-white/80',
  cream: 'bg-white/80',
};

// A distinct organic corner-radius "recipe" for each card so no two shapes repeat.
const blobShapes: CSSProperties[] = [
  { borderRadius: '62% 38% 41% 59% / 46% 44% 56% 54%' },
  { borderRadius: '38% 62% 55% 45% / 58% 40% 60% 42%' },
  { borderRadius: '48% 52% 63% 37% / 42% 58% 42% 58%' },
  { borderRadius: '55% 45% 40% 60% / 60% 48% 52% 40%' },
  { borderRadius: '44% 56% 52% 48% / 56% 42% 58% 44%' },
];

const HERO_IMAGE =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788167437/kindy_teacher_kids.webp';
const SECONDARY_IMAGE =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788167436/kindy_slide2.webp';
const LEON =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788166533/yeya-leon.png';
const CROW =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788166534/yeya-cuervo-01.svg';

export default function WhyILE() {
  return (
    <section className="relative overflow-hidden bg-sky-300 py-20 lg:py-28">
      {/* Soft decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-[320px] w-[320px] rounded-[54%_46%_37%_63%_/_48%_55%_45%_52%] bg-sky-200/30 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-16 h-[280px] w-[280px] rounded-[46%_54%_58%_42%_/_54%_46%_54%_46%] bg-blush-200/20 blur-2xl"
      />

      <div className="container-page relative">
        {/* Section header */}
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-ink-900/10 px-4 py-1.5 font-body text-sm font-semibold text-ink-900">
              Vì sao bố mẹ chọn ILE?
            </span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Năm điều làm nên{' '}
              <span className="relative whitespace-nowrap text-sky-600">
                khác biệt
                <svg
                  aria-hidden
                  viewBox="0 0 180 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-blush-400"
                >
                  <path
                    d="M2 8 C 50 2, 130 2, 178 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              của ILE
            </h2>
          </div>
          <p className="max-w-sm font-body text-base leading-relaxed text-ink-600 lg:text-right">
            Chúng tôi tin rằng một môi trường tốt sẽ giúp con tự tin bước ra
            thế giới, bằng tiếng Anh và bằng chính mình.
          </p>
        </div>

        {/* ── Desktop: image cluster + floating irregular cards ── */}
        <div className="mt-16 hidden lg:grid lg:grid-cols-12 lg:items-start lg:gap-8">
          {/* Left: photo cluster */}
          <div className="relative lg:col-span-5">
            <div className="sticky top-28">
              <div className="relative mx-auto max-w-[420px]">
                {/* Main organic photo */}
                <div
                  className="relative aspect-[3/4] w-full overflow-hidden shadow-lift ring-1 ring-ink-900/5"
                  style={{ borderRadius: '58% 42% 45% 55% / 48% 55% 45% 52%' }}
                >
                  <img
                    src={cloudinary(HERO_IMAGE, 420, 560)}
                    alt="Giáo viên và các bé cùng học tập tại ILE"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/15 via-transparent to-transparent" />
                </div>

                {/* Secondary photo, overlapping bottom-right */}
                <div className="absolute -bottom-8 -right-10 h-36 w-36 rotate-6">
                  <div
                    className="h-full w-full overflow-hidden shadow-card ring-4 ring-cream-100"
                    style={{ borderRadius: '46% 54% 60% 40% / 54% 44% 56% 46%' }}
                  >
                    <img
                      src={cloudinary(SECONDARY_IMAGE, 144, 144)}
                      alt="Các bé tham gia hoạt động cùng nhau"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Leon character peeking top-left */}
                <img
                  src={cloudinary(LEON, 96, 96)}
                  alt=""
                  aria-hidden
                  className="absolute -left-10 -top-8 h-24 w-24 -rotate-6 drop-shadow-[0_8px_16px_rgba(31,42,55,0.14)]"
                />

                {/* Crow perched on the corner */}
                <img
                  src={CROW}
                  alt=""
                  aria-hidden
                  className="absolute -right-4 top-8 h-12 w-12 drop-shadow-[0_6px_12px_rgba(31,42,55,0.12)]"
                />
              </div>
            </div>
          </div>

          {/* Right: floating irregular cards */}
          <div className="lg:col-span-7 lg:w-[120%]">
            <div className="grid grid-cols-2 gap-6">
              <FeatureBlob strength={strengths[0]} shape={0} className="rotate-[-2deg]" />
              <FeatureBlob strength={strengths[1]} shape={1} className="mt-10 rotate-[1.5deg]" />
              <FeatureBlob strength={strengths[2]} shape={2} className="rotate-[1deg]" />
              <FeatureBlob strength={strengths[3]} shape={3} className="mt-6 rotate-[-1.5deg]" />
            </div>

            {/* Wide fifth card */}
            <div
              className={[
                'group relative mt-8 flex items-center gap-6 overflow-hidden p-8 shadow-soft ring-1 ring-ink-300/20 transition-all duration-300 ease-smooth hover:shadow-card',
                cardBgMap[strengths[4].accent],
              ].join(' ')}
              style={blobShapes[4]}
            >
              <span
                className={[
                  'inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-[16px]',
                  accentMap[strengths[4].accent],
                ].join(' ')}
              >
                <Milestone className="h-7 w-7" strokeWidth={2.25} />
              </span>
              <div className="flex-1">
                <h3 className="font-heading text-2xl font-bold text-ink-900">
                  {strengths[4].title}
                </h3>
                <p className="mt-2 max-w-2xl font-body text-lg leading-relaxed text-ink-600">
                  {strengths[4].body}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile / tablet: stacked photo + alternating irregular cards ── */}
        <div className="mt-12 flex flex-col gap-8 lg:hidden">
          {/* Photo cluster, smaller */}
          <div className="relative mx-auto w-full max-w-sm">
            <div
              className="relative aspect-[4/3] w-full overflow-hidden shadow-lift ring-1 ring-ink-900/5"
              style={{ borderRadius: '52% 48% 46% 54% / 50% 54% 46% 50%' }}
            >
              <img
                src={cloudinary(HERO_IMAGE, 420, 560)}
                alt="Giáo viên và các bé cùng học tập tại ILE"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/15 via-transparent to-transparent" />
            </div>
            <img
              src={cloudinary(LEON, 96, 96)}
              alt=""
              aria-hidden
              className="absolute -left-4 -top-6 h-16 w-16 -rotate-6 drop-shadow-[0_6px_12px_rgba(31,42,55,0.14)]"
            />
            <div className="absolute -bottom-6 -right-4 h-20 w-20 rotate-6">
              <div
                className="h-full w-full overflow-hidden shadow-card ring-4 ring-cream-100"
                style={{ borderRadius: '46% 54% 60% 40% / 54% 44% 56% 46%' }}
              >
                <img
                  src={cloudinary(SECONDARY_IMAGE, 144, 144)}
                  alt="Các bé tham gia hoạt động cùng nhau"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Cards, alternating offset + gentle tilt */}
          <div className="mt-4 flex flex-col gap-6">
            {strengths.slice(0, 4).map((s, i) => (
              <FeatureBlob
                key={s.title}
                strength={s}
                shape={i}
                className={[
                  i % 2 === 1 ? 'ml-6 rotate-[1.5deg]' : 'mr-6 rotate-[-1.5deg]',
                ].join(' ')}
              />
            ))}

            {/* Fifth card */}
            <div
              className={[
                'relative flex items-center gap-5 overflow-hidden p-6 shadow-soft ring-1 ring-ink-300/20',
                cardBgMap[strengths[4].accent],
              ].join(' ')}
              style={blobShapes[4]}
            >
              <span
                className={[
                  'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px]',
                  accentMap[strengths[4].accent],
                ].join(' ')}
              >
                <Milestone className="h-5 w-5" strokeWidth={2.25} />
              </span>
              <div className="flex-1">
                <h3 className="font-heading text-lg font-bold text-ink-900">
                  {strengths[4].title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink-600">
                  {strengths[4].body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Soft wave divider into Programs */}
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

function FeatureBlob({
  strength,
  shape,
  className = '',
}: {
  strength: Strength;
  shape: number;
  className?: string;
}) {
  const Icon = strength.icon;
  return (
    <div
      className={[
        'group relative flex flex-col p-7 shadow-soft ring-1 ring-ink-300/20 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:rotate-0 hover:shadow-card',
        cardBgMap[strength.accent],
        className,
      ].join(' ')}
      style={blobShapes[shape % blobShapes.length]}
    >
      <span
        className={[
          'inline-flex h-12 w-12 items-center justify-center rounded-[16px] transition-transform duration-300 ease-smooth group-hover:scale-105',
          accentMap[strength.accent],
        ].join(' ')}
      >
        <Icon className="h-6 w-6" strokeWidth={2.25} />
      </span>
      <h3 className="mt-4 font-heading text-xl font-bold leading-snug text-ink-900">
        {strength.title}
      </h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-ink-600">
        {strength.body}
      </p>
    </div>
  );
}
