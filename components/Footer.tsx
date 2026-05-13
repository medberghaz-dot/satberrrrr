'use client';

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--color-foreground)] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-light mb-4 text-[var(--color-accent)] tracking-wide">مِراس</h3>
            <p className="text-white opacity-70 leading-relaxed font-light">
              متخصصون في التسويق الرقمي للقطاع الطبي
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-base uppercase tracking-wide">الروابط السريعة</h4>
            <ul className="space-y-3 text-white opacity-70">
              <li><a href="/" className="hover:text-[var(--color-accent)] transition-colors font-light">الرئيسية</a></li>
              <li><a href="/services" className="hover:text-[var(--color-accent)] transition-colors font-light">الخدمات</a></li>
              <li><a href="/testimonials" className="hover:text-[var(--color-accent)] transition-colors font-light">آراء العملاء</a></li>
              <li><a href="/contact" className="hover:text-[var(--color-accent)] transition-colors font-light">تواصل معنا</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-base uppercase tracking-wide">التواصل</h4>
            <ul className="space-y-3 text-white opacity-70 font-light">
              <li>البريد: info@miras.com</li>
              <li>الهاتف: +966 50 123 4567</li>
              <li>المملكة العربية السعودية</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-10 pt-8 text-center text-white opacity-50 font-light text-sm">
          <p>&copy; {currentYear} مِراس للتسويق الرقمي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
