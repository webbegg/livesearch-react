import styled from 'styled-components'

import { Input } from './Input'

export const IconContainer = styled.label`
  color: #757575;

  ${Input}:focus & {
    color: #ff7300;
  }
`
