/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-use-before-define */
import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView, View, useColorScheme } from 'react-native'

import { ThemeProvider } from 'styled-components/native'
import themes from './styles/themes'

import Routes from './routes'

const App: React.FC = () => {
  // const deviceTheme = useColorScheme()
  // if (deviceTheme) {
  //   const activeTheme = themes[deviceTheme]
  // } else {
  //   const activeTheme = themes.dark
  // }

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#21222c' }}>
        <StatusBar style="auto" />
        {/* <ThemeProvider theme={activeTheme}> */}
        <View style={{ flex: 1, marginTop: 28, backgroundColor: '#21222c' }}>
          <Routes />
        </View>
        {/* </ThemeProvider> */}
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App
