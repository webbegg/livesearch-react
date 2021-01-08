import { useEffect } from 'react'

export const useListScroll = (
  element,
  itemsHeight,
  itemsVisible,
  selectedIndex
) => {
  useEffect(() => {
    const itemOffset = document.querySelector(`.active`).offsetTop
    const list = element.current
    const listHeight = itemsHeight * itemsVisible
    const isOutUpper = itemOffset < list.scrollTop
    const isOutLower = itemOffset + itemsHeight > list.scrollTop + listHeight

    if (isOutUpper) {
      list.scrollTop = itemOffset
    } else if (isOutLower) {
      list.scrollTop = itemOffset + itemsHeight - listHeight
    }
  }, [selectedIndex])
}
