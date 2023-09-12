import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Login = (props) => {
  const { setCurrentPage, setLoggedInUser } = props
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('')
  const [password, setPassword] = useState('')
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('')


  // useEffect(() => {
  //   if (username === '') {
  //     setUsernameErrorMessage('Can\'t leave blank!')
  //   } else {
  //     setUsernameErrorMessage('')
  //   }
  // }, [username])

  
  const onChangeUsername = (e) => setUsername(e.target.value)
  const onChangePassword = (e) => setPassword(e.target.value)

  const onSubmit = (e) => {
    e.preventDefault()
    setUsernameErrorMessage('')
    setPasswordErrorMessage('')

    // FE Validations
    if (username === '') {
      setUsernameErrorMessage('Username is blank!')
      return
    }

    if (password === '') {
      setPasswordErrorMessage('Password is blank!')
      return
    }


    // BE Validations
    const accounts = JSON.parse(localStorage.getItem('accounts'))

    const selectedAccount = accounts.find(account => username === account.username)

    if (!selectedAccount) {
      setUsernameErrorMessage('User does not exist')
      return
    }

    if (selectedAccount?.password !== password) {
      setPasswordErrorMessage('Username and password does not match')
      return
    }

    if (selectedAccount.password === password) {
      setLoggedInUser(selectedAccount)
      // setCurrentPage('dash')
      navigate('/')
      setUsernameErrorMessage('')
      setPasswordErrorMessage('')
      return
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-10">
      <div className="flex flex-col">
        <label>Username</label>
        <input className="border-2" type="text" value={username} onChange={onChangeUsername} />
        {usernameErrorMessage && (
          <small className="text-red-700">{usernameErrorMessage}</small>
        )}
      </div>
      
      <div className="flex flex-col">
        <label>Password</label>
        <input className="border-2" type="password" value={password} onChange={onChangePassword} />
        {passwordErrorMessage && (
          <small className="text-red-700">{passwordErrorMessage}</small>
        )}
      </div>

      <button type="submit">Login</button>
    </form>
  )
}

export default Login
