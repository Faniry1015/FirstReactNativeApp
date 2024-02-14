import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import AGRISVG from '../../assets/images/svg/planting.svg'
import { styles } from './style'

export const ServiceItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.scrollableListItem}>
      <AGRISVG height={60} width={60} />
      <Text style={styles.mainText}>{item.mainText}</Text>
      <Text style={styles.subText}>{item.subText}</Text>
    </TouchableOpacity>
  )
}
