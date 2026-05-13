import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { services } from '@/lib/constants';
import { WHATSAPP_TEMPLATES } from '@/lib/whatsapp';
import { notFound } from 'next/navigation';

interface ServicePageProps {
  params: Promise<{
    service: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { service: serviceSlug } = await params;
  const service = services.find((s) => s.slug === serviceSlug);
  if (!service) return {};

  return {
    title: `${service.titleAr} - مِراس للتسويق الرقمي`,
    description: service.descriptionAr,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service: serviceSlug } = await params;
  const service = services.find((s) => s.slug === serviceSlug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((s) => s.id !== service.id).slice(0, 3);
  const ctaMessage = WHATSAPP_TEMPLATES.serviceInquiry(service.titleAr);

  return (
    <div className="w-full">
      <Header lang="ar" />

      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12 animate-fade-in">
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
              {service.titleAr}
            </h1>
            <p className="text-xl text-muted mb-8 leading-relaxed">
              {service.descriptionAr}
            </p>

            <WhatsAppButton
              message={ctaMessage}
              text={`استفسر عن ${service.titleAr}`}
              variant="primary"
              size="lg"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-dark mb-12">ما نقدمه لك؟</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="text-3xl text-[#00CC88] flex-shrink-0">✓</div>
                <div>
                  <h3 className="text-xl font-semibold text-dark">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-light py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-dark mb-6">النتيجة المتوقعة</h2>
          <p className="text-lg text-muted mb-12">
            عندما تختار خدمات مِراس، تختار الخبرة والالتزام بتحقيق نتائج ملموسة
          </p>
          <WhatsAppButton
            message={ctaMessage}
            text="اعرف كيف يمكننا مساعدتك"
            variant="secondary"
            size="lg"
          />
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="w-full bg-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-dark mb-12 text-center">
              خدمات أخرى قد تهمك
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => (
                <a
                  key={relatedService.id}
                  href={`/services/${relatedService.slug}`}
                  className="bg-light rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {relatedService.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-[#0066CC]">
                    {relatedService.titleAr}
                  </h3>
                  <p className="text-muted">{relatedService.descriptionAr}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
