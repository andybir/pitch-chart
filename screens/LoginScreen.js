import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>Login Screen</Text>
      <Button
        title='Login'
        onPress={() => navigation.navigate('Event Create')}
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

export default LoginScreen
