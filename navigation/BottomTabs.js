import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from '../screens/HomeScreen'
import EventsScreen from '../screens/EventsScreen'
import EventCreateScreen from '../screens/EventCreateScreen'
import BattersScreen from '../screens/BattersScreen'
import PitchersScreen from '../screens/PitchersScreen'
import PitchChartNavigator from './PitchChartNavigator'
import colors from '../constants/colors'

const Tab = createBottomTabNavigator()

const BottomTabs = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Events') {
            iconName = focused ? 'baseball' : 'baseball-outline'
          } else if (route.name === 'New Event') {
            iconName = focused ? 'add-circle' : 'add-circle-outline'
          } else if (route.name === 'Batters') {
            iconName = focused ? 'shirt' : 'shirt-outline'
          } else if (route.name === 'Pitchers') {
            iconName = focused ? 'body' : 'body-outline'
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Events' component={EventsScreen} />
      <Tab.Screen name='New Event' component={PitchChartNavigator} />
      <Tab.Screen name='Batters' component={BattersScreen} />
      <Tab.Screen name='Pitchers' component={PitchersScreen} />
    </Tab.Navigator>
  )
}

export default BottomTabs
