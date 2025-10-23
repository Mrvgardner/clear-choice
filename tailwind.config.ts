import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#ff4f00', // primary orange
          dark: '#e54700',
          light: '#ff7a3b',
        },
        surface: {
          DEFAULT: '#ffffff',
          subtle: '#f8fafc',
        },
        orange: '#f97316',
      },
      borderRadius: {
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
      boxShadow: {
        card: '0 8px 24px rgba(0,0,0,0.06)',
        hover: '0 12px 32px rgba(0,0,0,0.10)',
      },
      fontSize: {
        'display': ['clamp(2rem, 3.5vw, 3rem)', { lineHeight: '1.1' }],
        'lead': ['1.125rem', { lineHeight: '1.6' }],
      },
      fontFamily: {
        sans: ['Lato', 'SwitchCommerceReg', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji'],
        heading: ['SwitchCommerceBold', 'Lato', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji'],
        switch: ['"SwitchCommerceBold"', 'Lato', 'sans-serif'],
        switchReg: ['"SwitchCommerceReg"', 'Lato', 'sans-serif'],
        body: ['Lato', 'SwitchCommerceReg', 'sans-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      addUtilities({
        '.section-title': {
          fontFamily: 'SwitchCommerceBold, Lato, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
        },
      })
    },
  ],
}

export default config