import React from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'

const App = createStackNavigator()

const Routes: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <App.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#c1cec8' },
        }}
      >
        <App.Screen name="Home" component={Home} />
      </App.Navigator>
    </>
  )
}

export default Routes
