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

export default function HomePage() {
  return (
    <>
      <Seo
        title="ILE — Trung tâm Tiếng Anh cho trẻ em từ 3 đến 15 tuổi"
        description="ILE là trung tâm Tiếng Anh dành cho trẻ em từ 3 đến 15 tuổi, nơi con học tiếng Anh qua trò chơi, câu chuyện và trải nghiệm thực tại Việt Nam."
        image="https://res.cloudinary.com/wsaz946u/image/upload/v1788166775/HeroBanner-1.jpg"
      />
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
