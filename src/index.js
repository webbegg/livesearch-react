import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import { useDelayEffect } from './hooks/useDelayEffect'
import SearchResults from './components/SearchResults'

import { SearchIcon, LoadingIcon } from './components/icons'
import {
  Container,
  ErrorInfo,
  IconContainer,
  Input,
  InputContainer,
  Label
} from './components/styled'

import './styles/global.css'
import utils from './utils'

const LiveSearchInput = ({
  getData,
  name,
  label,
  placeholder,
  onChange,
  itemsHeight,
  itemsVisible,
  itemRenderer
}) => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState()
  const [error, setError] = useState()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const inputValueRef = useRef(inputValue)

  useDelayEffect(
    async () => {
      if (
        inputValue &&
        inputValue !== inputValueRef.current &&
        inputValue.length >= 2
      ) {
        setLoading(true)
        setError()
        setSelectedIndex(0)
        await getData(inputValue)
          .then((results) => {
            setLoading(false)
            setResults(results)
            if (!results.length) setError('No se encontraron resultados')
          })
          .catch((error) => {
            setError(error)
          })
      } else {
        onChange('')
      }
    },
    600,
    [inputValue]
  )

  const inputChange = (e) => {
    const { value } = e.currentTarget
    setInputValue(value)
  }

  const keyDownHandle = ({ key }) => {
    const currentItem = results[selectedIndex]
    if (key === 'Enter') {
      if (currentItem) {
        onSelectedItemHandle(currentItem)
        setResults([])
      }
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
      setError('')
      setResults([])
    }
  }

  const onSelectedItemHandle = (item) => {
    setInputValue(item.description || '')
    inputValueRef.current = item.description || ''
    onChange(item)
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
          itemRenderer={itemRenderer || null}
        />
      )}
      {error && error !== '' && (
        <ErrorInfo className='error'>{error}</ErrorInfo>
      )}
    </Container>
  )
}

LiveSearchInput.propTypes = {
  getData: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  itemsHeight: PropTypes.number,
  itemsVisible: PropTypes.number
}

LiveSearchInput.defaultProps = {
  name: 'searchInput',
  value: {},
  onChange: () => null,
  itemsHeight: 60,
  itemsVisible: 6
}

LiveSearchInput.utils = utils

export default LiveSearchInput
