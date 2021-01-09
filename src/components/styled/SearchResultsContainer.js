import styled from 'styled-components'
import { SearchResultItem } from './SearchResultsItem'

import theme from '../../styles/theme'

export const SearchResultsContainer = styled.div`
  animation: ${theme.animations.fadeIn} 0.92s ease;
  background-color: ${theme.colors.white};
  border: ${theme.borders.default};
  border-radius: 0px 0px 4px 4px;
  position: absolute;
  max-height: ${({ itemsHeight, itemsVisible }) =>
    itemsHeight * itemsVisible}px;
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
