import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView, View } from 'react-native'

import Routes from './routes'

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#21222c' }}>
        <StatusBar style="auto" />
        <View style={{ flex: 1, marginTop: 28, backgroundColor: '#21222c' }}>
          <Routes />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App
