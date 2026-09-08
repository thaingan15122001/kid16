import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { trialLink } from '@/lib/navigation';
import { cloudinary } from '@/lib/cloudinary';

interface Program {
  age: string;
  to: string;
  title: string;
  tagline: string;
  body: string;
  image: string;
  character: string;
  panelClass: string;
  badgeClass: string;
  shape: string;
  tilt: string;
}

const programs: Program[] = [
  {
    age: '3-5',
    to: '/chuong-trinh-hoc/tieng-anh-mam-non-3-5-tuoi',
    title: 'Tiếng Anh Mầm non',
    tagline: 'Học qua vui chơi - khơi dậy niềm yêu thích tiếng Anh từ sớm.',
    body: 'Bé làm quen với tiếng Anh qua kể chuyện, vận động, âm nhạc và trò chơi, phát triển khả năng nghe - nói tự nhiên và xây dựng phản xạ ngôn ngữ đầu tiên trong một môi trường an toàn, đầy cảm hứng.',
    image:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167403/kindy_machtieubang.webp',
    character:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788166534/kindy_apo_2.webp',
    panelClass: 'bg-sky-100/80',
    badgeClass: 'bg-sky-300 text-ink-900',
    shape: '62% 38% 45% 55% / 7% 8% 6% 7%',
    tilt: 'rotate-[-1.5deg]',
  },
  {
    age: '6-10',
    to: '/chuong-trinh-hoc/tieng-anh-tieu-hoc-6-10-tuoi',
    title: 'Tiếng Anh Thiếu nhi',
    tagline: 'Giao tiếp vui vẻ - xây nền tảng ngôn ngữ vững chắc.',
    body: 'Bé mở rộng vốn từ vựng, nắm cấu trúc ngữ pháp và rèn giao tiếp thực tế qua các hoạt động tương tác. Cả 4 kỹ năng nghe - nói - đọc - viết được phát triển song song, đồng bộ với chương trình học ở trường.',
    image:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167401/kindy_lekimphandang.webp',
    character:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788166534/kindy_apo_1.webp',
    panelClass: 'bg-cream-50',
    badgeClass: 'bg-cream-300 text-ink-900',
    shape: '42% 58% 52% 48% / 8% 6% 8% 6%',
    tilt: 'rotate-[1deg]',
  },
  {
    age: '11-15',
    to: '/chuong-trinh-hoc/tieng-anh-thieu-nien-11-15-tuoi',
    title: 'Tiếng Anh Thiếu niên',
    tagline: 'Tăng tốc tiếng Anh - chuẩn bị hành trang cho những bước nhảy vọt.',
    body: 'Học sinh nâng cao năng lực ngôn ngữ học thuật và tư duy phản biện qua luyện viết luận, đọc hiểu chuyên sâu và thuyết trình, sẵn sàng cho các kỳ thi và môi trường học tập quốc tế.',
    image:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167374/hs-nguyen-lam-ngoc-767x1536.png',
    character:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788166533/elliot.svg',
    panelClass: 'bg-blush-100/80',
    badgeClass: 'bg-blush-300 text-ink-900',
    shape: '55% 45% 40% 60% / 6% 8% 7% 6%',
    tilt: 'rotate-[-1deg]',
  },
];

export default function Programs() {
  return (
    <section id="ba-the-gioi-mot-hanh-trinh" className="relative scroll-mt-24 overflow-hidden bg-cream-100 py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-20 h-[320px] w-[320px] rounded-[46%_54%_58%_42%_/_54%_46%_54%_46%] bg-sky-200/30 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-24 h-[280px] w-[280px] rounded-[54%_46%_37%_63%_/_48%_55%_45%_52%] bg-blush-200/25 blur-2xl"
      />

      <div className="container-page relative">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-200/70 px-4 py-1.5 font-body text-sm font-semibold text-sky-700">
              <Sparkles className="h-4 w-4" strokeWidth={2.25} />
              Lộ trình phát triển cùng con
            </span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Ba thế giới,{' '}
              <span className="relative whitespace-nowrap text-sky-600">
                một hành trình
                <svg
                  aria-hidden
                  viewBox="0 0 210 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-blush-400"
                >
                  <path
                    d="M2 8 C 58 2, 150 2, 208 6"
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
            Mỗi độ tuổi là một cánh cửa mới. ILE đồng hành để con lớn lên tự
            tin, vui học và sẵn sàng bước ra thế giới.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:items-start lg:gap-6 xl:gap-8">
          {programs.map((program, index) => (
            <ProgramPanel key={program.age} program={program} index={index} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href={trialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent group"
          >
            Đăng ký học thử
            <ArrowRight
              className="h-5 w-5 transition-transform duration-300 ease-smooth group-hover:translate-x-1"
              strokeWidth={2.25}
            />
          </a>
        </div>
      </div>

      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 block h-12 w-full text-sky-200 sm:h-16"
      >
        <path
          d="M0 40 C 240 80, 480 0, 720 30 C 960 60, 1200 20, 1440 45 L 1440 80 L 0 80 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}

function ProgramPanel({ program, index }: { program: Program; index: number }) {
  return (
    <article
      className={`group relative overflow-hidden p-4 pb-7 shadow-soft ring-1 ring-ink-300/20 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-lift lg:p-5 lg:pb-8 ${program.panelClass} ${program.tilt} ${index === 1 ? 'lg:mt-12' : index === 2 ? 'lg:mt-6' : ''}`}
      style={{ borderRadius: program.shape }}
    >
      <div className="relative">
        <div
          className="relative aspect-[1.18/1] overflow-hidden shadow-card"
          style={{ borderRadius: '52% 48% 44% 56% / 45% 54% 46% 55%' }}
        >
          <img
  src={cloudinary(program.image, 360, 305)}
  alt={`${program.title} tại ILE`}
  className={`h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105 ${program.age === '11-15' ? 'object-top' : ''}`}
  loading="lazy"
/>
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/20 via-transparent to-transparent" />
        </div>

        <div
          className={`absolute -left-1 -top-4 flex h-24 w-28 -rotate-6 items-center justify-center shadow-card ${program.badgeClass}`}
          style={{ borderRadius: '44% 56% 48% 52% / 58% 42% 58% 42%' }}
        >
          <span className="font-heading text-3xl font-extrabold tracking-tight">
            {program.age}
          </span>
        </div>

        <img
          src={program.character.endsWith('.svg') ? program.character : cloudinary(program.character, 80, 80)}
          alt=""
          aria-hidden
          className="absolute -bottom-2 -right-4 h-20 w-20 object-contain drop-shadow-[0_8px_16px_rgba(31,42,55,0.14)] transition-transform duration-300 ease-smooth group-hover:rotate-6 group-hover:scale-105"
        />
      </div>

      <div className="px-2 pt-7 lg:px-3">
        <h3 className="font-heading text-xl font-extrabold leading-tight text-ink-900">
          {program.title}
        </h3>
        <p className="mt-3 font-body text-base font-bold leading-relaxed text-ink-700">
          {program.tagline}
        </p>
        <p className="mt-2 font-body text-sm leading-relaxed text-ink-600">
          {program.body}
        </p>
        <Link
          to={program.to}
          className="group/link mt-5 inline-flex items-center gap-2 font-body text-sm font-bold text-ink-900 transition-colors hover:text-sky-700"
        >
          Xem thêm
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 ease-smooth group-hover/link:translate-x-1"
            strokeWidth={2.25}
          />
        </Link>
      </div>
    </article>
  );
}
