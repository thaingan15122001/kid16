import { type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheck as CheckCircle2, Sparkles, Award, Quote } from 'lucide-react';
import { cloudinary } from '@/lib/cloudinary';

interface Stat {
  value: string;
  label: string;
  badgeClass: string;
  shape: string;
  tilt: string;
}

const stats: Stat[] = [
  {
    value: '2.000+',
    label: 'Học viên đã đồng hành cùng ILE',
    badgeClass: 'bg-sky-200/80 text-sky-700',
    shape: '58% 42% 48% 52% / 52% 58% 42% 48%',
    tilt: 'rotate-[-2deg]',
  },
  {
    value: '95%',
    label: 'Phụ huynh hài lòng về sự tiến bộ của con',
    badgeClass: 'bg-blush-200/80 text-blush-600',
    shape: '42% 58% 52% 48% / 48% 42% 58% 52%',
    tilt: 'rotate-[1.5deg]',
  },
  {
    value: 'IELTS 7.0+',
    label: 'Đầu ra trung bình sau lộ trình 6-7-7',
    badgeClass: 'bg-cream-200 text-ink-700',
    shape: '52% 48% 58% 42% / 42% 52% 48% 58%',
    tilt: 'rotate-[-1.5deg]',
  },
];

interface Student {
  name: string;
  context: string;
  photo: string;
  achievements: string[];
  panelClass: string;
  accentClass: string;
  photoShape: string;
  shape: string;
  tilt: string;
}

const students: Student[] = [
  {
    name: 'Đỗ Lê Tuấn Kiệt',
    context: 'Lớp 10 · Trường TH-THCS-THPT Thái Bình Dương (IPS)',
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167404/kindy_nguyenquangkhai.webp',
    achievements: [
      'Học bổng Tinh hoa xuyên suốt cấp THPT',
      'Diễn giả tại TEDxUCIS Youth 2025',
      'GPA 4.0 các lớp IGCSE',
      'Giải Đồng Duke of Edinburgh',
    ],
    panelClass: 'bg-sky-100/70',
    accentClass: 'bg-sky-300 text-ink-900',
    photoShape: '46% 54% 52% 48% / 54% 46% 54% 46%',
    shape: '48% 52% 56% 44% / 44% 56% 44% 56%',
    tilt: 'rotate-[-1.5deg]',
  },
  {
    name: 'Võ Trần Song Thư',
    context: 'Lớp 12 · Trường TH-THCS-THPT Thái Bình Dương (IPS)',
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167402/kindy_letieucat.webp',
    achievements: [
      'Học bổng Đại học Fulbright Việt Nam',
      'Học bổng VinUni & Đại học Quốc tế Sài Gòn',
      'Huy chương vàng bơi học sinh tỉnh Đồng Nai 2023',
      'Quán quân Hùng biện Tiếng Anh Trinity College 2022-2023',
    ],
    panelClass: 'bg-blush-100/70',
    accentClass: 'bg-blush-300 text-ink-900',
    photoShape: '52% 48% 44% 56% / 48% 52% 48% 52%',
    shape: '56% 44% 48% 52% / 52% 48% 56% 44%',
    tilt: 'rotate-[1deg]',
  },
  {
    name: 'Nguyễn Hoàng Kim Ngân',
    context: 'Lớp 9 · Trường TH-THCS-THPT Thái Bình Dương (IPS)',
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167400/kindy_langoctuenhi.webp',
    achievements: [
      'Học bổng Tài năng IGC cấp THCS',
      'Diễn giả TEDx Youth IGCSchool TBD 2022',
      'Giải vàng Kỳ thi Tiếng Anh Quốc tế Kangaroo (IKLC) 2023',
      '2 huy chương vàng bơi lội tỉnh Đồng Nai 2023',
    ],
    panelClass: 'bg-cream-50',
    accentClass: 'bg-cream-300 text-ink-900',
    photoShape: '58% 42% 45% 55% / 48% 55% 45% 52%',
    shape: '44% 56% 52% 48% / 56% 44% 56% 44%',
    tilt: 'rotate-[-1deg]',
  },
  {
    name: 'Nguyễn Thị Lam Ngọc',
    context: 'Lớp 6 · Trường TH-THCS IGC Bến Tre',
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167404/kindy_little-girls-section-sun-little-kids.webp',
    achievements: [
      'Học bổng Tài năng xuyên suốt cấp THCS',
      'Dự án Triển vọng vòng Quốc gia, cuộc thi Leader in Me 2023',
      'Giải Khuyến khích Hùng biện Tiếng Anh cấp Thành phố',
    ],
    panelClass: 'bg-sky-100/60',
    accentClass: 'bg-ink-900 text-cream-100',
    photoShape: '42% 58% 52% 48% / 58% 42% 58% 42%',
    shape: '52% 48% 44% 56% / 48% 52% 48% 52%',
    tilt: 'rotate-[1.5deg]',
  },
];

const BG_IMAGE =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788166532/kindy_bg_trust.webp';
const CHARACTER =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788166532/stream-1.svg';
const LISTEN_CHARACTER =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788166532/listen-1.svg';

const flagshipShape: CSSProperties = {
  borderRadius: '28px 44px 32px 52px / 38px 28px 46px 30px',
};

export default function Results() {
  return (
    <section
      id="ket-qua"
      className="relative scroll-mt-24 overflow-hidden bg-cream-100 py-20 lg:py-28"
    >
      {/* Editorial background — soft, dimmed with cream/sky overlay */}
      <div aria-hidden className="absolute inset-0">
        <img
          src={cloudinary(BG_IMAGE, 1280, 800)}
          alt=""
          className="h-full w-full object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100/90 via-cream-100/75 to-cream-100/90" />
      </div>

      {/* Single character accent — peeking from the section's top-right, clear of all cards */}
      <img
        src={CHARACTER}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-4 top-6 hidden h-20 w-20 drop-shadow-[0_8px_16px_rgba(31,42,55,0.12)] lg:block"
      />

      <div className="container-page relative">
        {/* Section header */}
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-blush-200/70 px-4 py-1.5 font-body text-sm font-semibold text-blush-600">
              <Sparkles className="h-4 w-4" strokeWidth={2.25} />
              Thành quả đáng tự hào
            </span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Kết quả{' '}
              <span className="relative whitespace-nowrap text-sky-600">
                nói lên tất cả
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
            Từ những bước đầu bỡ ngỡ đến những cột mốc đáng tự hào — đây là hành
            trình của các con tại ILE.
          </p>
        </div>

        {/* ── PART 1: Stat strip ── */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.value}
              className={[
                'flex flex-col items-center justify-center px-6 py-8 text-center shadow-soft ring-1 ring-ink-300/20 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card',
                s.badgeClass,
                s.tilt,
              ].join(' ')}
              style={{ borderRadius: s.shape }}
            >
              <p className="font-heading text-3xl font-extrabold tracking-tight lg:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 font-body text-sm font-semibold leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── PART 2: Student spotlight cards ── */}
        {/* Desktop: asymmetric editorial grid — flagship left (2 rows), 3 stacked right */}
        <div className="mt-16 hidden lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-8">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <FlagshipCard student={students[0]} />
            <QuoteCard />
          </div>
          <div className="flex flex-col gap-6 lg:col-span-5">
            <SpotlightCard student={students[1]} />
            <SpotlightCard student={students[2]} />
            <SpotlightCard student={students[3]} />
          </div>
        </div>

        {/* Mobile / tablet: clean vertical stack, flagship first */}
        <div className="mt-12 flex flex-col gap-6 lg:hidden">
          <FlagshipCard student={students[0]} mobile />
          <QuoteCard />
          <SpotlightCard student={students[1]} />
          <SpotlightCard student={students[2]} />
          <SpotlightCard student={students[3]} />
        </div>

        {/* CTA — ghost-style link */}
        <div className="mt-14 flex justify-center">
          <Link
            to="/ket-qua"
            className="group inline-flex items-center gap-2 font-body text-base font-bold text-ink-800 underline decoration-blush-400 decoration-2 underline-offset-4 transition-colors duration-200 hover:text-sky-700"
          >
            Xem thêm các kết quả khác
            <ArrowRight
              className="h-5 w-5 transition-transform duration-300 ease-smooth group-hover:translate-x-1"
              strokeWidth={2.25}
            />
          </Link>
        </div>
      </div>

      {/* Soft wave divider */}
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

function FlagshipCard({
  student,
  mobile = false,
}: {
  student: Student;
  mobile?: boolean;
}) {
  return (
    <article
      className={[
        'group relative shrink-0 overflow-visible p-8 shadow-lift ring-1 ring-ink-300/20 transition-all duration-300 ease-smooth hover:shadow-card',
        student.panelClass,
        mobile ? student.tilt : 'rotate-[-1.5deg]',
      ].join(' ')}
      style={mobile ? { borderRadius: '28px 38px 32px 44px / 36px 28px 42px 30px' } : flagshipShape}
    >
      {/* Small animal accent — peeking from top-right corner of the flagship card */}
      <img
        src={LISTEN_CHARACTER}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-3 -top-6 h-16 w-16 drop-shadow-[0_6px_12px_rgba(31,42,55,0.12)] sm:h-20 sm:w-20"
      />

      {/* Header row: organic photo frame + name/school */}
      <div className="flex items-center gap-5">
        <div
          className="relative h-28 w-28 shrink-0 overflow-hidden shadow-card ring-1 ring-ink-900/5 sm:h-32 sm:w-32 lg:h-36 lg:w-36"
          style={{ borderRadius: '52% 48% 56% 44% / 48% 54% 46% 52%' }}
        >
          <img
            src={cloudinary(student.photo, 144, 144)}
            alt={`Học viên ${student.name} tại ILE`}
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-smooth group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="min-w-0">
          <span
            className={[
              'inline-flex h-10 w-10 items-center justify-center shadow-soft',
              student.accentClass,
            ].join(' ')}
            style={{ borderRadius: '44% 56% 48% 52% / 58% 42% 58% 42%' }}
          >
            <Award className="h-5 w-5" strokeWidth={2.25} />
          </span>
          <h3 className="mt-3 font-heading text-2xl font-extrabold leading-tight text-ink-900 lg:text-3xl">
            {student.name}
          </h3>
          <p className="mt-1 font-body text-sm font-semibold text-ink-600">
            {student.context}
          </p>
        </div>
      </div>

      {/* Achievement list — clearly separate from the photo */}
      <ul className="mt-7 space-y-3.5">
        {student.achievements.map((a) => (
          <li
            key={a}
            className="flex items-start gap-3 font-body text-base leading-relaxed text-ink-700 lg:text-lg"
          >
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-sky-600"
              strokeWidth={2.25}
            />
            <span>{a}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function QuoteCard() {
  return (
    <article
      className="relative flex flex-1 flex-col justify-center overflow-visible p-7 shadow-soft ring-1 ring-ink-300/20 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card rotate-[1deg] bg-blush-100/60"
      style={{ borderRadius: '42% 58% 48% 52% / 58% 42% 56% 44%' }}
    >
      <div className="flex items-start gap-4">
        <Quote
          className="h-10 w-10 shrink-0 text-blush-400"
          strokeWidth={1.5}
        />
        <div>
          <p className="font-body text-base italic leading-relaxed text-ink-700 lg:text-lg">
            Con tự tin hơn rất nhiều sau khi học ở ILE, không chỉ tiếng Anh mà
            cả cách con thể hiện bản thân trước đám đông.
          </p>
          <p className="mt-4 font-body text-sm font-bold text-ink-900">
            — Phụ huynh của Tuấn Kiệt
          </p>
        </div>
      </div>
    </article>
  );
}

function SpotlightCard({ student }: { student: Student }) {
  return (
    <article
      className={[
        'group relative flex-1 overflow-visible p-6 shadow-soft ring-1 ring-ink-300/20 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card',
        student.panelClass,
        student.tilt,
      ].join(' ')}
      style={{ borderRadius: '26px 36px 30px 42px / 34px 26px 38px 28px' }}
    >
      {/* Header row: organic photo frame + name/school */}
      <div className="flex items-center gap-4">
        <div
          className="relative h-20 w-20 shrink-0 overflow-hidden shadow-card ring-1 ring-ink-900/5 sm:h-24 sm:w-24"
          style={{ borderRadius: student.photoShape }}
        >
          <img
            src={cloudinary(student.photo, 96, 96)}
            alt={`Học viên ${student.name} tại ILE`}
            className="h-full w-full bg-cream-50 object-contain transition-transform duration-700 ease-smooth group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span
              className={[
                'inline-flex h-7 w-7 items-center justify-center shadow-soft',
                student.accentClass,
              ].join(' ')}
              style={{ borderRadius: '44% 56% 48% 52% / 58% 42% 58% 42%' }}
            >
              <Award className="h-3.5 w-3.5" strokeWidth={2.25} />
            </span>
            <h3 className="font-heading text-lg font-extrabold leading-tight text-ink-900">
              {student.name}
            </h3>
          </div>
          <p className="mt-1 font-body text-xs font-semibold text-ink-600">
            {student.context}
          </p>
        </div>
      </div>

      {/* Achievement list — clearly separate from the photo */}
      <ul className="mt-5 space-y-2.5">
        {student.achievements.map((a) => (
          <li
            key={a}
            className="flex items-start gap-2.5 font-body text-sm leading-relaxed text-ink-700"
          >
            <CheckCircle2
              className="mt-0.5 h-4 w-4 shrink-0 text-sky-600"
              strokeWidth={2.25}
            />
            <span>{a}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
