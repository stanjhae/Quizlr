import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context'
import Screens from './src/Screens/Screens'

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
