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
    
    // Extract just the body content
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (!bodyMatch) {
      return NextResponse.json(
        { error: 'Could not parse HTML' },
        { status: 500 }
      );
    }

    return new NextResponse(bodyMatch[1], {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  } catch (error) {
    console.error('Error loading page:', error);
    return NextResponse.json(
      { error: 'Failed to load page' },
      { status: 500 }
    );
  }
}
