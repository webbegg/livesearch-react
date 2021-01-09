import { keyframes } from 'styled-components'

const colors = {
  white: '#ffffff',
  gray: {
    lightest: '#fafafa',
    light: '#d2d2d2',
    base: '#9b9b9b',
    dark: '#404040',
    darker: '#757575',
    darkest: '#2b2b2b'
  },
  accent: '#FF7300'
}

const animations = {
  spin: keyframes`
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  `,
  fadeIn: keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
  `
}

const borders = {
  default: `1px solid ${colors.gray.light}`
}

const shadows = {
  default: 'box-shadow: 0px 0px 8px rgba(255, 115, 0, 0.2);'
}

const transitions = {
  default: '0.23s ease-in-out'
}

export default {
  animations,
  colors,
  borders,
  shadows,
  transitions
}
