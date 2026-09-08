import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { cloudinary, cloudinaryFit } from '@/lib/cloudinary';

type TabKey = 'ielts' | 'sat' | 'thcs';

interface ResultEntry {
  name: string;
  school: string;
  score: string;
  scoreLabel: string;
}

const photos: string[] = [
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788167404/kindy_nguyenquangkhai.webp',
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788167404/kindy_little-girls-section-sun-little-kids.webp',
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788167403/kindy_machtieubang.webp',
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788167402/kindy_letieucat.webp',
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788167401/kindy_lekimphandang.webp',
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788167400/kindy_langoctuenhi.webp',
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788167400/kindy_hotantinhanh.webp',
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788167397/kindy_vudanhthanh.webp',
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788167396/kindy_tranbaokhang.webp',
];

const tabData: Record<TabKey, ResultEntry[]> = {
  ielts: [
    { name: 'Nguyễn Gia Bảo', school: 'THCS Nguyễn Du', score: '8.5', scoreLabel: 'IELTS' },
    { name: 'Trần Thảo Vy', school: 'THPT Chuyên Lê Hồng Phong', score: '8.5', scoreLabel: 'IELTS' },
    { name: 'Lê Minh Khang', school: 'THCS Colette', score: '8.0', scoreLabel: 'IELTS' },
    { name: 'Phạm Anh Thư', school: 'THPT Chuyên Trần Đại Nghĩa', score: '8.0', scoreLabel: 'IELTS' },
    { name: 'Đỗ Bảo Ngọc', school: 'THCS Hồng Bàng', score: '7.5', scoreLabel: 'IELTS' },
    { name: 'Vũ Gia Hân', school: 'Trường Quốc tế Á Châu', score: '7.5', scoreLabel: 'IELTS' },
    { name: 'Hoàng Đức Anh', school: 'THCS Nguyễn Gia Thiều', score: '7.5', scoreLabel: 'IELTS' },
    { name: 'Ngô Khánh Linh', school: 'THPT Gia Định', score: '7.0', scoreLabel: 'IELTS' },
    { name: 'Bùi Nhật Nam', school: 'THCS Bình Thọ', score: '7.0', scoreLabel: 'IELTS' },
  ],
  sat: [
    { name: 'Trịnh Minh Quân', school: 'THPT Chuyên Lê Quý Đôn', score: '1580', scoreLabel: 'SAT' },
    { name: 'Lý Bảo Trâm', school: 'THPT Năng Khiếu', score: '1570', scoreLabel: 'SAT' },
    { name: 'Nguyễn Thành Đạt', school: 'THPT Nguyễn Thị Minh Khai', score: '1560', scoreLabel: 'SAT' },
    { name: 'Cao Ngọc Hà', school: 'Vinschool', score: '1560', scoreLabel: 'SAT' },
    { name: 'Phan Đức Huy', school: 'THPT Gia Định', score: '1550', scoreLabel: 'SAT' },
    { name: 'Tô Bảo Châu', school: 'THPT Chuyên Hùng Vương', score: '1550', scoreLabel: 'SAT' },
    { name: 'Đặng Gia Khiêm', school: 'THPT Năng Khiếu', score: '1540', scoreLabel: 'SAT' },
    { name: 'Lâm Thanh Trúc', school: 'THPT Nguyễn Du', score: '1530', scoreLabel: 'SAT' },
    { name: 'Vương Hoài An', school: 'Trường Quốc tế TP.HCM', score: '1520', scoreLabel: 'SAT' },
  ],
  thcs: [
    { name: 'Đinh Bảo Nam', school: 'Lớp 9 · THCS Colette', score: '8.5', scoreLabel: 'LỚP 9' },
    { name: 'Nguyễn Hạ Vy', school: 'Lớp 8 · THCS Hồng Bàng', score: '8.0', scoreLabel: 'LỚP 8' },
    { name: 'Trương Anh Khoa', school: 'Lớp 9 · THCS Nguyễn Du', score: '8.0', scoreLabel: 'LỚP 9' },
    { name: 'Lê Bảo Trân', school: 'Lớp 7 · THCS Nguyễn Gia Thiều', score: '7.5', scoreLabel: 'LỚP 7' },
    { name: 'Phạm Gia Huy', school: 'Lớp 8 · THCS Bình Thọ', score: '7.5', scoreLabel: 'LỚP 8' },
    { name: 'Hồ Ngọc Diệp', school: 'Lớp 6 · THCS Colette', score: '7.0', scoreLabel: 'LỚP 6' },
    { name: 'Vũ Đình Khang', school: 'Lớp 9 · THCS Hồng Bàng', score: '7.0', scoreLabel: 'LỚP 9' },
    { name: 'Nguyễn Thảo My', school: 'Lớp 7 · Trường Sedbergh Vietnam', score: '7.0', scoreLabel: 'LỚP 7' },
    { name: 'Đặng Minh Tuấn', school: 'Lớp 8 · THCS Nguyễn Du', score: '6.5', scoreLabel: 'LỚP 8' },
  ],
};

const tabs: { key: TabKey; label: string }[] = [
  { key: 'ielts', label: 'IELTS' },
  { key: 'sat', label: 'SAT' },
  { key: 'thcs', label: 'THCS' },
];

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
];

const cardShapes = [
  '20px 20px 20px 48px',
  '20px 48px 20px 20px',
  '20px 20px 48px 20px',
  '48px 20px 20px 20px',
  '20px 20px 20px 48px',
  '20px 48px 20px 20px',
  '20px 20px 48px 20px',
  '48px 20px 20px 20px',
  '20px 20px 20px 48px',
];

const photoShapes = [
  '52% 48% 56% 44% / 48% 54% 46% 52%',
  '46% 54% 44% 56% / 54% 46% 54% 46%',
  '58% 42% 45% 55% / 48% 55% 45% 52%',
  '42% 58% 52% 48% / 58% 42% 58% 42%',
  '48% 52% 56% 44% / 44% 56% 44% 56%',
  '55% 45% 40% 60% / 60% 48% 52% 40%',
  '52% 48% 44% 56% / 48% 52% 48% 52%',
  '44% 56% 52% 48% / 56% 44% 56% 44%',
  '50% 50% 48% 52% / 52% 48% 52% 48%',
];

const BG_IMAGE =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788166532/kindy_bg_trust.webp';
const LEON =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788166533/yeya-leon.png';

export default function ResultsGallery() {
  const [activeTab, setActiveTab] = useState<TabKey>('ielts');
  const entries = tabData[activeTab];

  return (
    <section className="relative overflow-hidden bg-cream-100 py-20 lg:py-28">
      {/* Background texture */}
      <div aria-hidden className="absolute inset-0">
        <img
          src={cloudinaryFit(BG_IMAGE, 1280)}
          alt=""
          className="h-full w-full object-cover opacity-[0.10]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100/90 via-cream-100/80 to-cream-100/90" />
      </div>

      {/* Leon character accent near header */}
      <img
        src={cloudinaryFit(LEON, 80)}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-6 top-8 hidden h-20 w-20 drop-shadow-[0_8px_16px_rgba(31,42,55,0.12)] lg:block"
      />

      <div className="container-page relative">
        {/* Section header */}
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-200/70 px-4 py-1.5 font-body text-sm font-semibold text-sky-700">
              <Sparkles className="h-4 w-4" strokeWidth={2.25} />
              Học viên nói gì qua con số
            </span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              <span className="relative whitespace-nowrap text-sky-600">
                Bảng vàng
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
              </span>{' '}
              của học viên ILE
            </h2>
          </div>
          <p className="max-w-sm font-body text-base leading-relaxed text-ink-600 lg:text-right">
            Điểm số là kết quả của một hành trình bền bỉ - mỗi con số dưới đây
            là một câu chuyện cố gắng.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full bg-cream-50 p-1.5 shadow-soft ring-1 ring-ink-300/20">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={[
                  'rounded-full px-6 py-2.5 font-body text-sm font-bold transition-all duration-300 ease-smooth',
                  activeTab === tab.key
                    ? 'bg-ink-900 text-cream-100 shadow-card'
                    : 'text-ink-600 hover:text-ink-900',
                ].join(' ')}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Card grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {entries.map((entry, i) => (
            <ResultCard
              key={`${activeTab}-${i}`}
              entry={entry}
              photo={photos[i % photos.length]}
              tilt={cardTilts[i % cardTilts.length]}
              cardShape={cardShapes[i % cardShapes.length]}
              photoShape={photoShapes[i % photoShapes.length]}
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

function ResultCard({
  entry,
  photo,
  tilt,
  cardShape,
  photoShape,
}: {
  entry: ResultEntry;
  photo: string;
  tilt: string;
  cardShape: string;
  photoShape: string;
}) {
  return (
    <article
      className={[
        'group relative bg-cream-50 p-5 shadow-soft ring-1 ring-ink-300/20 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:rotate-0 hover:shadow-card',
        tilt,
      ].join(' ')}
      style={{ borderRadius: cardShape }}
    >
      {/* Photo */}
      <div className="relative">
        <div
          className="relative aspect-[4/5] w-full overflow-hidden shadow-card ring-1 ring-ink-900/5"
          style={{ borderRadius: photoShape }}
        >
          <img
            src={cloudinary(photo, 400, 500)}
            alt={`Học viên ${entry.name}`}
            className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/15 via-transparent to-transparent" />
        </div>

        {/* Score ribbon badge */}
        <div
          className="absolute -right-3 -top-3 flex flex-col items-center bg-blush-500 px-3 py-2 shadow-card rotate-[6deg]"
          style={{ borderRadius: '44% 56% 48% 52% / 58% 42% 58% 42%' }}
        >
          <span className="font-heading text-lg font-extrabold leading-none text-cream-50">
            {entry.score}
          </span>
          <span className="mt-0.5 font-body text-[10px] font-bold uppercase leading-none text-cream-50">
            {entry.scoreLabel}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="px-1 pt-5">
        <h3 className="font-heading text-base font-bold leading-tight text-ink-900">
          {entry.name}
        </h3>
        <p className="mt-1 font-body text-sm leading-relaxed text-ink-600">
          {entry.school}
        </p>
      </div>
    </article>
  );
}
