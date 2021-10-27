import React from 'react'
import { View, StyleSheet, Text, Button, TextInput } from 'react-native'

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.loginContainer}>
        <TextInput style={styles.login} placeholder='Username' />
        <TextInput style={styles.login} placeholder='Password' />
      </View>
      <Button
        title='Login'
        onPress={() => navigation.navigate('Home')}
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
  loginContainer: {
    // flexDirection: 'row'
  },
  login: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 5
  }
})

export default LoginScreen
