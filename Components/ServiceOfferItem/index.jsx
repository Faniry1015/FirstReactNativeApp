import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './style'

export const ServiceOfferItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View >
        <Image source={require(`./../../assets/images/servicesOfferts/pi.jpg`)} style={styles.itemImg}/>
        <Text style={styles.mainText}>{item.libelle}</Text>
      </View>
    </TouchableOpacity>
  )
}