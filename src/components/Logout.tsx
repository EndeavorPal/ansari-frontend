import React from 'react'
import { Pressable } from 'react-native'
import { useDispatch } from 'react-redux'
import { LogoutIcon } from '../assets'
import { useAuth } from '../hooks'
import { logout } from '../store/actions/authActions'
import { clearAuthStateFromLocalStorage } from '../store/slices/authSlice'
import { AppDispatch } from '../store/store'

const LogoutButton: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { token } = useAuth()

  const handleLogout = async () => {
    if (token) {
      try {
        await dispatch(logout(token))
      } catch (error) {
        console.error('Error logging out:', error)
      }
      clearAuthStateFromLocalStorage()
    }
  }

  return (
    <Pressable onPress={handleLogout} style={{ paddingRight: 8 }}>
      <LogoutIcon />
    </Pressable>
  )
}

export default LogoutButton
