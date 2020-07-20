import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(({ data }) => {
                const { singup } = data
                activateAuth(singup)
              })
            }
            const errorMsg = error && 'Usuario ya existe o hay algun problema con su registro.'
            return <UserForm
              disabled={loading} error={errorMsg}
              onSubmit={onSubmit} title='Registrarse'
            />
          }
        }
      </RegisterMutation>
      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(({ data }) => {
                const { login } = data
                activateAuth(login)
              })
            }
            const errorMsg = error && 'Usuario o contraceña incorrecta!'
            return <UserForm
              disabled={loading} error={errorMsg}
              onSubmit={onSubmit} title='Iniciar Sesión'
            />
          }
        }
      </LoginMutation>
    </>
  )
}
