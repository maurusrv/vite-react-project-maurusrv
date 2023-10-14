// Anatomy of A React Component

import { useState, useEffect } from 'react'
import LoginForm from './LoginForm'

const FunctionalComponent = (props) => { // React Component  (special JS Function)
  const { propNameWhereTheNameIsWhatYouDecide, name } = props // parameters

  // hooks
  const [
    input, // first item of array, getter, your state variable
    setInput, // second item of array, setter, your state variable updater
  ] = useState('') // function call to declare a state, returns an array

  useEffect() // side-effects

  // event handlers
  const onChangeInput = (e) => {
    setInput(e.target.value)
  }

  // can be conditional return
  // if (someBoolean) {
  //   return null
  // }

  const someVariable = 'hello'

  return ( // JSX return: DOM tag, React Component in JSX, array of DOM / JSX, only one / root tag, fragment (<> </>)
    <> 
      <input value={input} onChange={onChangeInput} />
      <>
        {someVariable}
      </>
      <LoginForm />
      <div></div>
    </>
  )  
}


// const func = (object) => {
//   // object.a, object.b
// }

// const func = ({ a, b }) => {
//   // a, b
// }


// const object = {
//   a: 1, 
//   b: 2,
// }
// func(object)

// func({
//   a: 1, 
//   b: 2,
// })


// const numbers = [1, 2, 3]
// const callback = (number) => {
//   console.log(number)
// }

// numbers.forEach(callback)

// setCount((previousCount) => previousCount + 1)