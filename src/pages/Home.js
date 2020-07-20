import React from 'react'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'
import { Layout } from '../components/Layout'

const HomePage = ({ id }) => {
  const d = false
  return (
    <Layout
      d={d} title='Tu app de fotos de mascotas' subtitle='Con Petgram
    puedes encontrar fotos de animales domesticos y muy bonitos'
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) =>{
  return prevProps.categoryId === props.categoryId
})
