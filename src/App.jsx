import Button from '../src/components/Button'

function App() {

  const isHidden = false

  return ( // return value, JSX elements (DOM elements but not really dom tags)
    <>
      <div>Hello, World!</div>
      <Button 
        label="Submit"
        onClick={() => { console.log('Hello') }}
        isHidden={isHidden}
      />
    </>   
  )
}

export default App
