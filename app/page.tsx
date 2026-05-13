import { redirect } from 'next/navigation';

export default function HomePage() {
  // Serve the Framer HTML file directly from public
  redirect('/index.html');
}
