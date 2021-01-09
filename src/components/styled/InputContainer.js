import styled from 'styled-components'

import { IconContainer } from './IconContainer'

import theme from '../../styles/theme'

export const InputContainer = styled.div`
  animation: slideDown 0.62s both;
  animation-timing-function: ease;
  align-items: center;
  background-color: ${theme.colors.white};
  border: ${theme.borders.default};
  border-radius: 4px;
  color: ${theme.colors.gray.dark};
  cursor: text;
  display: flex;
  flex: 1;
  flex-direction: columns;
  padding: 1px 16px;
  position: relative;
  z-index: 10;

  &:hover {
    background-color: ${theme.colors.gray.lightest};
    border-color: ${theme.colors.gray.base};
  }

  &:focus-within {
    ${theme.shadows.default}
    border-color: ${theme.colors.accent};

    ${IconContainer} {
      color: ${theme.colors.accent};
    }
  }

  > * {
    cursor: text;
  }
`
