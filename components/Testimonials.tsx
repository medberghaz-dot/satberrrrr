'use client';

import React from 'react';
import TestimonialCard from './TestimonialCard';
import { Testimonial } from '@/lib/constants';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="testimonials" className="w-full bg-surface-alt py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8 tracking-tight">
            آراء عملائنا
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed font-light">
            اكتشف قصص النجاح من العيادات والمراكز الطبية التي عملنا معها
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 100}ms forwards`,
                opacity: 0,
              }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
