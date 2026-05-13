'use client';

import { useEffect, useState } from 'react';

export default function PrivacyPage() {
  const [html, setHtml] = useState('');

  useEffect(() => {
    fetch('/pages/privacy.html')
      .then(res => res.text())
      .then(data => setHtml(data));
  }, []);

  if (!html) return <div style={{padding: '40px', textAlign: 'center'}}>Loading...</div>;
  
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
