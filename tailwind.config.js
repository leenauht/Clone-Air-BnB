/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        shadow1: 'var(--shadow-shadow1)',
        shadow2: 'var(--shadow-shadow2)',
        shadow3: 'var(--shadow-shadow3)',
      },
    },
  },
  plugins: [],
};
