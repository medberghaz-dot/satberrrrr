'use client';

import React from 'react';
import { Testimonial } from '@/lib/constants';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const stars = Array.from({ length: testimonial.rating }).map((_, i) => (
    <span key={i} className="text-yellow-400 text-xl">★</span>
  ));

  return (
    <div className="bg-white rounded-xl p-8 border-2 border-transparent hover:border-[#0066CC] shadow-lg hover:shadow-2xl transition-all duration-500 group h-full flex flex-col hover:bg-blue-50">
      <div className="flex gap-1 mb-6 h-8">
        {stars}
      </div>
      
      <p className="text-gray-700 mb-8 italic leading-relaxed flex-grow text-base">
        "{testimonial.contentAr}"
      </p>

      <div className="border-t-2 border-gray-200 pt-6">
        <p className="font-bold text-dark text-lg">{testimonial.nameAr}</p>
        <p className="text-sm text-[#0066CC] font-semibold mt-1">{testimonial.clinicAr}</p>
      </div>
    </div>
  );
}
