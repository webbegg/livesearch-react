import React, { useRef } from 'react'
import { useListScroll } from '../hooks/useScroll'

import { SearchResultsContainer } from './styled/SearchResultsContainer'
import { SearchResultItem } from './styled/SearchResultsItem'

const SearchResults = ({
  results,
  searchTerm,
  selectedIndex,
  itemsHeight,
  itemsVisible,
  onItemSelected
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
    <SearchResultsContainer
      ref={listElement}
      itemsHeight={itemsHeight}
      itemsVisible={itemsVisible}
    >
      {results.map(({ id, description }) => {
        const currentItem = results[selectedIndex]
        const itemClass = id === currentItem?.id && 'active'

        return (
          <SearchResultItem
            key={id}
            className={itemClass}
            onClick={() => onItemSelected({ id, description })}
          >
            {highlightSearch(description)}
          </SearchResultItem>
        )
      })}
    </SearchResultsContainer>
  )
}

export default SearchResults
