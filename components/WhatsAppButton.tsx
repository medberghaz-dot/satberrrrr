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

  const baseStyles = 'inline-block font-semibold rounded-sm transition-all duration-300 active:scale-95';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-light',
    secondary: 'bg-accent text-foreground hover:bg-opacity-90',
    outline: 'border-2 border-[var(--color-primary)] text-primary hover:bg-primary hover:text-white',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-10 py-4 text-base tracking-wide uppercase',
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
