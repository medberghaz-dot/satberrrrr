'use client';

import React from 'react';
import WhatsAppButton from './WhatsAppButton';

interface HeroProps {
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  ctaMessage: string;
}

export default function Hero({
  titleAr,
  titleEn,
  descriptionAr,
  descriptionEn,
  ctaMessage,
}: HeroProps) {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 via-white to-light py-24 md:py-40 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-5xl mx-auto px-4 text-center animate-fade-in relative z-10">
        <div className="inline-block mb-6 px-4 py-2 bg-blue-100 text-[#0066CC] rounded-full font-semibold text-sm">
          خدمات التسويق الرقمي الطبي
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-dark mb-8 leading-tight">
          {titleAr}
        </h1>
        
        <p className="text-lg md:text-2xl text-muted mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          {descriptionAr}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <WhatsAppButton
            message={ctaMessage}
            text="احجز استشارة عبر واتساب"
            variant="primary"
            size="lg"
          />
          <button className="px-8 py-4 border-2 border-[#0066CC] text-[#0066CC] font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 text-lg hover:shadow-lg">
            اعرف أكثر
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-gray-200">
          <div className="text-center">
            <p className="text-4xl font-bold text-[#0066CC]">50+</p>
            <p className="text-muted mt-2">عميل سعيد</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#0066CC]">150%</p>
            <p className="text-muted mt-2">زيادة متوسطة</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#0066CC]">6+</p>
            <p className="text-muted mt-2">سنوات خبرة</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#0066CC]">24/7</p>
            <p className="text-muted mt-2">دعم متواصل</p>
          </div>
        </div>
      </div>
    </section>
  );
}
