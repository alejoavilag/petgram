import React from 'react'
import { Helmet } from 'react-helmet'
import { Title, SubTitle, Div } from './styles'

export const Layout = ({ children, title, subtitle, d = false }) => {
  return <>
    <Helmet>
      {title && <title>{title} | Petgram 🐶 </title>}
      {subtitle && <meta name='description' content={subtitle} />}
    </Helmet>
    {d ? <Div>
      {title && <Title>{title}</Title>}
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
      {children}
    </Div>
      : <Div>{children}</Div>
    }
  </>
}
