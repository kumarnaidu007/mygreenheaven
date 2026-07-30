import { useCallback, useEffect, useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const readValue = useCallback(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const stored = window.localStorage.getItem(key)
      return stored !== null ? JSON.parse(stored) : initialValue
    } catch {
      return initialValue
    }
  }, [initialValue, key])

  const [value, setValue] = useState(readValue)

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Ignore write failures (private mode / quota).
    }
  }, [key, value])

  return [value, setValue]
}
