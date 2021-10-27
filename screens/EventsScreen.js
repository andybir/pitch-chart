import React from 'react'
import { View, StyleSheet, Text, Button, TextInput } from 'react-native'

const EventsScreen = ({navigation, props}) => {
  return (
    <View style={styles.screen}>
      <Text>Events Screen</Text>

      
    </View>
  )
}

styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default EventsScreen
