import { type CSSProperties } from 'react';
import { Sparkles, Star, Quote } from 'lucide-react';
import { cloudinary, cloudinaryFit } from '@/lib/cloudinary';

interface Testimonial {
  name: string;
  context: string;
  quote: string;
  photo: string;
  panelClass: string;
  avatarShape: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Chị Thanh Thảo',
    context: 'PH bé học Thiếu niên (13 tuổi)',
    quote:
      'Con viết luận tiếng Anh tốt hơn rất nhiều, đang được thầy cô định hướng chuẩn bị cho kỳ thi IELTS sắp tới.',
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167369/bich-son.webp',
    panelClass: 'bg-sky-100/70',
    avatarShape: '52% 48% 56% 44% / 48% 54% 46% 52%',
  },
  {
    name: 'Anh Đức Anh',
    context: 'PH bé học Thiếu niên (14 tuổi)',
    quote:
      'Đồng hành với ILE mấy năm nay, mình thấy rõ sự tiến bộ của con qua từng giai đoạn — không chỉ tiếng Anh mà cả sự tự tin.',
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167368/mohamed.webp',
    panelClass: 'bg-blush-100/70',
    avatarShape: '46% 54% 44% 56% / 54% 46% 54% 46%',
  },
  {
    name: 'Chị Hương Lan',
    context: 'PH bé học Thiếu niên (12 tuổi)',
    quote:
      'Con không còn ngại nói tiếng Anh trước lớp, giờ còn tự tin tranh luận và bảo vệ ý kiến của mình bằng tiếng Anh.',
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167368/ngoc-minh.webp',
    panelClass: 'bg-sky-100/60',
    avatarShape: '58% 42% 45% 55% / 48% 55% 45% 52%',
  },
  {
    name: 'Anh Quốc Hoàng',
    context: 'PH bé học Thiếu niên (15 tuổi)',
    quote:
      'Thầy cô ở ILE rất hiểu lứa tuổi này, hướng dẫn con từng bước chứ không ép buộc. Con học mà vẫn giữ được tinh thần thoải mái.',
    photo:
      'https://res.cloudinary.com/wsaz946u/image/upload/v1788167368/mohamed.webp',
    panelClass: 'bg-cream-50',
    avatarShape: '42% 58% 52% 48% / 58% 42% 58% 42%',
  },
];

const blobShapes: CSSProperties[] = [
  { borderRadius: '62% 38% 41% 59% / 46% 44% 56% 54%' },
  { borderRadius: '55% 45% 40% 60% / 60% 48% 52% 40%' },
  { borderRadius: '38% 62% 55% 45% / 58% 40% 60% 42%' },
  { borderRadius: '48% 52% 63% 37% / 42% 58% 42% 58%' },
];

const BG_IMAGE =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788166535/kindy_bg_testimonial.webp';

export default function TeensTestimonials() {
  return (
    <section className="relative overflow-hidden bg-cream-100 py-20 lg:py-28">
      {/* Editorial background — soft, dimmed with cream overlay */}
      <div aria-hidden className="absolute inset-0">
        <img
          src={cloudinaryFit(BG_IMAGE, 1280)}
          alt=""
          className="h-full w-full object-cover opacity-[0.10]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100/90 via-cream-100/80 to-cream-100/90" />
      </div>

      {/* Soft decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-16 h-[300px] w-[300px] rounded-[54%_46%_37%_63%_/_48%_55%_45%_52%] bg-sky-200/25 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-20 h-[280px] w-[280px] rounded-[46%_54%_58%_42%_/_54%_46%_54%_46%] bg-blush-200/25 blur-2xl"
      />

      <div className="container-page relative">
        {/* Section header */}
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-blush-200/70 px-4 py-1.5 font-body text-sm font-semibold text-blush-600">
              <Sparkles className="h-4 w-4" strokeWidth={2.25} />
              PHỤ HUYNH NÓI GÌ
            </span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Câu chuyện từ những{' '}
              <span className="relative whitespace-nowrap text-sky-600">
                phụ huynh
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
            Những chia sẻ thật từ ba mẹ có con đang học Thiếu niên tại ILE.
          </p>
        </div>

        {/* Card grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.name}
              testimonial={t}
              shape={blobShapes[i]}
            />
          ))}
        </div>
      </div>

      {/* Wave divider into TeacherPreview */}
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

function TestimonialCard({
  testimonial,
  shape,
}: {
  testimonial: Testimonial;
  shape: CSSProperties;
}) {
  return (
    <article
      className={[
        'group relative p-6 shadow-soft ring-1 ring-ink-300/20 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:rotate-0 hover:shadow-lift',
        testimonial.panelClass,
      ].join(' ')}
      style={shape}
    >
      {/* Quote icon accent */}
      <Quote
        className="h-7 w-7 shrink-0 text-blush-400/60"
        strokeWidth={1.5}
      />

      {/* 5-star rating */}
      <div className="mt-3 flex items-center gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-yellow-400 text-yellow-400"
            strokeWidth={0}
          />
        ))}
      </div>

      {/* Quote text */}
      <p className="mt-3 font-body text-sm leading-relaxed text-ink-700 lg:text-base">
        "{testimonial.quote}"
      </p>

      {/* Parent info row: avatar + name/context */}
      <div className="mt-5 flex items-center gap-3">
        <div
          className="relative h-14 w-14 shrink-0 overflow-hidden shadow-card ring-1 ring-ink-900/5"
          style={{ borderRadius: testimonial.avatarShape }}
        >
          <img
            src={cloudinary(testimonial.photo, 56, 56)}
            alt={`Phụ huynh ${testimonial.name}`}
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-smooth group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="min-w-0">
          <p className="font-heading text-sm font-extrabold leading-tight text-ink-900">
            {testimonial.name}
          </p>
          <p className="mt-0.5 font-body text-xs font-semibold text-ink-600">
            {testimonial.context}
          </p>
        </div>
      </div>
    </article>
  );
}
