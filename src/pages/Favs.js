import React from 'react'
import { FavsWithQuery } from '../container/GetFavorite'
import { Layout } from '../components/Layout'

export default () => (
  <Layout d='true' title='Tus favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
    <FavsWithQuery />
  </Layout>
)
