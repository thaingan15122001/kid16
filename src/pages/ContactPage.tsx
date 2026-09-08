import PageBanner from '@/components/shared/PageBanner';
import ContactDetails from '@/components/contact/ContactDetails';
import FinalCTA from '@/components/home/FinalCTA';
import Seo from '@/components/shared/Seo';

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Liên hệ ILE — Địa chỉ & bản đồ trung tâm Phước Vĩnh An, Củ Chi"
        description="Liên hệ trung tâm Ngoại Ngữ ILE Phước Vĩnh An — 121/4 Trần Văn Chẩm, Củ Chi, TP.HCM. Gọi 0123 456 789 hoặc xem chỉ đường trên bản đồ."
        image="https://res.cloudinary.com/wsaz946u/image/upload/v1788841059/hoat-dong_3.jpg"
      />
      <PageBanner
        badge="Ghé thăm ILE"
        title="Liên hệ"
        subtitle="Đội ngũ ILE luôn sẵn sàng chào đón phụ huynh và các con."
        image="https://res.cloudinary.com/wsaz946u/image/upload/v1788841059/hoat-dong_3.jpg"
        imageAlt="Học viên và giáo viên ILE"
        fullBleed={true}
      />
      <ContactDetails />
      <FinalCTA ctaText="LIÊN HỆ NGAY" />
    </>
  );
}
