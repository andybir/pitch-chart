import React from 'react'
import { View, StyleSheet, Text, Button, TextInput } from 'react-native'

const BattersScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>Batters Screen</Text>
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

export default BattersScreen
