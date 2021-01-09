import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import { useDelayEffect } from './hooks/useDelayEffect'
import SearchResults from './components/SearchResults'

import { SearchIcon, LoadingIcon } from './components/icons'
import {
  Container,
  IconContainer,
  Input,
  InputContainer,
  Label
} from './components/styled'

import './styles/global.css'

const LiveSearchInput = ({
  label,
  placeholder,
  name,
  loading,
  results,
  onChange,
  onSelected,
  itemsHeight,
  itemsVisible
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const inputValueRef = useRef(inputValue)

  useDelayEffect(
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

  const keyDownHandle = ({ key }) => {
    const currentItem = results[selectedIndex]
    if (key === 'Enter') {
      if (results?.length) onSelectedItemHandle(currentItem)
    } else if (key === 'ArrowDown') {
      if (selectedIndex < results.length - 1) {
        setSelectedIndex(selectedIndex + 1)
      }
    } else if (key === 'ArrowUp') {
      if (selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1)
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
          results={results}
          searchTerm={inputValue}
          selectedIndex={selectedIndex}
          itemsHeight={itemsHeight}
          itemsVisible={itemsVisible}
          onItemSelected={onSelectedItemHandle}
        />
      )}
    </Container>
  )
}

LiveSearchInput.propTypes = {
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
  ),
  itemsHeight: PropTypes.number,
  itemsVisible: PropTypes.number
}

LiveSearchInput.defaultProps = {
  name: 'searchInput',
  value: {},
  onChange: () => null,
  onSelected: () => null,
  results: [],
  itemsHeight: 60,
  itemsVisible: 6
}

export default LiveSearchInput
