import React, { useRef } from 'react'
import { useListScroll } from '../hooks/useScroll'
import utils from '../utils'

import {
  SearchResultsContainer,
  SearchResultItem,
  SearchResultsOverlay
} from './styled'

const SearchResults = ({
  results,
  searchTerm,
  selectedIndex,
  itemsHeight,
  itemsVisible,
  onItemSelected,
  itemRenderer
}) => {
  const listElement = useRef()
  useListScroll(listElement, itemsHeight, itemsVisible, selectedIndex)

  return (
    <React.Fragment>
      <SearchResultsOverlay onClick={() => onItemSelected({})} />
      <SearchResultsContainer
        ref={listElement}
        itemsHeight={itemsHeight}
        itemsVisible={itemsVisible}
      >
        {results.map((result) => {
          const currentItem = results[selectedIndex]
          const itemClass = result.id === currentItem?.id && 'active'

          return (
            <SearchResultItem
              key={result.id}
              className={itemClass}
              onClick={() => onItemSelected(result)}
            >
              {itemRenderer
                ? itemRenderer(result)
                : utils.highlightSearch(result.description, searchTerm)}
            </SearchResultItem>
          )
        })}
      </SearchResultsContainer>
    </React.Fragment>
  )
}

export default SearchResults
