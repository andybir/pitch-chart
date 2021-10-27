import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  FlatList,
} from 'react-native'

import PitcherTile from '../components/PitcherTile'
import { PITCHERS } from '../data/dummy-data'

const renderPitcherItem = (itemData) => {
  return (
    <PitcherTile
      name={itemData.item.name}
      birthday={itemData.item.birthday}
      handedness={itemData.item.handedness}
    />
  )
}

const PitchersScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => {
          item.id
        }}
        data={PITCHERS}
        renderItem={renderPitcherItem} numColumns={1}
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

export default PitchersScreen
