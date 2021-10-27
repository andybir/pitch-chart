import React from 'react'
import {
  View,
  StyleSheet,
  
  FlatList,
} from 'react-native'

import BatterTile from '../components/BatterTile'
import { BATTERS } from '../data/dummy-data'

const renderBatterItem = (itemData) => {
  return (
    <BatterTile
      name={itemData.item.name}
      birthday={itemData.item.birthday}
      handedness={itemData.item.handedness}
    />
  )
}

const BattersScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => {
          item.id
        }}
        data={BATTERS}
        renderItem={renderBatterItem}
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

export default BattersScreen
