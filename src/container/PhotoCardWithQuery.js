import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
// import { useQuery } from '@apollo/react-hooks'

const getSinglePhoto = gql`
query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }`

/* export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(getSinglePhoto, {
    variables: { id: id }
  })
  console.log(data)
  if (loading) return 'loading...'
  if (error) return 'Error...'

  return <PhotoCard />
} */

const renderProp = ({ loading, error, data }) => {
  if (loading) return 'loading...'
  if (error) return 'Error!'
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={getSinglePhoto} variables={{ id }}>
    {renderProp}
  </Query>
)
