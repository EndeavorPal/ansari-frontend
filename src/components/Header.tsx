import React from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks'
import InfoPopup from './InfoPopup'
import LanguageSelector from './LanguageSelector'
import ThreadsDrawer from './threads/ThreadsDrawer'

const Header: React.FC = () => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  // Function to handle press on ANSARI text
  const handlePress = () => {
    // Navigate to the home page here
    navigate('/')
  }
  return (
    <View style={styles.container}>
      <View style={styles.contentWarper}>
        <View style={styles.leftContent}>{isAuthenticated && <ThreadsDrawer />}</View>
        <Pressable onPress={handlePress}>
          <Text style={{ fontWeight: '500', fontSize: 24 }}>{'ANSARI'}</Text>
        </Pressable>
        <View style={styles.rightContent}>
          <LanguageSelector />
          <InfoPopup />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    height: 56,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff', // f2f2f2
  },
  contentWarper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
})
export default Header
