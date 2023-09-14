// import Login from "./components/Login"
import './App.css'
// import { useState, useEffect } from "react"
// import Dashboard from "./components/Dashboard"
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// function App() {
//   // useEffect(() => {
//   //   const accounts = [
//   //     {
//   //       username: 'tyler',
//   //       password: 'durden',
//   //     },
//   //     {
//   //       username: 'marla',
//   //       password: 'singer',
//   //     }
//   //   ]

//   //   localStorage.setItem('accounts', JSON.stringify(accounts))
//   // }, [])

//   // const [currentPage, setCurrentPage] = useState('login')
//   // const [loggedInUser, setLoggedInUser] = useState(null)

//   // return (
//   //   <div className="flex flex-col border-solid border-2 p-10">
//   //     <main>
//   //       {/* {currentPage === 'login' && <Login setCurrentPage={setCurrentPage} setLoggedInUser={setLoggedInUser} />}
//   //       {currentPage === 'dash' && <Dashboard user={loggedInUser} />} */}

//   //       {/* <BrowserRouter>
//   //         <Routes>
//   //           <Route path="/" element={<Dashboard user={loggedInUser} />} />
//   //           <Route path="/login" element={<Login setCurrentPage={setCurrentPage} setLoggedInUser={setLoggedInUser} />} />
//   //           <Route path="*" element={<Navigate to="/login" />} />
//   //         </Routes>
//   //       </BrowserRouter> */}
//   //     </main>      
//   //   </div>   
//   // )
// }

import { useState, useEffect } from 'react'

function App () {
  // Direct User triggers
  const [count, setCount] = useState(0) // 3. What triggers UI change?

  // Side-effect / Events not depending on user trigger
  useEffect(() => { 
    console.log('Checking if even number...')
    if (count % 2 === 0) {
      console.log('Even number!')
    }
  }, [count]) // on mount

  const [loggedInUser, setLoggedInUser] = useState()
  const [newExpenseItem] = useState([])

  useEffect(() => {
    setLoggeInUser({
      ...loggedInUser,
      balance: loggedInUser.balance - newExpenseItem.cost
    })
    
  }, [newExpenseItem])


  // Eventhandler
  const onClickButton = () => { // 2. What should the user action do? / Event trigger
    // it should increment to the number being shown
    setCount(prevCount => prevCount + 1)
  }

  const onClickAnotherButton = () => {
    const newCount = count + 1;
    console.log(newCount)
  }

  return ( // 1. What should the user see / UI
    <div className="flex flex-col justify-center items-center">
      <div className="border-2">{count}</div>
      <br/>
      <button onClick={onClickButton} className="border-2">Change!</button>
      <button onClick={onClickAnotherButton} className="border-2">No Change!</button>
    </div>
  )
}

export default App
