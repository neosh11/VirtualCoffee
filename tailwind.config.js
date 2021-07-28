module.exports = {
  purge: [
    './components/**/*.tsx',
    './components/**/**/*.tsx',
    './components/**/**/**/*.tsx',
    './pages/**/*.tsx',
    './pages/*.tsx',
    './layouts/**/*.tsx'
  ],

  darkMode: false, // or 'media' or 'class'
  theme: {
    //   colors: {
    //     transparent: 'transparent',
    //     primary: '#1e1e24',
    //     secondary: '#fb9f89',
    //     white: '#ffffff',
    //     black: '#000000',
    //     red: '#DF2D16',
    //     blue: '#5386E4',
    //     green: '3E8914',
    //     yellow: '#FFD166',
    //     gray: '#16151a'
    //   },
    //   fontFamily: {
    //     sans: ['Lato', 'sans-serif'],
    //     serif: ['Montserrat', 'serif']
    //   },
    extend: {
      colors: {
        transparent: 'transparent',
        greenie: '#56c0a4',
        bluie: '#0b629c',
        yellie: '#D9BA4B'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
