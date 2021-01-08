import { useCallback, useEffect } from 'react'

export const useDelayEffect = (effect, delay, deps) => {
  const callback = useCallback(effect, deps)

  useEffect(() => {
    const handler = setTimeout(() => {
      callback()
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [callback, delay])
}
