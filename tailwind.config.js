/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        shadow1: 'rgba(0, 0, 0, 0.1) 0px 1px 0px',
        shadow2:
          'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
        shadow3:
          '0 3px 12px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.08)',
      },
      colors: {
        customOrange: '#ff5722',
        cl_opacity1: 'rgb(0 0 0 / var(--tw-bg-opacity, 0.6))',
        cl_opacity2: 'rgb(0 0 0 / var(--tw-bg-opacity, 1))',
        cl_opacity3: 'rgb(10 10 10 / var(--tw-bg-opacity, 1))',
        cl_opacity4: 'rgb(255 255 255 / var(--tw-bg-opacity, 1))',
        cl_opacity5: 'rgb(255 255 255 / var(--tw-bg-opacity, 0.8))',
        cl_opacity6: 'rgb(255 255 255 / var(--tw-bg-opacity, 0.4))',
        cl_opacity7: 'rgb(255 255 255 / var(--tw-bg-opacity, 0.2))',
      },
    },
  },
  plugins: [],
};
