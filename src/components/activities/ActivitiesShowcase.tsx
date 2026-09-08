import { Sparkles } from 'lucide-react';
import { cloudinary } from '@/lib/cloudinary';

interface ActivityRow {
  photo: string;
  number: string;
  tag: string;
  title: string;
  description: string;
  accent: 'sky' | 'blush' | 'cream';
  photoShape: string;
  rotate: string;
  badgeClass: string;
  tagClass: string;
}

const activities: ActivityRow[] = [
  {
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788841058/hoat-dong_6.jpg',
    number: '01',
    tag: 'Hoạt động 01',
    title: 'Giờ kể chuyện',
    description:
      'Mỗi tuần, các bé cùng quây quần nghe cô kể chuyện bằng tiếng Anh qua tranh ảnh sinh động, học từ vựng mới qua ngữ cảnh thật. Hoạt động giúp con làm quen phát âm tự nhiên và nuôi dưỡng tình yêu với ngôn ngữ mới.',
    accent: 'sky',
    photoShape: '52% 48% 56% 44% / 48% 54% 46% 52%',
    rotate: 'rotate-[-2deg]',
    badgeClass: 'bg-sky-300 text-ink-900',
    tagClass: 'bg-sky-200/70 text-sky-700',
  },
  {
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788841058/hoat-dong.jpg',
    number: '02',
    tag: 'Hoạt động 02',
    title: 'Trò chơi vận động',
    description:
      'Xen giữa giờ học là những trò chơi vận động ngoài trời bằng tiếng Anh - chạy nhảy, ném bóng, nhảy dây. Con vừa giải phóng năng lượng, vừa luyện phản xạ nghe - nói tự nhiên khi giao tiếp cùng bạn bè lúc chơi.',
    accent: 'blush',
    photoShape: '46% 54% 44% 56% / 54% 46% 54% 46%',
    rotate: 'rotate-[2deg]',
    badgeClass: 'bg-blush-300 text-ink-900',
    tagClass: 'bg-blush-200/70 text-blush-600',
  },
  {
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788841058/hoat-dong_5.jpg',
    number: '03',
    tag: 'Hoạt động 03',
    title: 'Góc âm nhạc',
    description:
      'Âm nhạc là cách học tiếng Anh vui nhất với các bé. Con được hát, gõ nhịp và nhảy theo giai điệu quen thuộc, ghi nhớ từ vựng qua nhịp điệu, đồng thời rèn sự tự tin thể hiện bản thân trước đám đông.',
    accent: 'cream',
    photoShape: '58% 42% 45% 55% / 48% 55% 45% 52%',
    rotate: 'rotate-[-1.5deg]',
    badgeClass: 'bg-cream-300 text-ink-900',
    tagClass: 'bg-cream-200 text-ink-700',
  },
];

const CROW =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788166534/yeya-cuervo-01.svg';

export default function ActivitiesShowcase() {
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

      {/* Crow character accent near header */}
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

        {/* Editorial zigzag layout */}
        <div className="mt-16 flex flex-col gap-20 lg:mt-20 lg:gap-28">
          {activities.map((activity, i) => (
            <ActivityRowBlock
              key={activity.number}
              activity={activity}
              photoLeft={i % 2 === 0}
            />
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

function ActivityRowBlock({
  activity,
  photoLeft,
}: {
  activity: ActivityRow;
  photoLeft: boolean;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Photo side */}
      <div className={photoLeft ? '' : 'lg:order-2'}>
        <div className="relative mx-auto w-full max-w-[520px]">
          <div
            className={[
              'group relative aspect-[4/3] w-full overflow-hidden shadow-lift ring-1 ring-ink-900/10 transition-all duration-300 ease-smooth hover:rotate-0 hover:scale-[1.02]',
              activity.rotate,
            ].join(' ')}
            style={{ borderRadius: activity.photoShape }}
          >
            <img
              src={cloudinary(activity.photo, 520, 390)}
              alt={activity.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/15 via-transparent to-transparent" />
          </div>

          {/* Numbered badge */}
          <div
            className={[
              'absolute -bottom-4 left-6 flex h-14 w-14 items-center justify-center rounded-full font-heading text-lg font-extrabold shadow-card ring-4 ring-cream-100',
              activity.badgeClass,
            ].join(' ')}
          >
            {activity.number}
          </div>
        </div>
      </div>

      {/* Text side */}
      <div className={photoLeft ? '' : 'lg:order-1'}>
        <span
          className={[
            'inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-body text-sm font-semibold',
            activity.tagClass,
          ].join(' ')}
        >
          {activity.tag}
        </span>

        <h3 className="mt-5 font-heading text-2xl font-extrabold leading-tight text-ink-900 sm:text-3xl">
          {activity.title}
        </h3>

        <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-ink-600">
          {activity.description}
        </p>
      </div>
    </div>
  );
}
