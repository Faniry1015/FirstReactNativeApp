import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { styles } from './style'

export const MessageList = ({ item }) => {
  return (
    <TouchableOpacity style={styles.messageContainer}>
      <Image source={require('./../../assets/images/faniry.jpg')} style={styles.messageImg} />
      <View style={styles.messageInfo}>
        <View style={styles.dateName}>
          <Text style={styles.name}>{item.fullname}</Text>
          <Text>{item.date}</Text>
        </View>
        <Text>{item.lastMessage}</Text>
      </View>
    </TouchableOpacity>
  )
}