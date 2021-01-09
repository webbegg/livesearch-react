import styled from 'styled-components'
import theme from '../../styles/theme'

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: ${theme.colors.gray.dark};
  flex: 1;
  font-size: 1rem;
  margin-right: 14px;
  outline: 2px solid transparent;
  outline-offset: 2px;
  padding: 16px 0;
`
