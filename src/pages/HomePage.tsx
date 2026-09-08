import Hero from '@/components/home/Hero';
import WhyILE from '@/components/home/WhyILE';
import Programs from '@/components/home/Programs';
import LearningJourney from '@/components/home/LearningJourney';
import Teachers from '@/components/home/Teachers';
import Results from '@/components/home/Results';
import Activities from '@/components/home/Activities';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import Contact from '@/components/home/Contact';
import FinalCTA from '@/components/home/FinalCTA';
import Seo from '@/components/shared/Seo';
import { Helmet } from 'react-helmet-async';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Trung tâm Ngoại Ngữ ILE Phước Vĩnh An',
  description:
    'Trung tâm Tiếng Anh dành cho trẻ em từ 3 đến 15 tuổi, nơi con học tiếng Anh qua trò chơi, câu chuyện và trải nghiệm thực tại Việt Nam.',
  url: '/',
  telephone: '+84123456789',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '121/4 Trần Văn Chẩm, Ấp 3, Xã Phước Vĩnh An',
    addressLocality: 'Huyện Củ Chi, TP.HCM',
    addressCountry: 'VN',
  },
};

export default function HomePage() {
  return (
    <>
      <Seo
        title="ILE — Trung tâm Tiếng Anh cho trẻ em từ 3 đến 15 tuổi"
        description="ILE là trung tâm Tiếng Anh dành cho trẻ em từ 3 đến 15 tuổi, nơi con học tiếng Anh qua trò chơi, câu chuyện và trải nghiệm thực tại Việt Nam."
        image="https://res.cloudinary.com/wsaz946u/image/upload/v1788166775/HeroBanner-1.jpg"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      <Hero />
      <WhyILE />
      <Programs />
      <LearningJourney />
      <Teachers />
      <Results />
      <Activities />
      <Testimonials />
      <FAQ />
      <Contact />
      <FinalCTA />
    </>
  );
}
