'use client';

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [html, setHtml] = useState<string>('');

  useEffect(() => {
    fetch('/api/pages/home')
      .then(res => res.text())
      .then(data => {
        setHtml(data);
      })
      .catch(err => {
        console.error('Failed to load page:', err);
      });
  }, []);

  if (!html) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>;
  }

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
}
