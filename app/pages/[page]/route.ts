import { promises as fs } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { page: string } }
) {
  try {
    const page = params.page || 'home';
    
    // Map page names to HTML files
    const pageMap: { [key: string]: string } = {
      'home': 'index.html',
      'contact': 'contact.html',
      'blogs': 'blogs.html',
      'works': 'works.html',
      'privacy-policy': 'privacy-policy.html',
      'timeline': 'timeline.html',
      'waitlist': 'waitlist.html',
    };

    const htmlFile = pageMap[page];
    if (!htmlFile) {
      return NextResponse.json(
        { error: 'Page not found' },
        { status: 404 }
      );
    }

    const filePath = join(
      process.cwd(),
      'arise.framer.media',
      htmlFile
    );

    const html = await fs.readFile(filePath, 'utf-8');
    
    // Return the complete HTML file as-is to preserve all styles and scripts
    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error loading page:', error);
    return new NextResponse('Page not found', { status: 404 });
  }
}
