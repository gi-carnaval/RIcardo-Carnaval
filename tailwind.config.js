module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkColor: '#202020',
        lightColor: '#DEDEDE',
      },
      gridTemplateColumns: {
        // Defina o número de colunas do grid aqui
        gallery: 'repeat(auto-fit, minmax(200px, 1fr)',
        '2-columns': 'repeat(2, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-2': 'span 2',
      },
    },
    fontFamily: {
      sans: ['montserrat'],
    },
  },
  plugins: [],
}
