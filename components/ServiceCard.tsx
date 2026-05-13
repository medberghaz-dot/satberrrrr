'use client';

import React from 'react';
import { Service } from '@/lib/constants';
import WhatsAppButton from './WhatsAppButton';

interface ServiceCardProps {
  service: Service;
  ctaMessage: string;
  index?: number;
}

export default function ServiceCard({ service, ctaMessage, index = 0 }: ServiceCardProps) {
  const delay = index * 100;

  return (
    <div 
      className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-500 h-full flex flex-col hover:border-[#0066CC] hover:scale-105 group"
      style={{
        animation: `slideInUp 0.6s ease-out ${delay}ms forwards`,
        opacity: 0,
      }}
    >
      <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">{service.icon}</div>
      
      <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-[#0066CC] transition-colors">{service.titleAr}</h3>
      
      <p className="text-muted mb-6 flex-grow text-base leading-relaxed">{service.descriptionAr}</p>

      <ul className="space-y-3 mb-8">
        {service.features.slice(0, 4).map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
            <span className="text-[#00CC88] font-bold flex-shrink-0 text-lg">✓</span>
            <span className="flex-grow">{feature}</span>
          </li>
        ))}
      </ul>

      <WhatsAppButton
        message={ctaMessage}
        text={`استفسر عن الخدمة`}
        variant="primary"
        size="md"
        className="w-full text-center"
      />
    </div>
  );
}
