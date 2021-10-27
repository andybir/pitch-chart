import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const EventTile = (props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.tileItem}>
        <Text style={styles.text}>Date: {props.date}</Text>
        <Text style={styles.text}>Stadium: {props.location}</Text>
        <Text style={styles.text}>Scout: {props.chartedBy}</Text>
        <Text style={styles.text}>Batter: {props.batter}</Text>
        <Text style={styles.text}>Pitcher: {props.pitcher}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  tileItem: {
    width: 320,
    padding: 20,
  },
  container: {
    flex: 1,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
  },
})

export default EventTile
