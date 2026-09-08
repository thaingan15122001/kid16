import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Globe } from 'lucide-react';
import { cloudinary } from '@/lib/cloudinary';

interface Teacher {
  prefix: string;
  name: string;
  photo: string;
  tag: string;
  isNative: boolean;
  avatarShape: string;
}

const teachers: Teacher[] = [
  {
    prefix: 'Thầy',
    name: 'Tirich Mohamed',
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167432/kindy_avta-PavelKukikov.webp',
    tag: 'Giáo viên bản ngữ',
    isNative: true,
    avatarShape: '58% 42% 48% 52% / 52% 58% 42% 48%',
  },
  {
    prefix: 'Cô',
    name: 'Bích Sơn',
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167424/kindy_tes_1.webp',
    tag: 'Giáo viên Việt Nam',
    isNative: false,
    avatarShape: '42% 58% 52% 48% / 48% 42% 58% 52%',
  },
  {
    prefix: 'Cô',
    name: 'Ngọc Minh',
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167430/primary_tes_2.webp',
    tag: 'Giáo viên Việt Nam',
    isNative: false,
    avatarShape: '52% 48% 58% 42% / 42% 52% 48% 58%',
  },
  {
    prefix: 'Cô',
    name: 'Mary',
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167434/kindy_Linzi-Mary-Dickson.webp',
    tag: 'Giáo viên Việt Nam',
    isNative: false,
    avatarShape: '48% 52% 44% 56% / 56% 44% 56% 44%',
  },
];

const cardTilts = [
  'rotate-[-2deg]',
  'rotate-[1.5deg]',
  'rotate-[-1.5deg]',
  'rotate-[1deg]',
];

export default function TeacherPreview() {
  return (
    <section className="relative overflow-hidden bg-sky-200 py-20 lg:py-28">
      {/* Soft decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-16 h-[320px] w-[320px] rounded-[54%_46%_37%_63%_/_48%_55%_45%_52%] bg-cream-100/25 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-24 h-[300px] w-[300px] rounded-[46%_54%_58%_42%_/_54%_46%_54%_46%] bg-blush-200/20 blur-2xl"
      />

      <div className="container-page relative">
        {/* Section header — centered */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-4 py-1.5 font-body text-sm font-semibold text-ink-900">
            <Sparkles className="h-4 w-4" strokeWidth={2.25} />
            ĐỘI NGŨ GIÁO VIÊN
          </span>
          <h2 className="mt-5 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
            Ai sẽ đồng hành cùng con?
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ink-600 lg:text-lg">
            Giáo viên giàu kinh nghiệm, luôn kiên nhẫn và yêu trẻ - đúng như con
            cần ở độ tuổi này.
          </p>
        </div>

        {/* Teacher cards grid */}
        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:gap-6">
          {teachers.map((t, i) => (
            <TeacherCard key={t.name} teacher={t} tilt={cardTilts[i]} />
          ))}
        </div>

        {/* Ghost-style link */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/doi-ngu"
            className="group inline-flex items-center gap-2 font-body text-base font-bold text-ink-800 underline decoration-blush-400 decoration-2 underline-offset-4 transition-colors duration-200 hover:text-sky-700"
          >
            Xem tất cả đội ngũ giáo viên
            <ArrowRight
              className="h-5 w-5 transition-transform duration-300 ease-smooth group-hover:translate-x-1"
              strokeWidth={2.25}
            />
          </Link>
        </div>
      </div>

      {/* Wave divider into LearningSpace */}
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

function TeacherCard({
  teacher,
  tilt,
}: {
  teacher: Teacher;
  tilt: string;
}) {
  return (
    <article
      className={[
        'group flex flex-col items-center gap-3 p-4 text-center shadow-soft ring-1 ring-ink-300/20 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:rotate-0 hover:shadow-card bg-cream-50',
        tilt,
      ].join(' ')}
      style={{ borderRadius: '20px 20px 20px 48px' }}
    >
      {/* Avatar */}
      <div
        className="relative aspect-square w-full overflow-hidden shadow-soft ring-1 ring-ink-900/5"
        style={{ borderRadius: teacher.avatarShape }}
      >
        <img
          src={cloudinary(teacher.photo, 160, 160)}
          alt={`${teacher.prefix} ${teacher.name}`}
          className="h-full w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Name */}
      <div className="min-w-0">
        <p className="font-heading text-sm font-bold leading-tight text-ink-900">
          {teacher.prefix} {teacher.name}
        </p>
        <p className="mt-0.5 inline-flex items-center gap-1 font-body text-xs text-ink-500">
          {teacher.isNative && (
            <Globe className="h-3 w-3" strokeWidth={2.25} />
          )}
          {teacher.isNative ? 'Bản ngữ' : 'Việt Nam'}
        </p>
      </div>
    </article>
  );
}
