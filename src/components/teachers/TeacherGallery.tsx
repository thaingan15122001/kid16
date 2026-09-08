import { useState } from 'react';
import { Sparkles, Globe } from 'lucide-react';
import { cloudinary } from '@/lib/cloudinary';

interface Teacher {
  prefix: string;
  name: string;
  initial: string;
  photo: string;
  credential?: string;
  experience: string;
  tag: string;
  isNative: boolean;
  avatarClass: string;
  avatarShape: string;
  photoShape: string;
  tilt: string;
  cardShape: string;
}

const baseTeachers: Teacher[] = [
  {
    prefix: 'Thầy',
    name: 'Tirich Mohamed',
    initial: 'T',
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167432/kindy_avta-PavelKukikov.webp',
    credential: 'TESOL - Chứng chỉ giảng dạy chuyên nghiệp',
    experience: '10 năm kinh nghiệm · Chuyên IELTS',
    tag: 'Giáo viên bản ngữ',
    isNative: true,
    avatarClass: 'bg-sky-200 text-ink-900',
    avatarShape: '58% 42% 48% 52% / 52% 58% 42% 48%',
    photoShape: '52% 48% 44% 56% / 45% 54% 46% 55%',
    tilt: 'rotate-[-2deg]',
    cardShape: '24px 24px 24px 90px',
  },
  {
    prefix: 'Cô',
    name: 'Bích Sơn',
    initial: 'B',
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167424/kindy_tes_1.webp',
    credential: 'TESOL - Chứng chỉ giảng dạy chuyên nghiệp',
    experience: '05 năm kinh nghiệm · Chuyên IELTS',
    tag: 'Giáo viên Việt Nam',
    isNative: false,
    avatarClass: 'bg-blush-200 text-ink-900',
    avatarShape: '42% 58% 52% 48% / 48% 42% 58% 52%',
    photoShape: '46% 54% 60% 40% / 54% 44% 56% 46%',
    tilt: 'rotate-[1.5deg]',
    cardShape: '24px 90px 24px 24px',
  },
  {
    prefix: 'Cô',
    name: 'Ngọc Minh',
    initial: 'N',
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167430/primary_tes_2.webp',
    experience: '03 năm kinh nghiệm · IELTS 7.0',
    tag: 'Giáo viên Việt Nam',
    isNative: false,
    avatarClass: 'bg-cream-200 text-ink-900',
    avatarShape: '52% 48% 58% 42% / 42% 52% 48% 58%',
    photoShape: '58% 42% 45% 55% / 48% 55% 45% 52%',
    tilt: 'rotate-[-1.5deg]',
    cardShape: '24px 24px 90px 24px',
  },
  {
    prefix: 'Cô',
    name: 'Mary',
    initial: 'C',
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167434/kindy_Linzi-Mary-Dickson.webp',
    experience: '03 năm kinh nghiệm · IELTS 6.5',
    tag: 'Giáo viên Việt Nam',
    isNative: false,
    avatarClass: 'bg-ink-900 text-cream-100',
    avatarShape: '48% 52% 44% 56% / 56% 44% 56% 44%',
    photoShape: '42% 58% 52% 48% / 58% 42% 58% 42%',
    tilt: 'rotate-[1deg]',
    cardShape: '90px 24px 24px 24px',
  },
  {
    prefix: 'Cô',
    name: 'Minh Anh',
    initial: 'M',
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167424/kindy_tes_1.webp',
    experience: '05 năm kinh nghiệm · Chuyên IELTS',
    tag: 'Giáo viên Việt Nam',
    isNative: false,
    avatarClass: 'bg-sky-200 text-ink-900',
    avatarShape: '55% 45% 40% 60% / 60% 48% 52% 40%',
    photoShape: '48% 52% 56% 44% / 44% 56% 44% 56%',
    tilt: 'rotate-[-1deg]',
    cardShape: '24px 24px 24px 90px',
  },
];

// Placeholder duplicates: cycle through the 5 real teachers to fill 12 slots.
// Replace with real teacher data when available.
const teachers: Teacher[] = Array.from({ length: 12 }, (_, i) => {
  const base = baseTeachers[i % baseTeachers.length];
  return {
    ...base,
    // Vary tilt direction per slot for visual rhythm.
    tilt: i % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[1.5deg]',
  };
});

const cardTilts = [
  'rotate-[-2deg]',
  'rotate-[1.5deg]',
  'rotate-[-1deg]',
  'rotate-[2deg]',
  'rotate-[-1.5deg]',
  'rotate-[1deg]',
  'rotate-[-2deg]',
  'rotate-[1.5deg]',
  'rotate-[-1deg]',
  'rotate-[2deg]',
  'rotate-[-1.5deg]',
  'rotate-[1deg]',
];

export default function TeacherGallery() {
  const [selected, setSelected] = useState(0);
  const featured = teachers[selected];

  return (
    <section className="relative overflow-hidden bg-cream-100 py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-16 h-[320px] w-[320px] rounded-[54%_46%_37%_63%_/_48%_55%_45%_52%] bg-sky-200/30 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-24 h-[300px] w-[300px] rounded-[46%_54%_58%_42%_/_54%_46%_54%_46%] bg-blush-200/20 blur-2xl"
      />

      <div className="container-page relative">
        {/* Section header */}
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-200/70 px-4 py-1.5 font-body text-sm font-semibold text-sky-700">
              <Sparkles className="h-4 w-4" strokeWidth={2.25} />
              Con người làm nên sự khác biệt
            </span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Gặp gỡ{' '}
              <span className="relative whitespace-nowrap text-sky-600">
                đội ngũ ILE
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
            </h2>
          </div>
          <p className="max-w-sm font-body text-base leading-relaxed text-ink-600 lg:text-right">
            Mỗi giáo viên mang một màu sắc riêng, nhưng đều chung một mục tiêu -
            đồng hành cùng con trên hành trình tiếng Anh.
          </p>
        </div>

        {/* Featured + grid layout */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Featured panel */}
          <div className="lg:col-span-5">
            <div
              className="relative flex h-full flex-col items-center overflow-hidden bg-cream-50 p-8 shadow-card ring-1 ring-ink-300/20 lg:p-10"
              style={{ borderRadius: '24px 24px 24px 90px' }}
            >
              {/* Photo */}
              <div
                className="relative aspect-[4/5] w-full max-w-[360px] overflow-hidden shadow-lift ring-1 ring-ink-900/10"
                style={{ borderRadius: featured.photoShape }}
              >
                <img
                  src={cloudinary(featured.photo, 360, 450)}
                  alt={`${featured.prefix} ${featured.name}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/15 via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="mt-6 w-full text-center">
                <span
                  className={[
                    'inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-body text-xs font-semibold',
                    featured.isNative
                      ? 'bg-sky-200 text-sky-800'
                      : 'bg-blush-200 text-blush-600',
                  ].join(' ')}
                >
                  {featured.isNative && (
                    <Globe className="h-3.5 w-3.5" strokeWidth={2.25} />
                  )}
                  {featured.tag}
                </span>

                <h3 className="mt-4 font-heading text-2xl font-extrabold leading-tight text-ink-900">
                  {featured.prefix} {featured.name}
                </h3>

                {featured.credential && (
                  <p className="mt-2 font-body text-sm font-semibold text-ink-700">
                    {featured.credential}
                  </p>
                )}
                <p className="mt-1 font-body text-sm leading-relaxed text-ink-600">
                  {featured.experience}
                </p>
              </div>
            </div>
          </div>

          {/* Grid of 12 avatar cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
              {teachers.map((t, i) => {
                const isActive = i === selected;
                return (
                  <button
                    key={`${t.name}-${i}`}
                    type="button"
                    onClick={() => setSelected(i)}
                    aria-pressed={isActive}
                    aria-label={`${t.prefix} ${t.name}`}
                    className={[
                      'group flex flex-col items-center gap-3 p-4 text-center transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card',
                      'shadow-soft ring-1',
                      isActive
                        ? 'ring-2 ring-sky-400 shadow-card -translate-y-0.5 bg-cream-50'
                        : 'ring-ink-300/20 bg-cream-50/70 hover:bg-cream-50',
                      cardTilts[i % cardTilts.length],
                    ].join(' ')}
                    style={{ borderRadius: '20px 20px 20px 48px' }}
                  >
                    {/* Avatar */}
                    <div
                      className="relative h-20 w-20 overflow-hidden shadow-soft ring-1 ring-ink-900/5 sm:h-24 sm:w-24"
                      style={{ borderRadius: t.avatarShape }}
                    >
                      <img
                        src={cloudinary(t.photo, 96, 96)}
                        alt={`${t.prefix} ${t.name}`}
                        className="h-full w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    {/* Name */}
                    <div className="min-w-0">
                      <p className="font-heading text-sm font-bold leading-tight text-ink-900">
                        {t.prefix} {t.name}
                      </p>
                      <p className="mt-0.5 font-body text-[11px] font-medium text-ink-500">
                        {t.isNative ? 'Bản ngữ' : 'Việt Nam'}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Soft wave divider into FinalCTA */}
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
