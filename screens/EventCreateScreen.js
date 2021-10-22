import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const CreateEventScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Event Create Screen</Text>
      
      <Button
        title='Go to Charting Screen'
        onPress={() => navigation.navigate('Charting Screen')}
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

export default CreateEventScreen
