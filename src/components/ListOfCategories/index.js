import React, { useState, useEffect } from 'react'
import { Category } from '../Category'

import { Item, List, Lds, LdsDiv, LdsDivOn, LdsDivTw, LdsDivTr } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(function () { // usestate acepta una funcion hace un fetch a la api  colocamos la url
    setLoading(true)
    window.fetch('https://petgram-server-alejoavilag.now.sh/categories') // el fech lo traemos de window
      .then(res => res.json()) // convertimos la respuesta a un json
      .then(response => {
        setCategories(response) // como respuesta actualizamos nuestro set categories y le pasamos el response
        setLoading(false)
      })
  }, [])
  return { categories, loading }
}

const ListOfCategoriesComponets = () => {
  const { categories, loading } = useCategoriesData()
  // const [categories, setCategories] = useState([]) // el usestate por defecto lo dejamos como array vacio
  const [showFixed, setShowFixed] = useState(false)

  /* useEffect(function () { // usestate acepta una funcion hace un fetch a la api  colocamos la url
    window.fetch('https://petgram-server-alejo.alejoavilag.now.sh/categories') // el fech lo traemos de window
      .then(res => res.json()) // convertimos la respuesta a un json
      .then(response => {
        setCategories(response) // como respuesta actualizamos nuestro set categories y le pasamos el response
      })
  }, []) */// como segundo parametro de useEffect es que dependencias necesita para ejecutarse si se deja sin parametro se va a loop infinito,
  // colocar un array vacio para que se ejecute solo cuando se monte el componente

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
    // limpiamos el efecto cada vez que se ejecute
  }, [showFixed]) // la dependencia seria showFixed para que no se ejecute siempre
  const renderList = (fixed) => (
    <List fixed={fixed}>{
      loading
        ? <Lds>
          <LdsDiv>
            <LdsDivOn />
            <LdsDivTw />
            <LdsDivTr />
          </LdsDiv>
        </Lds>
      // className={fixed ? 'fixed' : ''}  // esto es con class name
      // le pasamos si esfija o no si retoma true le damos la clase fixed
      // [1, 2, 3, 4].map(category => <Item key={category}><Category /></Item>)
      // usamos las categories del db.json y remplazamos por esa info
        : categories.map(category => <Item key={category.id}> <Category {...category} path={`/pet/${category.id}`} /> </Item>)
    }
    </List>
  )
  /* if (loading) {
    return 'Cargando...'
  } */
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponets)
