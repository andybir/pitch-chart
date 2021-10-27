import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const PitcherTile = (props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.tileItem}>
        <Text style={styles.text}>Name: {props.name}</Text>
        <Text style={styles.text}>Born: {props.birthday}</Text>
        <Text style={styles.text}>Throws: {props.handedness}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  tileItem: {
    width: 320,
    padding: 10
  },
  container: {
    flex: 1,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
})

export default PitcherTile
