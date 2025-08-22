import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,   // ✅ matches slice name + your Header.jsx selector
  }
})

export default store
