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
      className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-sm p-10 hover:shadow-lg transition-all duration-500 h-full flex flex-col group"
      style={{
        animation: `slideInUp 0.6s ease-out ${delay}ms forwards`,
        opacity: 0,
      }}
    >
      <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
      
      <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-4 group-hover:text-[var(--color-primary)] transition-colors">{service.titleAr}</h3>
      
      <p className="text-[var(--color-foreground-muted)] mb-8 flex-grow text-base leading-relaxed font-light">{service.descriptionAr}</p>

      <ul className="space-y-3 mb-10">
        {service.features.slice(0, 4).map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-[var(--color-foreground-muted)] text-sm">
            <span className="text-[var(--color-accent)] font-light flex-shrink-0">•</span>
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
