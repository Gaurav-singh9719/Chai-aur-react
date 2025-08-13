import { useState } from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React With Chai aur code</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
