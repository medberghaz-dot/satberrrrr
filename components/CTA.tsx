'use client';

import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import { WHATSAPP_TEMPLATES } from '@/lib/whatsapp';

export default function CTA() {
  return (
    <section id="cta" className="w-full bg-gradient-to-r from-[#0066CC] via-blue-600 to-blue-700 py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 animate-fade-in">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          مستعد لزيادة عدد مرضاك؟
        </h2>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto">
          تواصل معنا الآن واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك الطبية والنمو الرقمي المستدام
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <WhatsAppButton
            message={WHATSAPP_TEMPLATES.consultation}
            text="احجز استشارة الآن"
            variant="secondary"
            size="lg"
          />
          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0066CC] transition-all duration-300 text-lg hover:shadow-lg">
            اعرف المزيد
          </button>
        </div>
      </div>
    </section>
  );
}
