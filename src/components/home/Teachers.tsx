import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Globe,
  Sparkles,
} from 'lucide-react';
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

const teachers: Teacher[] = [
  {
    prefix: 'Thầy',
    name: 'Pavel',
    initial: 'P',
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167432/kindy_avta-PavelKukikov.webp',
    credential: 'TESOL – Chứng chỉ giảng dạy chuyên nghiệp',
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
    credential: 'TESOL – Chứng chỉ giảng dạy chuyên nghiệp',
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
    prefix: 'Thầy',
    name: 'Bourdon',
    initial: 'B',
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167437/kindy_teacher-bourdon01.webp',
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
    name: 'Carolina',
    initial: 'C',
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167432/kindy_avta-CarolinaDeCastro.webp',
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
    name: 'Mary',
    initial: 'M',
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167434/kindy_Linzi-Mary-Dickson.webp',
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

const BG_IMAGE =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788167436/kindy_slide3.webp';

const CARD_WIDTH = 340;
const CARD_GAP = 24;

export default function Teachers() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0, active: false });

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max - 2);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction * (CARD_WIDTH + CARD_GAP),
      behavior: 'smooth',
    });
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const el = trackRef.current;
      if (!el) return;
      dragState.current = {
        startX: e.clientX,
        scrollLeft: el.scrollLeft,
        active: true,
      };
      setDragging(true);
    },
    [],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const el = trackRef.current;
      if (!el || !dragState.current.active) return;
      const delta = e.clientX - dragState.current.startX;
      el.scrollLeft = dragState.current.scrollLeft - delta;
    },
    [],
  );

  const onPointerUp = useCallback(() => {
    if (!dragState.current.active) return;
    dragState.current.active = false;
    setDragging(false);
  }, []);

  return (
    <section
      id="doi-ngu"
      className="relative scroll-mt-24 overflow-hidden bg-blush-300 py-20 lg:py-28"
    >
      {/* Hide native scrollbar cross-browser */}
      <style>{`
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Editorial background image — soft, dimmed with cream overlay */}
      <div aria-hidden className="absolute inset-0">
        <img
          src={cloudinary(BG_IMAGE, 1280, 800)}
          alt=""
          className="h-full w-full object-cover opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blush-300/90 via-blush-300/70 to-blush-300/90" />
      </div>

      <div className="container-page relative">
        {/* Section header */}
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-200/70 px-4 py-1.5 font-body text-sm font-semibold text-sky-700">
              <Sparkles className="h-4 w-4" strokeWidth={2.25} />
              Con người làm nên sự khác biệt
            </span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Đội ngũ{' '}
              <span className="relative whitespace-nowrap text-sky-600">
                đồng hành cùng con
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
            Giáo viên bản ngữ và Việt Nam giàu kinh nghiệm, được đào tạo bài
            bản và luôn đồng hành cùng từng giai đoạn phát triển của con.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-14">
          {/* Edge fade gradients — desktop only */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-16 bg-gradient-to-r from-blush-300 via-blush-300/80 to-transparent lg:block"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-16 bg-gradient-to-l from-blush-300 via-blush-300/80 to-transparent lg:block"
          />

          {/* Arrow buttons — desktop, vertically centered on the edges */}
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            aria-label="Giáo viên trước"
            className={[
              'absolute left-2 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-blush-300 shadow-card ring-1 ring-ink-300/20 transition-all duration-300 ease-smooth hover:shadow-lift lg:flex',
              atStart ? 'pointer-events-none opacity-30' : 'opacity-100',
            ].join(' ')}
          >
            <ChevronLeft className="h-6 w-6 text-ink-900" strokeWidth={2.25} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            aria-label="Giáo viên tiếp theo"
            className={[
              'absolute right-2 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-blush-300 shadow-card ring-1 ring-ink-300/20 transition-all duration-300 ease-smooth hover:shadow-lift lg:flex',
              atEnd ? 'pointer-events-none opacity-30' : 'opacity-100',
            ].join(' ')}
          >
            <ChevronRight className="h-6 w-6 text-ink-900" strokeWidth={2.25} />
          </button>

          {/* Scroll track */}
          <div
            ref={trackRef}
            className={[
              'no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6',
              dragging ? 'cursor-grabbing' : 'cursor-grab',
            ].join(' ')}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
          >
            {teachers.map((t, i) => (
              <TeacherCard key={t.name} teacher={t} index={i} />
            ))}
          </div>

          {/* Mobile arrow pair */}
          <div className="mt-6 flex justify-center gap-4 lg:hidden">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label="Giáo viên trước"
              className={[
                'flex h-[52px] w-[52px] items-center justify-center rounded-full bg-blush-300 shadow-card ring-1 ring-ink-300/20 transition-all duration-300 ease-smooth',
                atStart ? 'pointer-events-none opacity-30' : 'opacity-100',
              ].join(' ')}
            >
              <ChevronLeft className="h-6 w-6 text-ink-900" strokeWidth={2.25} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label="Giáo viên tiếp theo"
              className={[
                'flex h-[52px] w-[52px] items-center justify-center rounded-full bg-blush-300 shadow-card ring-1 ring-ink-300/20 transition-all duration-300 ease-smooth',
                atEnd ? 'pointer-events-none opacity-30' : 'opacity-100',
              ].join(' ')}
            >
              <ChevronRight className="h-6 w-6 text-ink-900" strokeWidth={2.25} />
            </button>
          </div>
        </div>

        {/* CTA — ghost-style link */}
        <div className="mt-14 flex justify-center">
          <Link
            to="/doi-ngu"
            className="group inline-flex items-center gap-2 font-body text-base font-bold text-ink-800 underline decoration-blush-400 decoration-2 underline-offset-4 transition-colors duration-200 hover:text-sky-700"
          >
            Xem toàn bộ đội ngũ
            <ArrowRight
              className="h-5 w-5 transition-transform duration-300 ease-smooth group-hover:translate-x-1"
              strokeWidth={2.25}
            />
          </Link>
        </div>
      </div>

      {/* Soft wave divider into Results */}
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

function TeacherCard({ teacher }: { teacher: Teacher; index: number }) {
  return (
    <article
      className={[
        'group relative w-[85vw] max-w-[360px] shrink-0 snap-center p-6 shadow-soft ring-1 ring-ink-300/20 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card lg:w-[340px] lg:max-w-none',
        'bg-cream-50',
        teacher.tilt,
      ].join(' ')}
      style={{ borderRadius: teacher.cardShape }}
    >
      {/* Photo + monogram badge composition */}
      <div className="relative">
        <div
          className="relative aspect-[4/3] w-full overflow-hidden shadow-card ring-1 ring-ink-900/5"
          style={{ borderRadius: teacher.photoShape }}
        >
          <img
            src={cloudinary(teacher.photo, 340, 255)}
            alt={`Hoạt động giảng dạy — ${teacher.prefix} ${teacher.name}`}
            className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/15 via-transparent to-transparent" />
        </div>

        {/* Monogram badge — overlapping bottom-left corner */}
        <div
          className={[
            'absolute -bottom-3 -left-2 flex h-16 w-16 items-center justify-center shadow-card ring-4 ring-cream-50',
            teacher.avatarClass,
          ].join(' ')}
          style={{ borderRadius: teacher.avatarShape }}
        >
          <span className="font-heading text-2xl font-extrabold tracking-tight">
            {teacher.initial}
          </span>
        </div>

        {/* Nationality tag */}
        <span
          className={[
            'absolute right-2 top-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-body text-xs font-semibold shadow-soft backdrop-blur-sm',
            teacher.isNative
              ? 'bg-sky-200/90 text-sky-700'
              : 'bg-blush-200/90 text-blush-600',
          ].join(' ')}
        >
          {teacher.isNative && (
            <Globe className="h-3 w-3" strokeWidth={2.25} />
          )}
          {teacher.tag}
        </span>
      </div>

      <h3 className="mt-6 font-heading text-xl font-extrabold leading-tight text-ink-900">
        {teacher.prefix} {teacher.name}
      </h3>

      {teacher.credential && (
        <p className="mt-2 font-body text-sm font-semibold leading-relaxed text-ink-700">
          {teacher.credential}
        </p>
      )}

      <p className="mt-2 font-body text-sm leading-relaxed text-ink-600">
        {teacher.experience}
      </p>
    </article>
  );
}
