import React from 'react'
import { View, StyleSheet, Text, Button, TextInput } from 'react-native'

const PitchersScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Pitchers Screen</Text>
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

export default PitchersScreen
