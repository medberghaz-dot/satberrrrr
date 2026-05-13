import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { WHATSAPP_TEMPLATES } from '@/lib/whatsapp';

export const metadata = {
  title: 'تواصل معنا - مِراس للتسويق الرقمي',
  description: 'تواصل مع فريق مِراس للتسويق الرقمي واحجز استشارة مجانية',
};

export default function ContactPage() {
  return (
    <div className="w-full">
      <Header lang="ar" />

      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-dark mb-8">
            تواصل معنا
          </h1>
          <p className="text-xl text-muted">
            نحن هنا للإجابة على جميع استفساراتك والمساعدة في تحقيق أهدافك التسويقية
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-dark mb-4 flex items-center gap-3">
                  <span className="text-3xl">📧</span>
                  البريد الإلكتروني
                </h3>
                <p className="text-lg text-muted">info@miras.com</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-dark mb-4 flex items-center gap-3">
                  <span className="text-3xl">📱</span>
                  الهاتف
                </h3>
                <p className="text-lg text-muted">+966 50 123 4567</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-dark mb-4 flex items-center gap-3">
                  <span className="text-3xl">📍</span>
                  الموقع
                </h3>
                <p className="text-lg text-muted">
                  المملكة العربية السعودية
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-dark mb-4 flex items-center gap-3">
                  <span className="text-3xl">🕐</span>
                  ساعات العمل
                </h3>
                <p className="text-lg text-muted">
                  الأحد - الخميس: 9:00 ص - 6:00 م
                  <br />
                  الجمعة والسبت: مغلق
                </p>
              </div>
            </div>

            <div className="bg-light rounded-lg p-8 space-y-6">
              <h3 className="text-2xl font-bold text-dark">استشارة مجانية</h3>
              <p className="text-muted leading-relaxed">
                احجز استشارة مجانية مع فريقنا عبر واتساب واعرف كيف يمكننا مساعدتك
              </p>

              <WhatsAppButton
                message={WHATSAPP_TEMPLATES.consultation}
                text="احجز استشارة عبر واتساب"
                variant="primary"
                size="lg"
                className="w-full text-center"
              />

              <div className="border-t border-gray-300 pt-6">
                <h4 className="font-bold text-dark mb-4">أو اختر من الخيارات:</h4>
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/966501234567?text=${encodeURIComponent('مرحباً، أود الاستفسار عن خدماتكم')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-4 bg-white border border-[#0066CC] text-[#0066CC] font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 text-center"
                  >
                    استفسار عام
                  </a>
                  <a
                    href={`https://wa.me/966501234567?text=${encodeURIComponent('مرحباً، أود معرفة خدماتكم وأسعاركم')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-4 bg-white border border-[#0066CC] text-[#0066CC] font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 text-center"
                  >
                    معلومات التسعير
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#0066CC] to-blue-700 rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              جاهز للبدء؟
            </h2>
            <p className="text-lg mb-8 opacity-90">
              لا تتردد، تواصل معنا اليوم واكتشف كيف يمكننا تحويل استراتيجيتك التسويقية
            </p>
            <WhatsAppButton
              message={WHATSAPP_TEMPLATES.getStarted}
              text="ابدأ الآن"
              variant="secondary"
              size="lg"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
