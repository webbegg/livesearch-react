import React from 'react'

import LiveSearchInput from 'ui-search-component'
import remoteService from './remoteService'

import 'ui-search-component/dist/index.css'

const CustomItemRenderer = (props) => {
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
  const searchApi = async (searchTerm) => {
    searchTerm = searchTerm?.toLowerCase().trim()

    if (searchTerm?.trim() === '') {
      return []
    }

    try {
      const { results, error } = await remoteService.getRemoteCharacters(
        searchTerm
      )

      if (results) {
        const normalized = results.map((item) => ({
          description: item.name,
          ...item
        }))
        return normalized
      } else if (error) {
        throw error
      }
    } catch (error) {
      return []
    }
  }

  const searchChangeHandle = (item) => {
    console.log(item)
  }

  return (
    <div>
      <div
        className='search-container'
        style={{ position: 'relative', zIndex: 10 }}
      >
        <LiveSearchInput
          getData={searchApi}
          name='main-search'
          label='Encuentra profesionales de confianza'
          placeholder='Qué necesitas ...'
          onChange={searchChangeHandle}
        />
      </div>
      <div
        className='search-container'
        style={{ position: 'relative', zIndex: 9 }}
      >
        <LiveSearchInput
          getData={searchApi}
          name='main-search'
          label='Encuentra profesionales de confianza (ItemRenderer)'
          placeholder='Qué necesitas ...'
          onChange={searchChangeHandle}
          itemRenderer={CustomItemRenderer}
          itemsHeight={60}
        />
      </div>
    </div>
  )
}

export default App
