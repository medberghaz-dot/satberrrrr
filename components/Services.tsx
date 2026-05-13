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
    <section id="services" className="w-full bg-light py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-dark mb-6">خدماتنا المتميزة</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            كل مشروع ناجح يحتاج خطة تسويق مدروسة، ونحن نبني استراتيجية تحقق أهدافك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              ctaMessage={WHATSAPP_TEMPLATES.serviceInquiry(service.titleAr)}
              index={index}
            />
          ))}
        </div>

        <div className="mt-20 text-center animate-slide-in-up">
          <p className="text-gray-600 mb-8 text-xl font-semibold">
            هل تريد معرفة المزيد عن خدماتنا؟
          </p>
          <a
            href="/services"
            className="inline-block px-10 py-4 bg-[#0066CC] text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 text-lg hover:shadow-lg hover:scale-105"
          >
            عرض جميع الخدمات الآن
          </a>
        </div>
      </div>
    </section>
  );
}
