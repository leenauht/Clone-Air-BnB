/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './app/**/*.{js,ts,jsx,tsx,mdx}',
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bg-opacity-1': 'rgb(0 0 0 / var(--tw-bg-opacity, 0.6))',
        'bg-opacity-3': 'rgb(0 0 0 / var(--tw-bg-opacity, 1))',
        'bg-opacity-2': 'rgb(10 10 10 / var(--tw-bg-opacity, 1))',
        'bg-opacity-4': 'rgb(255 255 255 / var(--tw-bg-opacity, 1))',
        'bg-opacity-5': 'rgb(255 255 255 / var(--tw-bg-opacity, 0.8))',
        'bg-opacity-6': 'rgb(255 255 255 / var(--tw-bg-opacity, 0.4))',
        'bg-opacity-7': 'rgb(255 255 255 / var(--tw-bg-opacity, 0.2))',
      },
      boxShadow: {
        'box-shadow-1': 'rgba(0, 0, 0, 0.1) 0px 1px 0px',
        'box-shadow-2':
          'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
        'box-shadow-3':
          '0 3px 12px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
