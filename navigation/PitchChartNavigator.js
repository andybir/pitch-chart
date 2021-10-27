import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import EventCreateScreen from '../screens/EventCreateScreen'
import EndGameScreen from '../screens/EndGameScreen'
import ChartingScreen from '../screens/ChartingScreen'
import HomeScreen from '../screens/HomeScreen'

const Stack = createNativeStackNavigator()

const PitchChartNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Create Event' component={EventCreateScreen} />
      <Stack.Screen name='Charting' component={ChartingScreen} />
      <Stack.Screen name='End Game' component={EndGameScreen} />
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default PitchChartNavigator
