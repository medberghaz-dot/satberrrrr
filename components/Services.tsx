'use client';

import React from 'react';
import ServiceCard from './ServiceCard';
import { Service } from '@/lib/constants';
import { WHATSAPP_TEMPLATES } from '@/lib/whatsapp';

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="w-full bg-[var(--color-surface-alt)] py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-light text-[var(--color-foreground)] mb-8 tracking-tight">
            خدماتنا المتميزة
          </h2>
          <p className="text-lg text-[var(--color-foreground-muted)] max-w-2xl mx-auto leading-relaxed font-light">
            كل مشروع ناجح يحتاج خطة تسويق مدروسة، ونحن نبني استراتيجية تحقق أهدافك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              ctaMessage={WHATSAPP_TEMPLATES.serviceInquiry(service.titleAr)}
              index={index}
            />
          ))}
        </div>

        <div className="mt-24 text-center animate-slide-in-up">
          <p className="text-[var(--color-foreground-muted)] mb-8 text-lg">
            هل تريد معرفة المزيد عن خدماتنا؟
          </p>
          <a
            href="/services"
            className="inline-block px-12 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-sm hover:bg-[var(--color-primary-light)] transition-all duration-300 text-base tracking-wide uppercase"
          >
            عرض جميع الخدمات
          </a>
        </div>
      </div>
    </section>
  );
}
