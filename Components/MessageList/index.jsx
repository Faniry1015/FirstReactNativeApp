import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { styles } from './style'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export const MessageList = ({ item, navigation }) => {
  return (
    <TouchableOpacity style={styles.messageContainer} onPress={() => navigation.navigate('messageDetails', {item})}>
      <Image source={require('./../../assets/images/faniry.jpg')} style={styles.messageImg} />
      <View style={styles.messageInfo}>
        <View style={styles.dateName}>
          <Text style={styles.name}>{item.fullname}</Text>
          <Text>{dayjs(item.date).fromNow(true)}</Text>
        </View>
        <Text>{item.lastMessage}</Text> 
      </View>
    </TouchableOpacity>
  )
}