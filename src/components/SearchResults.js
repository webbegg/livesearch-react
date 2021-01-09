import React, { useRef } from 'react'
import { useListScroll } from '../hooks/useScroll'

import { SearchResultsContainer } from './styled/SearchResultsContainer'
import { SearchResultItem } from './styled/SearchResultsItem'
import { SearchResultsOverlay } from './styled/SearchResultsOverlay'

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

  const highlightSearch = (text) => {
    const reg = new RegExp(`(${searchTerm})`, 'gi')
    const parts = text.split(reg)
    return (
      <div>
        {parts.map((part, i) => (
          <span key={i}>{part.match(reg) ? <b>{part}</b> : part}</span>
        ))}
      </div>
    )
  }

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
                : highlightSearch(result.description)}
            </SearchResultItem>
          )
        })}
      </SearchResultsContainer>
    </React.Fragment>
  )
}

export default SearchResults
