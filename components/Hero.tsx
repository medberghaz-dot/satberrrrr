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
    <section className="w-full bg-white py-32 md:py-48 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center animate-fade-in">
        <div className="mb-8">
          <span className="inline-block text-sm tracking-widest text-[var(--color-accent)] font-semibold uppercase">
            التسويق الرقمي الطبي
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl font-light text-[var(--color-foreground)] mb-8 leading-tight tracking-tight">
          {titleAr}
        </h1>
        
        <p className="text-xl md:text-2xl text-[var(--color-foreground-muted)] mb-16 max-w-3xl mx-auto leading-relaxed font-light">
          {descriptionAr}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <WhatsAppButton
            message={ctaMessage}
            text="احجز استشارة"
            variant="primary"
            size="lg"
          />
          <button className="px-10 py-4 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-sm hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 text-lg">
            اعرف أكثر
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-32 pt-16 border-t border-[var(--color-border)]">
          <div>
            <p className="text-4xl font-light text-[var(--color-primary)] mb-2">50+</p>
            <p className="text-sm text-[var(--color-text-muted)] uppercase tracking-wide">عميل</p>
          </div>
          <div>
            <p className="text-4xl font-light text-[var(--color-primary)] mb-2">150%</p>
            <p className="text-sm text-[var(--color-text-muted)] uppercase tracking-wide">نمو متوسط</p>
          </div>
          <div>
            <p className="text-4xl font-light text-[var(--color-primary)] mb-2">6+</p>
            <p className="text-sm text-[var(--color-text-muted)] uppercase tracking-wide">سنوات</p>
          </div>
          <div>
            <p className="text-4xl font-light text-[var(--color-primary)] mb-2">24/7</p>
            <p className="text-sm text-[var(--color-text-muted)] uppercase tracking-wide">دعم</p>
          </div>
        </div>
      </div>
    </section>
  );
}
