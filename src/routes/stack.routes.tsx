import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { Schedule } from '../screens/Schedule'

const { Navigator, Screen, } = createNativeStackNavigator()

export function StackRoutes () {

  return (
    <Navigator
      initialRouteName='home'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name='home'
        component={Home}
      />
      <Screen
        name='schedule'
        component={Schedule}
      />

    </Navigator>
  )
}