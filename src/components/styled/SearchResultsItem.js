import styled from 'styled-components'
import theme from '../../styles/theme'

export const SearchResultItem = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  padding: 0 16px;
  transition: ${theme.transitions.default};

  &:hover {
    background-color: ${theme.colors.gray.lightest};
  }

  &.active {
    background-color: ${theme.colors.gray.lightest};
  }
`
