import styled from 'styled-components'
import theme from '../../styles/theme'

export const ErrorInfo = styled.span`
  background-color: rgb(${theme.colors.accent}, 0.2);
  border-radius: 12px;
  color: ${theme.colors.accent};
  display: block;
  font-weight: 800;
  margin-top: 1rem;
  padding: 1rem;
  text-align: center;
`
