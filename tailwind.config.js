/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'high-tower': ['"Footlight MT Light"', ], // 'serif' as a fallback
        'forte': ['"Magneto"', ], // 'serif' as a fallback
      },
    },
  },
  plugins: [],
}

