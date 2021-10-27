import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Platform,
  Pressable,
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import EventsScreen from './EventsScreen'
import BattersScreen from './BattersScreen'
import PitchersScreen from './PitchersScreen'
import colors from '../constants/colors'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
    </View>
  )
}

styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
  },
  container: {
    flex: 1,
    margin: 10,
    width: '100%',
    height: '100%',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderWidth: 1,
  },
  containerTop: {
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.primary,
    borderWidth: 1,
  },
  containerMiddle: {
    flex: 1,
    width: '100%',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.primary,
    borderWidth: 1,
  },
  containerBottom: {
    flex: 1,
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.primary,
    borderWidth: 1,
  },
  title: {
    // fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right',
    color: 'white',
  },
})

export default HomeScreen
