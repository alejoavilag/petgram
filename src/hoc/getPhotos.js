import { gql } from 'apollo-boost'

export const getPhotos = gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}` // creamos la constante y usamos graphql
// graphql necesita la query gql, la query del string vacio es para recuperar todas las fotos
