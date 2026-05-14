'use client';

import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import { WHATSAPP_TEMPLATES } from '@/lib/whatsapp';

export default function CTA() {
  return (
    <section id="cta" className="w-full bg-primary py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-fade-in">
        <h2 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight tracking-tight">
          مستعد لزيادة عدد مرضاك؟
        </h2>
        
        <p className="text-lg md:text-xl text-white mb-12 leading-relaxed max-w-2xl mx-auto font-light opacity-90">
          تواصل معنا الآن واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك الطبية والنمو الرقمي المستدام
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <WhatsAppButton
            message={WHATSAPP_TEMPLATES.consultation}
            text="احجز استشارة"
            variant="secondary"
            size="lg"
          />
          <button className="px-10 py-4 border-2 border-white text-white font-semibold rounded-sm hover:bg-white hover:text-primary transition-all duration-300 text-base tracking-wide uppercase">
            اعرف المزيد
          </button>
        </div>
      </div>
    </section>
  );
}
