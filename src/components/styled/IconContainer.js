import styled from 'styled-components'
import { Input } from './Input'

import theme from '../../styles/theme'

export const IconContainer = styled.label`
  color: ${theme.colors.gray.darker};

  ${Input}:focus & {
    color: ${theme.colors.gray.darker};
  }
`
