import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f5f3f0',
        surface: '#ffffff',
        'surface-alt': '#faf8f6',
        foreground: '#0a0a0a',
        'foreground-muted': '#3f3f3f',
        primary: '#1e5a4e',
        'primary-light': '#2d7a6a',
        accent: '#d4a574',
        border: '#e8e3de',
        'text-muted': '#7a7a7a',
      },
      fontWeight: {
        light: '300',
        normal: '400',
        semibold: '600',
        bold: '700',
      },
      borderRadius: {
        sm: '0.375rem',
      },
    },
  },
  plugins: [],
}

export default config
