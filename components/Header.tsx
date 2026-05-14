'use client';

import React from 'react';

interface HeaderProps {
  lang?: 'ar' | 'en';
}

export default function Header({ lang = 'ar' }: HeaderProps) {
  const isArabic = lang === 'ar';
  
  const logo = 'مِراس';
  const menuItems = isArabic
    ? [
        { label: 'الرئيسية', href: '/' },
        { label: 'من نحن', href: '/about' },
        { label: 'الخدمات', href: '/services' },
        { label: 'آراء عملائنا', href: '/testimonials' },
        { label: 'تواصل معنا', href: '/contact' },
      ]
    : [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Testimonials', href: '/testimonials' },
        { label: 'Contact', href: '/contact' },
      ];

  return (
    <header className="w-full bg-surface border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="/" className="text-2xl font-light tracking-wide text-primary">
          {logo}
        </a>
        
        <nav className="hidden md:flex gap-12">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-foreground-muted hover:text-primary transition-colors duration-300 font-medium tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button className="md:hidden text-foreground text-2xl">☰</button>
      </div>
    </header>
  );
}
