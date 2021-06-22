const spartan = {
  fontFamily: 'Spartan',
  fontStyle: 'normal',
  fontWeight: 400,
};

const MuiCssBaseline = {
  '@global': {
    '@font-face': [spartan],
    a: {
      textDecoration: 'none',
    },
    '*::-webkit-scrollbar': {
      width: '0.4em',
      height: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
  },
};

export default MuiCssBaseline;
