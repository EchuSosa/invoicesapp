// eslint-disable-next-line no-unused-vars
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

/**
 * @see https://material-ui.com/customization/typography/
 * @type {TypographyOptions}
 */
const typography = {
  fontFamily: ['Spartan', 'sans-serif'].join(','),
  h1: {
    fontSize: '2rem',
    lineHeight: '2.25rem',
    fontWeight: 'bold',
    wordSpacing:'-1',
  },
  h2: {
    fontSize: '1.25rem',
    lineHeight: '1.375rem',
    fontWeight: 'bold',
    wordSpacing:'-0.63',
  },
  h3: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 'bold',
    wordSpacing:'-0.8',
  },
  h4: {
    fontSize: '0.75rem',
    lineHeight: '0.938rem',
    fontWeight: 'bold',
    wordSpacing:'-0.25',
  },

  body1:{
    fontSize: '0.75rem',
    lineHeight: '0.938rem',
    fontWeight: 'normal',
    wordSpacing:'-0.25',
  },

  body2:{
    fontSize: '0.688rem',
    lineHeight: '1.125rem',
    fontWeight: 'bold',
    wordSpacing:'-0.23',
  },

  button: {
    fontWeight: '700',
    textTransform: 'none',
  },
};

export default typography;
