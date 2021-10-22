import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ChartingScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Charting Screen</Text>
      <Button
        title='Go to End Game Screen'
        onPress={() => navigation.navigate('End Game Screen')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ChartingScreen
