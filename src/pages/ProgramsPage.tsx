import PageBanner from '@/components/shared/PageBanner';
import Seo from '@/components/shared/Seo';

export default function ProgramsPage() {
  return (
    <>
      <Seo
        title="Chương trình học ILE — Tiếng Anh cho trẻ 3-15 tuổi"
        description="Khám phá chương trình học tiếng Anh tại ILE: Mầm non (3-5 tuổi), Thiếu nhi (6-10 tuổi) và Thiếu niên (11-15 tuổi) — ba thế giới, một hành trình."
      />
      <PageBanner
        badge="Lộ trình học tập"
        title="Chương trình học"
        subtitle="Ba thế giới, một hành trình — mỗi độ tuổi là một cánh cửa mới."
      />
      <div className="container-page py-20">
        <p className="font-body text-ink-600">
          Nội dung trang Chương trình học sẽ được xây dựng ở giai đoạn tiếp
          theo.
        </p>
      </div>
    </>
  );
}
