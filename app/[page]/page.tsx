'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function DynamicPage() {
  const params = useParams();
  const [html, setHtml] = useState<string>('');

  useEffect(() => {
    const page = params?.page || 'contact';
    const pageStr = Array.isArray(page) ? page[0] : page;
    
    fetch(`/api/pages/${pageStr}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load page');
        return res.text();
      })
      .then(data => {
        setHtml(data);
      })
      .catch(err => {
        console.error('Failed to load page:', err);
      });
  }, [params?.page]);

  if (!html) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>;
  }

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
}
