import React, { useState } from 'react'

import LiveSearchInput from 'ui-search-component'
import remoteService from './remoteService'

import 'ui-search-component/dist/index.css'

const CustomItemRenderer = (props) => {
  console.log(props)
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flex: 1
      }}
    >
      <div style={{ marginRight: 10 }}>
        <img
          src={props.image}
          alt={`${props.name}`}
          style={{
            borderRadius: 20,
            height: 40,
            width: 40
          }}
        />
      </div>
      <div>
        <div>{props.name}</div>
        <small>{props.species}</small>
      </div>
    </div>
  )
}

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [selectedItem, setSelectedItem] = useState()
  const [error, setError] = useState()

  const searchApi = async (searchTerm) => {
    setError('')

    if (!searchTerm || searchTerm.trim() === '') {
      setSearchResults([])
      return
    }

    try {
      setIsLoading(true)
      const { results, error } = await remoteService.getRemoteCharacters(
        searchTerm
      )

      if (results) {
        const normalized = results.map((item) => ({
          description: item.name,
          ...item
        }))
        setSearchResults(normalized)
      } else if (error) {
        throw error
      }
    } catch (error) {
      setError(error)
      setSearchResults([])
    } finally {
      setIsLoading(false)
    }
  }

  const searchChangeHandle = (searchTerm) => {
    searchApi(String(searchTerm).toLowerCase().trim())
  }

  const selectedItemHandle = (item) => {
    setSelectedItem(item)
    setSearchResults([])
  }

  return (
    <div>
      <div
        className='search-container'
        style={{ position: 'relative', zIndex: 10 }}
      >
        <LiveSearchInput
          name='main-search'
          label='Encuentra profesionales de confianza'
          placeholder='Qué necesitas ...'
          results={searchResults}
          loading={isLoading}
          value={selectedItem}
          onChange={searchChangeHandle}
          onSelected={selectedItemHandle}
          itemsHeight={60}
        />
      </div>
      <div
        className='search-container'
        style={{ position: 'relative', zIndex: 12 }}
      >
        <LiveSearchInput
          name='main-search'
          label='Encuentra profesionales de confianza'
          placeholder='Qué necesitas ...'
          results={searchResults}
          loading={isLoading}
          value={selectedItem}
          onChange={searchChangeHandle}
          onSelected={selectedItemHandle}
          itemRenderer={CustomItemRenderer}
          itemsHeight={60}
        />
        {error && error !== '' && <span className='error'>{error}</span>}
      </div>
    </div>
  )
}

export default App
