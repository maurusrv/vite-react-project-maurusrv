import LoginForm from "./components/LoginForm"
import './App.css'
import Header from "./components/Header"

function App() {
  return (
    <div className="flex flex-col border-solid border-2 p-10">
      <Header />
      <main>
        <LoginForm />
      </main>      
      <footer>Copyright 2023</footer>
    </div>   
  )
}

export default App
