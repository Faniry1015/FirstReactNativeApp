import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import AGRISVG from '../../assets/images/svg/planting.svg'
import { styles } from './style'

export const MissionItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.scrollableListItem}>
      <View style={styles.imgContainer}>
        <AGRISVG height={60} width={60} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>{item.mainText}</Text>
      </View>
    </TouchableOpacity>
  )
}
