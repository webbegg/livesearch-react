import React from 'react'

const highlightSearch = (text, search) => {
  const reg = new RegExp(`(${search})`, 'gi')
  const parts = text.split(reg)
  return (
    <div>
      {parts.map((part, i) => (
        <span key={i}>{part.match(reg) ? <b>{part}</b> : part}</span>
      ))}
    </div>
  )
}

export default {
  highlightSearch
}
