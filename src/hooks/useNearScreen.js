import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(function () {
    Promise.resolve( // si el navegador tiene inetrsection obnserver lo trae sino importa
      typeof window.IntersectionObserver !==
        'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        // console.log(entries)
        const { isIntersecting } = entries[0]
        // console.log({ isIntersecting })
        if (isIntersecting) {
          setShow(true)
          observer.disconnect() // desconectamos el observer una vez este en el viewport
        }
      })
      observer.observe(element.current) // iniciamos ese observer observando el current
    })
    // console.log(element)// observamos los articulos
    // console.log(element.current)// ingresamos a current para ver las props
  }, [element]) // esto solo se ejecuta cuando cambia element
  return [show, element]
}
