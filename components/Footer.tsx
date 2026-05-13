'use client';

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#00CC88]">مِراس</h3>
            <p className="text-gray-300">
              متخصصون في التسويق الرقمي للقطاع الطبي
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">الروابط السريعة</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#00CC88] transition-colors">الرئيسية</a></li>
              <li><a href="#services" className="hover:text-[#00CC88] transition-colors">الخدمات</a></li>
              <li><a href="#testimonials" className="hover:text-[#00CC88] transition-colors">آراء العملاء</a></li>
              <li><a href="#contact" className="hover:text-[#00CC88] transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">التواصل</h4>
            <ul className="space-y-2 text-gray-300">
              <li>البريد الإلكتروني: info@miras.com</li>
              <li>الهاتف: +966 50 123 4567</li>
              <li>المملكة العربية السعودية</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} مِراس للتسويق الرقمي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
