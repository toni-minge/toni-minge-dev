/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neuehaas: ['neue-haas-grotesk-display', 'sans-serif'],
        courier: ['courier-std', 'monospace']
      },
      fontWeight: {
        medium: '600',
        roman: '500',
        light: '400'
      },
      height: {
        // add the height for h1 elements on large and small screens
        // for example:
        '84': '84px',
        '48': '48px'
      },
      colors: {
        // add the name and value of the custom color here
        // for example:
        tmgrey: '#1A1B1A',
        tmdark: '#1A1B1A',
        tmlight: '#D9D9D9'
      },
      cursor: {
        'loescher': 'url("/img/loescher_sm.png"), pointer',
      }
    },
  },
  plugins: [],
}
