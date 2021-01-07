import styled from 'styled-components'

export const SearchResultItem = styled.div`
  align-items: center;
  border: 1px solid transparent;
  cursor: pointer;
  display: flex;
  padding: 0 16px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #fafafa;
  }

  &.selected {
    background-color: #fafafa;
  }

  &.active {
    background-color: #cccccc;
  }
`
