import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { trialLink } from '@/lib/navigation';
import { cloudinaryFit } from '@/lib/cloudinary';

interface Milestone {
  num: string;
  title: string;
  body: string;
  badgeClass: string;
  cardClass: string;
  shape: string;
  tilt: string;
  isFinal?: boolean;
}

const milestones: Milestone[] = [
  {
    num: '6-7 tuổi',
    title: 'Nền tảng',
    body: 'Con làm quen với phản xạ nghe - nói, mở rộng vốn từ vựng và bắt đầu ghép câu đơn giản bằng tiếng Anh.',
    badgeClass: 'bg-sky-300 text-ink-900',
    cardClass: 'bg-cream-50',
    shape: '58% 42% 48% 52% / 52% 58% 42% 48%',
    tilt: 'rotate-[-2deg]',
  },
  {
    num: '8-9 tuổi',
    title: 'Phát triển',
    body: 'Con đọc hiểu đoạn văn ngắn, viết câu hoàn chỉnh và tự tin hội thoại trong các tình huống quen thuộc.',
    badgeClass: 'bg-cream-300 text-ink-900',
    cardClass: 'bg-cream-50',
    shape: '42% 58% 52% 48% / 48% 42% 58% 52%',
    tilt: 'rotate-[1.5deg]',
  },
  {
    num: '10 tuổi',
    title: 'Sẵn sàng',
    body: 'Con có phản xạ vững chắc cả bốn kỹ năng, tự tin giao tiếp và sẵn sàng cho các bước học nâng cao tiếp theo.',
    badgeClass: 'bg-blush-300 text-ink-900',
    cardClass: 'bg-cream-50',
    shape: '48% 52% 44% 56% / 56% 44% 56% 44%',
    tilt: 'rotate-[-1deg]',
    isFinal: true,
  },
];

// TODO: replace with real superkids character asset
const CHARACTER =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788166534/kindy_apo_2.webp';

export default function LearningRoadmap() {
  return (
    <section className="relative overflow-hidden bg-blush-100 py-20 lg:py-28">
      {/* Soft decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-16 h-[320px] w-[320px] rounded-[54%_46%_37%_63%_/_48%_55%_45%_52%] bg-sky-200/25 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-24 h-[300px] w-[300px] rounded-[46%_54%_58%_42%_/_54%_46%_54%_46%] bg-blush-200/30 blur-2xl"
      />

      <div className="container-page relative">
        {/* Section header */}
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-200/70 px-4 py-1.5 font-body text-sm font-semibold text-sky-700">
              <Sparkles className="h-4 w-4" strokeWidth={2.25} />
              LỘ TRÌNH HỌC
            </span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Từng bước vững chắc,{' '}
              <span className="relative whitespace-nowrap text-sky-600">
                từng năm một
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
              </span>
            </h2>
          </div>
          <p className="max-w-sm font-body text-base leading-relaxed text-ink-600 lg:text-right">
            Mỗi giai đoạn là một cột mốc phát triển - con tiến bộ vững chắc, học
            đúng tốc độ của mình.
          </p>
        </div>

        {/* ── Desktop: horizontal winding path ── */}
        <div className="relative mt-20 hidden lg:block">
          {/* Winding path line */}
          <svg
            aria-hidden
            viewBox="0 0 1200 320"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <path
              d="M80 260 C 260 120, 420 120, 580 200 C 720 280, 840 280, 1120 80"
              fill="none"
              stroke="#8FCBDD"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="2 14"
            />
          </svg>

          <div className="relative grid grid-cols-3 gap-6">
            {milestones.map((m, i) => (
              <MilestoneStop
                key={m.title}
                milestone={m}
                index={i}
                above={i % 2 === 0}
              />
            ))}
          </div>

          {/* Small character walking along the path */}
          <img
            src={cloudinaryFit(CHARACTER, 128)}
            alt=""
            aria-hidden
            className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_6px_12px_rgba(31,42,55,0.12)]"
          />
        </div>

        {/* ── Mobile / tablet: vertical path ── */}
        <div className="relative mt-14 lg:hidden">
          {/* Vertical winding path line */}
          <svg
            aria-hidden
            viewBox="0 0 40 1200"
            preserveAspectRatio="none"
            className="absolute left-1/2 top-0 h-full w-10 -translate-x-1/2"
          >
            <path
              d="M20 40 C 36 200, 4 360, 20 520 C 36 680, 4 840, 20 1000 C 36 1080, 20 1120, 20 1180"
              fill="none"
              stroke="#8FCBDD"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="2 14"
            />
          </svg>

          <div className="relative flex flex-col gap-12">
            {milestones.map((m, i) => (
              <MilestoneStop
                key={m.title}
                milestone={m}
                index={i}
                above={false}
                mobile
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <a href={trialLink} target="_blank" rel="noopener noreferrer" className="btn-accent group">
            Bắt đầu hành trình của con
            <ArrowRight
              className="h-5 w-5 transition-transform duration-300 ease-smooth group-hover:translate-x-1"
              strokeWidth={2.25}
            />
          </a>
        </div>
      </div>

      {/* Wave divider into MidPageCTA */}
      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 block h-12 w-full text-ink-900 sm:h-16"
      >
        <path
          d="M0 40 C 240 80, 480 0, 720 30 C 960 60, 1200 20, 1440 45 L 1440 80 L 0 80 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}

function MilestoneStop({
  milestone,
  index,
  above,
  mobile = false,
}: {
  milestone: Milestone;
  index: number;
  above: boolean;
  mobile?: boolean;
}) {
  return (
    <div
      className={[
        'relative flex flex-col items-center',
        mobile ? 'w-full' : above ? 'mt-0' : 'mt-24',
      ].join(' ')}
    >
      {/* Number badge */}
      <div
        className={[
          'relative flex items-center justify-center shadow-card',
          milestone.isFinal ? 'h-28 w-32' : 'h-24 w-28',
          milestone.badgeClass,
          milestone.tilt,
        ].join(' ')}
        style={{
          borderRadius: '44% 56% 48% 52% / 58% 42% 58% 42%',
        }}
      >
        <span className="font-heading text-2xl font-extrabold tracking-tight lg:text-3xl">
          {milestone.num}
        </span>
        {milestone.isFinal && (
          <Star
            className="absolute -right-2 -top-2 h-7 w-7 fill-yellow-400 text-yellow-400"
            strokeWidth={1}
          />
        )}
      </div>

      {/* Small organic blob card with title + description */}
      <div
        className={[
          'mt-5 w-full p-6 shadow-soft ring-1 ring-ink-300/20 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card',
          milestone.cardClass,
          milestone.tilt,
        ].join(' ')}
        style={{ borderRadius: milestone.shape }}
      >
        <h3 className="font-heading text-xl font-extrabold leading-tight text-ink-900">
          {milestone.title}
        </h3>
        <p className="mt-2 font-body text-base leading-relaxed text-ink-600">
          {milestone.body}
        </p>
      </div>

      <span className="sr-only">Mốc {index + 1}</span>
    </div>
  );
}
