import React from 'react'
import { PhotoCard } from '../PhotoCard'

// import { useQuery } from '@apollo/react-hooks'  // funciona con los dos metodos en uno con usequery y el otro solo query
import { getPhotos } from '../../hoc/getPhotos'
import { Query } from 'react-apollo'

/* export const ListOfPhotoCards = ({ categoryId }) => {
  // const { loading, error, data } = useGetPhotos(categoryId)
  // console.log(data)
  const { loading, data, error } = useQuery(getPhotos, {
    variables: { categoryId: categoryId }
  })

  if (loading) return null
  if (error) return <h1>Error...</h1>
  return (
    <ul>
      {data.photos.map((photoCard, id) => <PhotoCard key={id} {...photoCard} />)}
    </ul>
  )
} */

//  {[1, 2, 3, 4, 5, 6].map(id => <PhotoCard key={id} id={id} />)} // inicial del return photocards

export const ListOfPhotoCards = ({ categoryId }) => (
  <Query query={getPhotos} variables={{ categoryId }}>
    {
      ({ loading, error, data }) => {
        if (loading) return null
        if (error) return <h1>Error...</h1>
        return (
          <ul>
            {data.photos.map((photoCard, id) => <PhotoCard key={id} {...photoCard} />)}
          </ul>
        )
      }
    }
  </Query>
)
