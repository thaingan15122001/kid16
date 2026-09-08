import { Sparkles, Brain, PenTool, BookOpen, Presentation } from 'lucide-react';
import { cloudinary } from '@/lib/cloudinary';

const PHOTO =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788167370/cap-bac-nghe-thumbnail-768x512.jpg';
const ANIMAL =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788166532/play-1.svg';

interface Method {
  icon: typeof Brain;
  title: string;
  body: string;
  badgeClass: string;
  shape: string;
  tilt: string;
}

const methods: Method[] = [
  {
    icon: Brain,
    title: 'Tư duy phản biện',
    body: 'Con được đặt câu hỏi, tranh luận và bảo vệ quan điểm thay vì học thuộc lòng - tiếng Anh trở thành công cụ để suy nghĩ.',
    badgeClass: 'bg-sky-200/70 text-sky-700',
    shape: '58% 42% 48% 52% / 52% 58% 42% 48%',
    tilt: 'rotate-[-2deg]',
  },
  {
    icon: PenTool,
    title: 'Viết luận có cấu trúc',
    body: 'Con học cách xây khung bài rõ ràng, lập luận mạch lạc và dùng từ vựng học thuật phù hợp - nền tảng cho mọi bài viết.',
    badgeClass: 'bg-blush-300/70 text-blush-600',
    shape: '42% 58% 52% 48% / 48% 42% 58% 52%',
    tilt: 'rotate-[1.5deg]',
  },
  {
    icon: BookOpen,
    title: 'Đọc hiểu chuyên sâu',
    body: 'Con phân tích văn bản, nắm ý chính và suy luận thay vì đọc lướt - giúp hiểu sâu và dùng được kiến thức.',
    badgeClass: 'bg-cream-300 text-ink-900',
    shape: '52% 48% 58% 42% / 42% 52% 48% 58%',
    tilt: 'rotate-[-1.5deg]',
  },
  {
    icon: Presentation,
    title: 'Thuyết trình tự tin',
    body: 'Con rèn kỹ năng trình bày quan điểm trước lớp, trả lời câu hỏi và thảo luận - tự tin thể hiện bản thân bằng tiếng Anh.',
    badgeClass: 'bg-ink-900/10 text-ink-900',
    shape: '48% 52% 44% 56% / 56% 44% 56% 44%',
    tilt: 'rotate-[1deg]',
  },
];

export default function TeachingMethod() {
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

      {/* Animal accent - bottom-left for variety */}
      <img
        src={ANIMAL}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -bottom-4 left-6 hidden h-16 w-16 rotate-[-8deg] drop-shadow-[0_6px_12px_rgba(31,42,55,0.12)] lg:block"
      />

      <div className="container-page relative">
        {/* Section header */}
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-blush-200/70 px-4 py-1.5 font-body text-sm font-semibold text-blush-600">
              <Sparkles className="h-4 w-4" strokeWidth={2.25} />
              PHƯƠNG PHÁP HỌC
            </span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.5rem]">
              Học để{' '}
              <span className="relative whitespace-nowrap text-sky-600">
                làm chủ
                <svg
                  aria-hidden
                  viewBox="0 0 120 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-blush-400"
                >
                  <path
                    d="M2 8 C 34 2, 86 2, 118 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              tiếng Anh
            </h2>
          </div>
          <p className="max-w-sm font-body text-base leading-relaxed text-ink-600 lg:text-right">
            Phương pháp học thuật, đi thẳng vào bản chất ngôn ngữ - giúp con không
            chỉ hiểu mà còn dùng tiếng Anh để tư duy và thể hiện mình.
          </p>
        </div>

        {/* Layout: cards left, photo right */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {methods.map((m) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.title}
                    className={[
                      'group flex flex-col bg-cream-50 p-6 shadow-soft ring-1 ring-ink-300/20 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card',
                      m.tilt,
                    ].join(' ')}
                    style={{ borderRadius: m.shape }}
                  >
                    <span
                      className={[
                        'inline-flex h-11 w-11 items-center justify-center rounded-[14px] transition-transform duration-300 ease-smooth group-hover:scale-105',
                        m.badgeClass,
                      ].join(' ')}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2.25} />
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-ink-900">
                      {m.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-ink-600">
                      {m.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Photo */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[420px]">
              <div
                className="relative aspect-[4/5] w-full overflow-hidden shadow-lift ring-1 ring-ink-900/10 rotate-[2deg]"
                style={{
                  borderRadius: '46% 54% 52% 48% / 54% 46% 54% 46%',
                }}
              >
                <img
                  src={cloudinary(PHOTO, 420, 525)}
                  alt="Học sinh 11-15 tuổi học tiếng Anh tại ILE"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/15 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider into LearningRoadmap */}
      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 block h-12 w-full text-blush-100 sm:h-16"
      >
        <path
          d="M0 40 C 240 80, 480 0, 720 30 C 960 60, 1200 20, 1440 45 L 1440 80 L 0 80 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
