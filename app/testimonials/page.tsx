import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import { testimonials } from '@/lib/constants';
import { WHATSAPP_TEMPLATES } from '@/lib/whatsapp';

export const metadata = {
  title: 'آراء عملائنا - مِراس للتسويق الرقمي',
  description: 'تعرف على تجارب عملائنا الناجحة معنا وكيف ساعدناهم على النمو',
};

export default function TestimonialsPage() {
  return (
    <div className="w-full">
      <Header lang="ar" />

      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-dark mb-8">
            آراء عملائنا
          </h1>
          <p className="text-xl text-muted">
            اكتشف قصص النجاح من العيادات والمراكز الطبية التي عملنا معها
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>

          <div className="bg-light rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-dark mb-6">
              هل تريد أن تصبح قصة النجاح التالية؟
            </h2>
            <p className="text-lg text-muted mb-8">
              تواصل معنا اليوم وابدأ رحلتك نحو نمو رقمي مستدام
            </p>
            <WhatsAppButton
              message={WHATSAPP_TEMPLATES.getStarted}
              text="ابدأ رحلتك معنا"
              variant="primary"
              size="lg"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
