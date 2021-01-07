import React, { useState, useRef, createRef } from 'react'
import PropTypes from 'prop-types'

import { useDebouncedEffect } from './hooks/useDebouncedEffect'

import { SearchIcon, LoadingIcon } from './components/icons'
import {
  Container,
  IconContainer,
  Input,
  InputContainer,
  Label,
  SearchResults,
  SearchResultItem
} from './components/styled'

const HbtSearchInput = ({
  label,
  placeholder,
  name,
  value,
  loading,
  results,
  onChange,
  onSelected
}) => {
  const [inputValue, setInputValue] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputValueRef = useRef(inputValue)
  const searchResultsElement = createRef()

  const showNumItems = 6
  const itemsHeight = 60

  useDebouncedEffect(
    () => {
      if (
        inputValue &&
        inputValue !== inputValueRef.current &&
        inputValue.length >= 2
      ) {
        setSelectedIndex(0)
        onChange(inputValue)
      } else {
        onChange('')
      }
    },
    800,
    [inputValue]
  )

  const inputChange = (e) => {
    const { value } = e.currentTarget
    setInputValue(value)
  }

  const scrollToSelectedItem = (offset) => {
    const itemOffset =
      document.querySelector(`.active`).offsetTop + offset * itemsHeight
    const list = searchResultsElement.current
    const listHeight = itemsHeight * showNumItems
    const isOutUpper = itemOffset < list.scrollTop
    const isOutLower = itemOffset + itemsHeight > list.scrollTop + listHeight

    if (isOutUpper) {
      list.scrollTop = itemOffset
    } else if (isOutLower) {
      list.scrollTop = itemOffset + itemsHeight - listHeight
    }
  }

  const keyDownHandle = ({ key }) => {
    const currentItem = results[selectedIndex]
    if (key === 'Enter') {
      if (results?.length) onSelectedItemHandle(currentItem)
    } else if (key === 'ArrowDown') {
      if (selectedIndex < results.length - 1) {
        setSelectedIndex(selectedIndex + 1)
        scrollToSelectedItem(1)
      }
    } else if (key === 'ArrowUp') {
      if (selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1)
        scrollToSelectedItem(-1)
      }
    } else if (key === 'Escape') {
      setInputValue('')
    }
  }

  const onSelectedItemHandle = (item) => {
    setInputValue(item.description)
    inputValueRef.current = item.description
    onSelected(item)
  }

  const renderResults = () => {
    return results.map(({ id, description }) => {
      const currentItem = results[selectedIndex]
      let itemClass = id === currentItem?.id && ' active'
      if (id === value?.id) itemClass += ' selected'

      const format = (text) => {
        const reg = new RegExp(`(${inputValue})`, 'gi')
        const parts = text.split(reg)
        return (
          <div>
            {parts.map((part) => (part.match(reg) ? <b>{part}</b> : part))}
          </div>
        )
      }

      return (
        <SearchResultItem
          key={id}
          className={itemClass}
          onClick={() => onSelectedItemHandle({ id, description })}
        >
          {format(description)}
        </SearchResultItem>
      )
    })
  }

  return (
    <Container>
      {label && label !== '' && <Label htmlFor={name}>{label}</Label>}
      <InputContainer>
        <Input
          type='text'
          autoComplete='off'
          id={name}
          name={name}
          placeholder={placeholder}
          value={inputValue}
          onChange={inputChange}
          onKeyDown={keyDownHandle}
        />
        <IconContainer htmlFor={name}>
          {loading ? <LoadingIcon /> : <SearchIcon />}
        </IconContainer>
      </InputContainer>
      {!loading && results?.length > 0 && (
        <SearchResults
          ref={searchResultsElement}
          itemsHeight={itemsHeight}
          showNumItems={showNumItems}
        >
          {renderResults()}
        </SearchResults>
      )}
    </Container>
  )
}

HbtSearchInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.object,
  onChange: PropTypes.func,
  onSelected: PropTypes.func,
  loading: PropTypes.bool,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired
    })
  )
}

HbtSearchInput.defaultProps = {
  name: 'searchInput',
  value: {},
  onChange: () => null,
  onSelected: () => null,
  results: []
}

export default HbtSearchInput
