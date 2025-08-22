import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './Store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [dispatch])

  if (loading) return null

  return (
    <div className="min-h-screen flex flex-col bg-gray-400">
      <Header />
      <main className="flex-grow p-4">
        {/* ✅ Outlet is now enabled */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
