import React, { useState } from 'react'

import LiveSearchInput from 'ui-search-component'
import remoteService from './remoteService'

import 'ui-search-component/dist/index.css'

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
    <div className='search-container'>
      <LiveSearchInput
        name='main-search'
        label='Encuentra profesionales de confianza'
        placeholder='Qué necesitas ...'
        results={searchResults}
        loading={isLoading}
        value={selectedItem}
        onChange={searchChangeHandle}
        onSelected={selectedItemHandle}
      />
      {error && error !== '' && <span className='error'>{error}</span>}
    </div>
  )
}

export default App
