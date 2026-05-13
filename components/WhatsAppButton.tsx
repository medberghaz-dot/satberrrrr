'use client';

import React from 'react';
import { generateWhatsAppLink } from '@/lib/whatsapp';

interface WhatsAppButtonProps {
  message: string;
  text?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function WhatsAppButton({
  message,
  text = 'احجز الآن عبر واتساب',
  variant = 'primary',
  size = 'md',
  className = '',
}: WhatsAppButtonProps) {
  const link = generateWhatsAppLink({ message });

  const baseStyles = 'inline-block font-semibold rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95';
  
  const variantStyles = {
    primary: 'bg-[#0066CC] text-white hover:bg-blue-700',
    secondary: 'bg-[#00CC88] text-white hover:bg-green-600',
    outline: 'border-2 border-[#0066CC] text-[#0066CC] hover:bg-blue-50',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {text}
    </a>
  );
}
