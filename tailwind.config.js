/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#208CFC',
        muted: 'hsl(215.4 16.3% 46.9%)',
        border: 'hsl(214.3 31.8% 91.4%)',
        'gray-hover': '#f9fafb',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mariana: ['Mariana', 'serif'],
      },
      maxWidth: {
        '2xl': '1400px',
      },
      borderRadius: {
        lg: '0.5rem',
        DEFAULT: 'var(--radius)',
      },
      height: {
        9: '2.25rem',    // Small button
        10: '2.5rem',    // Default button
        11: '2.75rem',   // Large button
        14: '3.5rem',    // Trial button
      },
      container: {
        center: true,
        padding: '2rem',
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-in-out',
        'slide-out': 'slideOut 0.3s ease-in-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideOut: {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(-10px)', opacity: 0 },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}

