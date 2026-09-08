import PageBanner from '@/components/shared/PageBanner';
import VisionSection from '@/components/about/VisionSection';
import MissionSection from '@/components/about/MissionSection';
import FinalCTA from '@/components/home/FinalCTA';
import Seo from '@/components/shared/Seo';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="Giới thiệu ILE — Tầm nhìn & Sứ mệnh | Trung tâm Tiếng Anh trẻ em"
        description="Tìm hiểu về ILE — trung tâm Tiếng Anh cho trẻ 3-15 tuổi với tầm nhìn mở rộng cơ hội học tiếng Anh chất lượng và sứ mệnh giảng dạy bằng trái tim."
        image="https://res.cloudinary.com/wsaz946u/image/upload/v1788167435/kindy_slide2.webp"
      />
      <PageBanner
        badge="Về chúng tôi"
        title="Giới thiệu ILE"
        subtitle="Hành trình kiên định với sứ mệnh mang tiếng Anh đến gần hơn với trẻ em Việt Nam."
        image="https://res.cloudinary.com/wsaz946u/image/upload/v1788167435/kindy_slide2.webp"
        imageAlt="Học viên ILE"
        fullBleed={true}
      />
      <VisionSection />
      <MissionSection />
      <FinalCTA />
    </>
  );
}
