import React, { useRef } from 'react'
import styled from 'styled-components'
import { useListScroll } from '../hooks/useScroll'

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

  const formatResult = (text) => {
    const reg = new RegExp(`(${searchTerm})`, 'gi')
    const parts = text.split(reg)
    return (
      <div>{parts.map((part) => (part.match(reg) ? <b>{part}</b> : part))}</div>
    )
  }

  return (
    <Container
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
            {formatResult(description)}
          </SearchResultItem>
        )
      })}
    </Container>
  )
}

export default SearchResults

const SearchResultItem = styled.div`
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

const Container = styled.div`
  background-color: #ffffff;
  border: 1px solid #d2d2d2;
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
