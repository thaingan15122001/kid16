import PageBanner from '@/components/shared/PageBanner';
import TeacherGallery from '@/components/teachers/TeacherGallery';
import FinalCTA from '@/components/home/FinalCTA';
import Seo from '@/components/shared/Seo';

const BANNER_PHOTO =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788841059/hoat-dong_2.jpg';

export default function TeachersPage() {
  return (
    <>
      <Seo
        title="Đội ngũ giáo viên ILE — Bản ngữ & Việt Nam giàu kinh nghiệm"
        description="Gặp gỡ đội ngũ giáo viên ILE — giáo viên bản ngữ và Việt Nam giàu kinh nghiệm, được đào tạo bài bản và luôn đồng hành cùng từng giai đoạn phát triển của con."
        image={BANNER_PHOTO}
      />
      <PageBanner
        badge="Con người ILE"
        title="Đội ngũ giáo viên"
        subtitle="Giáo viên bản ngữ và Việt Nam giàu kinh nghiệm, luôn đồng hành cùng từng giai đoạn phát triển của con."
        image={BANNER_PHOTO}
        imageAlt="Giáo viên tại ILE"
        fullBleed={true}
      />
      <TeacherGallery />
      <FinalCTA />
    </>
  );
}
