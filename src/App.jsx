import Login from "./components/Login"
import './App.css'
import { useState, useEffect } from "react"
import Dashboard from "./components/Dashboard"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  useEffect(() => {
    const accounts = [
      {
        username: 'tyler',
        password: 'durden',
      },
      {
        username: 'marla',
        password: 'singer',
      }
    ]

    localStorage.setItem('accounts', JSON.stringify(accounts))
  }, [])

  const [currentPage, setCurrentPage] = useState('login')
  const [loggedInUser, setLoggedInUser] = useState(null)

  return (
    <div className="flex flex-col border-solid border-2 p-10">
      <main>
        {/* {currentPage === 'login' && <Login setCurrentPage={setCurrentPage} setLoggedInUser={setLoggedInUser} />}
        {currentPage === 'dash' && <Dashboard user={loggedInUser} />} */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard user={loggedInUser} />} />
            <Route path="/login" element={<Login setCurrentPage={setCurrentPage} setLoggedInUser={setLoggedInUser} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      </main>      
    </div>   
  )
}

export default App
