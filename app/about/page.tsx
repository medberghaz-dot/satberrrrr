import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { homePageContent } from '@/lib/constants';
import { WHATSAPP_TEMPLATES } from '@/lib/whatsapp';

export const metadata = {
  title: 'من نحن - مِراس للتسويق الرقمي',
  description: 'تعرف على مِراس وفريقها المتخصص في التسويق الرقمي للقطاع الطبي',
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <Header lang="ar" />

      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-dark mb-8">
            {homePageContent.aboutTitleAr}
          </h1>
          <p className="text-xl text-muted mb-12 leading-relaxed">
            {homePageContent.aboutDescriptionAr}
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-light rounded-lg p-12 mb-16">
            <h2 className="text-3xl font-bold text-dark mb-6">رؤيتنا</h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              {homePageContent.aboutBeliefsAr}
            </p>
          </div>

          <h2 className="text-4xl font-bold text-dark mb-12 text-center">
            ماذا نقدم؟
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-dark flex items-center gap-3">
                <span className="text-3xl text-[#00CC88]">✓</span>
                بناء الوعي بالعلامة التجارية الطبية
              </h3>
              <p className="text-muted leading-relaxed">
                نساعدك في بناء علامة تجارية قوية تميزك عن المنافسين وتكسب ثقة المرضى
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-dark flex items-center gap-3">
                <span className="text-3xl text-[#00CC88]">✓</span>
                إنشاء مجتمع رقمي
              </h3>
              <p className="text-muted leading-relaxed">
                نبني مجتمع متفاعل حول خدماتك الطبية من خلال محتوى جذاب واستراتيجية فعالة
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-dark flex items-center gap-3">
                <span className="text-3xl text-[#00CC88]">✓</span>
                تحقيق الانتشار الرقمي
              </h3>
              <p className="text-muted leading-relaxed">
                نضمن وصول خدماتك الطبية للجمهور المناسب عبر القنوات الرقمية المختلفة
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-dark flex items-center gap-3">
                <span className="text-3xl text-[#00CC88]">✓</span>
                قياس الأداء والتحسين
              </h3>
              <p className="text-muted leading-relaxed">
                نقدم تقارير مفصلة ونعمل بشكل مستمر على تحسين استراتيجيتك التسويقية
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-dark mb-8">
              هل أنت مستعد لبدء رحلتك مع مِراس؟
            </h3>
            <WhatsAppButton
              message={WHATSAPP_TEMPLATES.consultation}
              text="احجز استشارة مجانية الآن"
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
