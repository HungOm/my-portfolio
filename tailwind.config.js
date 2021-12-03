module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow:{
      'smoke-lg':'0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)'
    },
    extend: {
      zIndex: {
        '-10': '-10',
        '-5': '-5',
        '-1': '-1',
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
             
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
