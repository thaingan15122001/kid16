import PageBanner from '@/components/shared/PageBanner';
import CourseOverview from '@/components/programs/superkids/CourseOverview';
import LearningOutcomes from '@/components/programs/superkids/LearningOutcomes';
import TeachingMethod from '@/components/programs/superkids/TeachingMethod';
import LearningRoadmap from '@/components/programs/superkids/LearningRoadmap';
import MidPageCTA from '@/components/programs/superkids/MidPageCTA';
import SuperkidsTestimonials from '@/components/programs/superkids/SuperkidsTestimonials';
import TeacherPreview from '@/components/programs/superkids/TeacherPreview';
import LearningSpace from '@/components/programs/superkids/LearningSpace';
import FinalCTA from '@/components/home/FinalCTA';
import Seo from '@/components/shared/Seo';

export default function SuperkidsProgramPage() {
  return (
    <>
      <Seo
        title="Tiếng Anh Thiếu nhi (6-10 tuổi) | ILE — Giao tiếp tự tin"
        description="Chương trình Tiếng Anh Thiếu nhi tại ILE dành cho trẻ 6-10 tuổi — con phát triển đều bốn kỹ năng nghe, nói, đọc, viết và luyện giao tiếp tự tin trong tình huống thực tế."
        image="https://res.cloudinary.com/wsaz946u/image/upload/v1788167370/cap-bac-pho-thong-feature-img-768x512.jpg"
      />
      <PageBanner
        badge="6-10 tuổi"
        title="Tiếng Anh Thiếu nhi"
        subtitle="Xây nền tảng giao tiếp - Nghe, nói, đọc, viết vững chắc mỗi ngày."
        // TODO: replace with real superkids banner photo
        image="https://res.cloudinary.com/wsaz946u/image/upload/v1788167370/cap-bac-pho-thong-feature-img-768x512.jpg"
        imageAlt="Học sinh 6-10 tuổi học tiếng Anh tại ILE"
        fullBleed={true}
      />
      <CourseOverview />
      <LearningOutcomes />
      <TeachingMethod />
      <LearningRoadmap />
      <MidPageCTA />
      <SuperkidsTestimonials />
      <TeacherPreview />
      <LearningSpace />
      <FinalCTA />
    </>
  );
}
