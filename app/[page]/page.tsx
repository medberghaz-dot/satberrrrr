'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function DynamicPage() {
  const params = useParams();

  useEffect(() => {
    const page = params?.page || 'contact';
    const pageStr = Array.isArray(page) ? page[0] : page;
    
    // Map page names to HTML files in public folder
    const pageMap: { [key: string]: string } = {
      'contact': '/contact.html',
      'blogs': '/blogs.html',
      'works': '/works.html',
      'privacy-policy': '/privacy-policy.html',
      'timeline': '/timeline.html',
      'waitlist': '/waitlist.html',
    };
    
    const htmlFile = pageMap[pageStr];
    if (htmlFile) {
      window.location.href = htmlFile;
    }
  }, [params?.page]);

  return null;
}
