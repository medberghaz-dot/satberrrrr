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
        { label: 'الرئيسية', href: '#' },
        { label: 'من نحن', href: '#about' },
        { label: 'الخدمات', href: '#services' },
        { label: 'آراء عملائنا', href: '#testimonials' },
        { label: 'تواصل معنا', href: '#contact' },
      ]
    : [
        { label: 'Home', href: '#' },
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Contact', href: '#contact' },
      ];

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex-1">
          <a href="/" className="text-2xl font-bold text-[#0066CC]">
            {logo}
          </a>
        </div>
        
        <nav className="flex-1 hidden md:flex justify-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-[#0066CC] transition-colors duration-200 font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex-1 flex justify-end">
          <button className="md:hidden text-[#0066CC] text-2xl">☰</button>
        </div>
      </div>
    </header>
  );
}
