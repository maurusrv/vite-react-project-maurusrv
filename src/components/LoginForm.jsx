import { useEffect, useState } from 'react'
import Input from './Input'

const LoginForm = () => {
  const [username, setUsername] = useState('tylerdurden') // is a function that returns an array

  useEffect(() => {
    console.log({
      username
    })
  })

  const values = {
    // username: { 
    //   value: 'tylerdurden',
    //   label: 'Username',
    //   type: 'text'
    // },
    password: {
      value: 'fightclub',
      label: 'Password',
      type: 'password',
    },
    confirmPassword: {
      value: 'fightclub',
      label: 'Confirm Password',
      type: 'password',
    }
  }

  const onUsernameChange = (e) => setUsername(e.target.value)


  return (
    <form className="container">
      <Input
        key="username"
        label="Username"
        type="text"
        id="username"
        value={username}
        onChange={onUsernameChange}
      />

      {Object.keys(values).map((field) => {
        return (
          <Input
            key={values[field].label} 
            label={values[field].label}
            type={values[field].type}
            id={values[field].label}
            value={values[field].value}
          />
        )
      })}

      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm
