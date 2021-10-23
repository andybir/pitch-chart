import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './screens/LoginScreen'
import EventCreateScreen from './screens/EventCreateScreen'
import EndGameScreen from './screens/EndGameScreen'
import ChartingScreen from './screens/ChartingScreen'

// useScreens()

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login Screen'>
        <Stack.Screen name='Login Screen' component={LoginScreen} />
        <Stack.Screen name='Event Create' component={EventCreateScreen} />
        <Stack.Screen name='Charting Screen' component={ChartingScreen} />
        <Stack.Screen name='End Game Screen' component={EndGameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
