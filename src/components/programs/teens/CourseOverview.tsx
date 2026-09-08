import { Sparkles, Star } from 'lucide-react';
import { cloudinary, cloudinaryFit } from '@/lib/cloudinary';

const PRIMARY_PHOTO =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788167373/hs-vo-tran-song-thu.png';
const SECONDARY_PHOTO =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788167396/kindy_testimonial_right.webp';
const BG_IMAGE =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788166535/kindy_bg_form_top.webp';
const ANIMAL =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788166533/yeya-tiger.svg';

const goals: string[] = [
  'Sử dụng tiếng Anh linh hoạt trong học tập và giao tiếp',
  'Phát triển kỹ năng phản biện, trình bày và tư duy độc lập',
  'Sẵn sàng luyện thi các chứng chỉ nếu cần',
];

export default function CourseOverview() {
  return (
    <section className="relative overflow-hidden bg-cream-100 py-20 lg:py-28">
      {/* Subtle background texture */}
      <div aria-hidden className="absolute inset-0">
        <img
          src={cloudinaryFit(BG_IMAGE, 1280)}
          alt=""
          className="h-full w-full object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100/90 via-cream-100/80 to-cream-100/90" />
      </div>

      {/* Animal accent */}
      <img
        src={ANIMAL}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-6 top-10 hidden h-16 w-16 rotate-[12deg] drop-shadow-[0_6px_12px_rgba(31,42,55,0.12)] lg:block"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Photo side */}
          <div className="relative order-1 lg:order-1">
            <div className="relative mx-auto w-full max-w-[440px]">
              <div
                className="relative aspect-[4/5] w-full overflow-hidden shadow-lift ring-1 ring-ink-900/10 rotate-[-2deg]"
                style={{
                  borderRadius: '52% 48% 56% 44% / 48% 54% 46% 52%',
                }}
              >
                <img
                  src={cloudinary(PRIMARY_PHOTO, 440, 550)}
                  alt="Học sinh 11-15 tuổi học tiếng Anh tại ILE"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/15 via-transparent to-transparent" />
              </div>

              {/* Overlapping mini polaroid */}
              <div className="absolute -bottom-6 -right-4 w-36 rotate-[3deg] lg:-right-8">
                <div className="bg-cream-50 p-2 shadow-card ring-1 ring-ink-900/5">
                  <div
                    className="overflow-hidden"
                    style={{
                      borderRadius: '46% 54% 60% 40% / 54% 44% 56% 46%',
                    }}
                  >
                    <img
                      src={cloudinary(SECONDARY_PHOTO, 144, 144)}
                      alt="Các bạn học sinh cùng nhau học tập"
                      className="aspect-square w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-2 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-200/70 px-4 py-1.5 font-body text-sm font-semibold text-sky-700">
              <Sparkles className="h-4 w-4" strokeWidth={2.25} />
              GIỚI THIỆU KHÓA HỌC
            </span>

            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl">
              Làm chủ ngôn ngữ, sẵn sàng vươn xa
            </h2>

            <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-ink-600 lg:text-lg">
              Đây là giai đoạn để con chuyển sang "học để làm chủ ngôn ngữ". Tại
              ILE, các lớp tiếng Anh cho thiếu niên giúp học sinh xây nền tảng
              học thuật vững vàng, rèn luyện khả năng viết luận, đọc hiểu chuyên
              sâu và giao tiếp logic - từ đó tạo bước đệm cho các kỳ thi tiếng
              Anh quốc tế trong tương lai.
            </p>

            <div className="mt-8">
              <h3 className="font-heading text-lg font-bold text-ink-900">
                Mục tiêu học tập
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {goals.map((goal) => (
                  <li
                    key={goal}
                    className="flex items-center gap-3 font-body text-base leading-relaxed text-ink-700"
                  >
                    <Star
                      className="h-5 w-5 shrink-0 fill-blush-300 text-blush-500"
                      strokeWidth={1.5}
                    />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider into LearningOutcomes */}
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
