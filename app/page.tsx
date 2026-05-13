import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { services, testimonials, homePageContent } from '@/lib/constants';
import { WHATSAPP_TEMPLATES } from '@/lib/whatsapp';

export default function HomePage() {
  return (
    <div className="w-full">
      <Header lang="ar" />
      <Hero
        titleAr={homePageContent.heroTitleAr}
        titleEn={homePageContent.heroTitleEn}
        descriptionAr={homePageContent.heroDescriptionAr}
        descriptionEn={homePageContent.heroDescriptionEn}
        ctaMessage={WHATSAPP_TEMPLATES.consultation}
      />
      <Services services={services} />
      <Testimonials testimonials={testimonials} />
      <CTA />
      <Footer />
    </div>
  );
}
