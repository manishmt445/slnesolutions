/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#102B50',
          50: '#F0F5FA',
          100: '#DCE8F4',
          200: '#B8D1E8',
          300: '#8FB5D9',
          400: '#4D8BC4',
          500: '#2875B9', // Accent Blue
          600: '#1B5388',
          700: '#173D66', // Secondary Navy
          800: '#102B50', // Primary Navy
          900: '#0B1C34',
          950: '#060F1E',
        },
        steel: {
          DEFAULT: '#64748B',
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B', // Steel Grey
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        surface: {
          light: '#F4F7FA',
          card: '#FFFFFF',
          border: '#E2E8F0',
        },
        accent: {
          DEFAULT: '#2875B9',
          hover: '#1B5FA0',
          glow: 'rgba(40, 117, 185, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Manrope', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(16, 43, 80, 0.06), 0 2px 6px -1px rgba(16, 43, 80, 0.04)',
        'premium': '0 10px 30px -5px rgba(16, 43, 80, 0.10), 0 4px 10px -2px rgba(16, 43, 80, 0.04)',
        'lift': '0 20px 40px -10px rgba(16, 43, 80, 0.15), 0 8px 16px -4px rgba(16, 43, 80, 0.08)',
      }
    },
  },
  plugins: [],
}
