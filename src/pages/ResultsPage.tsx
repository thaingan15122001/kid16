import PageBanner from '@/components/shared/PageBanner';
import ResultsGallery from '@/components/results/ResultsGallery';
import FinalCTA from '@/components/home/FinalCTA';
import Seo from '@/components/shared/Seo';

export default function ResultsPage() {
  return (
    <>
      <Seo
        title="Kết quả học viên ILE — IELTS, SAT & thành tích học tập"
        description="Xem bảng vàng thành tích của học viên ILE — điểm IELTS, SAT và kết quả học tập xuất sắc từ những bước đầu bỡ ngỡ đến những cột mốc đáng tự hào."
        image="https://res.cloudinary.com/wsaz946u/image/upload/v1788167437/kindy_teacher_kids.webp"
      />
      <PageBanner
        badge="Bảng vàng thành tích"
        title="Kết quả nói lên tất cả"
        subtitle="Từ những bước đầu bỡ ngỡ đến những cột mốc đáng tự hào - đây là hành trình chinh phục tiếng Anh của học viên ILE."
        image="https://res.cloudinary.com/wsaz946u/image/upload/v1788167437/kindy_teacher_kids.webp"
        imageAlt="Học viên ILE tự hào với thành tích của mình"
        fullBleed={true}
      />
      <ResultsGallery />
      <FinalCTA />
    </>
  );
}
