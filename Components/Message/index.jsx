import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export const Message = ({item}) => {
  return (
    <View style={styles.container}>
      <Text>{item.message}</Text>
      <Text>{dayjs(item.createAt).fromNow(true)}</Text>
    </View>
  )
} 