import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  FlatList,
} from 'react-native'

import EventTile from '../components/EventTile'
import { EVENTS } from '../data/dummy-data'

const renderEventItem = (itemData) => {
  return (
    <EventTile
      date={itemData.item.date}
      location={itemData.item.location}
      chartedBy={itemData.item.chartedBy}
      batter={itemData.item.batter}
      pitcher={itemData.item.pitcher}
    />
  )
}

const EventsScreen = ({ navigation, props }) => {
  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => item.eventId}
        data={EVENTS}
        renderItem={renderEventItem}
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

export default EventsScreen
