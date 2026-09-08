import PageBanner from '@/components/shared/PageBanner';
import ActivitiesShowcase from '@/components/activities/ActivitiesShowcase';
import FinalCTA from '@/components/home/FinalCTA';
import Seo from '@/components/shared/Seo';

export default function ActivitiesPage() {
  return (
    <>
      <Seo
        title="Hoạt động thường ngày tại ILE — Học tiếng Anh qua trải nghiệm"
        description="Khám phá các hoạt động thường ngày tại ILE — giờ kể chuyện, trò chơi vận động và góc âm nhạc giúp con học tiếng Anh qua trải nghiệm, vui chơi và thể hiện chính mình."
        image="https://res.cloudinary.com/wsaz946u/image/upload/v1788841059/hoat-dong_1.jpg"
      />
      <PageBanner
        badge="Mỗi ngày tại ILE"
        title="Hoạt động thường ngày"
        subtitle="Không chỉ học tiếng Anh - con được trải nghiệm, vui chơi và thể hiện chính mình qua từng hoạt động mỗi ngày."
        image="https://res.cloudinary.com/wsaz946u/image/upload/v1788841059/hoat-dong_1.jpg"
        imageAlt="Học viên ILE vui chơi cùng giáo viên"
        fullBleed={true}
      />
      <ActivitiesShowcase />
      <FinalCTA />
    </>
  );
}
