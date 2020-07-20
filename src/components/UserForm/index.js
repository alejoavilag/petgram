import React from 'react'
import { Form, Input, Title, Error } from './styles'
import { useInputValue } from '../../hooks/useInputValue'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ disabled, error, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          disabled={disabled} placeholder='Email' type='email' {...email}
        />
        <Input
          disabled={disabled} placeholder='Password' type='password' {...password}
        />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}

// const [email, setEmail] = useState('') // esto se remplaza por el hook global
// <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
// imput normal sin el hook
// value={email.value} onChange={email.onChange} // esto se puede remplazar por el rest operatos {...email}
