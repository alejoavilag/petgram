import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      // if (like === 'true') { return like }
      return item !== null ? JSON.parse(item) : initialValue
      // return false // iniciamos el like con lo que haya en el local storage
    } catch (e) {
      return initialValue
    }
  }) // estado inicialfalse

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value)) // nos aseguramos que es un json string
      setValue(value)
      console.log(key)
    } catch (e) {
      console.error(e)
    }
  }
  return [storedValue, setLocalStorage]
}
