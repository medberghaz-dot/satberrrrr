import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/lib/constants';
import { WHATSAPP_TEMPLATES } from '@/lib/whatsapp';

export const metadata = {
  title: 'خدماتنا - مِراس للتسويق الرقمي الطبي',
  description: 'اكتشف جميع خدمات مِراس المتخصصة في التسويق الرقمي للقطاع الطبي',
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      <Header lang="ar" />
      
      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
              خدماتنا المتكاملة
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-6">
              نقدم مجموعة شاملة من الخدمات المتخصصة في التسويق الرقمي للقطاع الطبي
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              كل مشروع ناجح يحتاج خطة تسويق مدروسة، ونحن نبني استراتيجية تحقق أهدافك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                ctaMessage={WHATSAPP_TEMPLATES.serviceInquiry(service.titleAr)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-light py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-dark mb-6">
            هل تريد خدمة مخصصة؟
          </h2>
          <p className="text-lg text-muted mb-8">
            تواصل معنا لمناقشة احتياجات عملك وتصميم خطة تسويق مناسبة لك
          </p>
          <a
            href="https://wa.me/966501234567?text=مرحباً، أود استشارة مخصصة"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#0066CC] text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 text-lg"
          >
            تواصل معنا عبر واتساب
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
