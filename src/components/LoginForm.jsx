import { useEffect, useState, useRef } from 'react'
import Input from './Input'

const LoginForm = () => {
  // const [username, setUsername] = useState('tylerdurden') // is a function that returns an array
  // const uncontrolledInputRef = useRef()
  // const [controlled, setControlled] = useState('')
  
  // useEffect(() => {
  //   // console.log("LoginForm is re-rendered")
  //   // console.log({
  //   //   username
  //   // })
  //   // console.log(count)
  // })

  // const values = {
  //   // username: { 
  //   //   value: 'tylerdurden',
  //   //   label: 'Username',
  //   //   type: 'text'
  //   // },
  //   password: {
  //     value: 'fightclub',
  //     label: 'Password',
  //     type: 'password',
  //   },
  //   confirmPassword: {
  //     value: 'fightclub',
  //     label: 'Confirm Password',
  //     type: 'password',
  //   }
  // }

  // const onUsernameChange = (e) => setUsername(e.target.value)

  // const onChangeUncontrolled = (e) => {
  //   // console.log(e.target.value)
  // }

  // const onChangeControlled = (e) => {
  //   console.log(e.target.value)
  //   setControlled(e.target.value)
  // }

  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   // console.log(uncontrolledInputRef.current.value)
  // }

  const [count, setCount] = useState(0)
  // const [backgroundColor, setBackgroundColor] = useState('')

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

  // useEffect(() => {
  //   console.log({
  //     count,
  //     currentColor: colors[count]
  //   })
  //   setBackgroundColor(colors[count])
  // }, [count])

  // useEffect(() => { // it does this arrow function whenever rerender
  //   console.log('Rendering...')
  //   console.log('CURRENT', count)
  // })

  console.log('Tinawag ulit yung component, na ibig sabihin nagrender ulit yung jsx')
  console.log('CURRENT', count)

  // let count = 0
  // console.log('CURRENT', count)

  const onClick = (e) => {
    e.preventDefault()
    console.log('BEFORE SET COUNT', count)
    // count++; // count = count + 1
    
    // expensive db update
    setCount((prevCount) => prevCount + 1)
    console.log('AFTER SET COUNT', count)
  }

  return (
    <form className="flex flex-col border-solid border-2 p-10" 
    // onSubmit={onSubmit}
    >
      <h1 style={{
        // backgroundColor,
      }}>{count}</h1>
      <button onClick={onClick}>+</button>
      {/* <label>Uncontrolled</label>
      <input ref={uncontrolledInputRef} className="border-2" type="text" onChange={onChangeUncontrolled}/>
      <label>Controlled</label>
      <input className="border-2" type="text" onChange={onChangeControlled} value={controlled} />
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

      <button type="submit">Login</button> */}
    </form>
  )
}

export default LoginForm
