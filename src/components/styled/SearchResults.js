import styled from 'styled-components'
import { SearchResultItem } from './SearchResultsItem'

export const SearchResults = styled.div`
  background-color: #ffffff;
  border: 1px solid #d2d2d2;
  border-radius: 0px 0px 4px 4px;
  position: absolute;
  max-height: ${({ itemsHeight, showNumItems }) =>
    itemsHeight * showNumItems}px;
  top: 78px;
  left: 0;
  right: 0;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 9;

  ${SearchResultItem} {
    height: ${({ itemsHeight }) => itemsHeight || 42}px;
  }
`
