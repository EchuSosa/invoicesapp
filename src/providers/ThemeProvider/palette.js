import { colors } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

/**
 * @see https://material-ui.com/customization/palette/
 * @type {PaletteOptions}
 */
const palette = {
  primary: {
    background:"#0C0E16",
    main: '#141625',
    light: '#252945',
    bg: '#1E2139',
  },
  secondary: {
    background:"#FFFFFF",
    main: '#F8F8FB',
    light: '#7E88C3', 
    dark: '#7c5dfa', 
  },
  error: {
    main: '#EC5757',
    light: '#9277FF',
  },
  success: {
    main: '#9277ff',
    light: '#dfe3fa',
  },
  info: {
    main: '#888EB0',
  },
  text: {
    primary: colors.common.white,
    secondary: colors.common.black,
  },
};

export default palette;
