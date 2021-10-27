import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const EndGameScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>End Game Screen</Text>
      <Button
        title='Home'
        onPress={() => navigation.popToTop('Home')}
      />
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

export default EndGameScreen
