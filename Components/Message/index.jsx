import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { COLORS } from '../../Tools/constantes'

dayjs.extend(relativeTime)

export const Message = ({ item }) => {
  const isMine = () => {
    return item.user.id === 1
  }
  return (
    <View style={[styles.container,
    {
      backgroundColor: isMine() ? COLORS.main : 'white',
      alignSelf: isMine() ? 'flex-end' : 'flex-start'
    },
    ]}>
      <Text style={{
        color: isMine() ? 'white' : null,
      }}>
        {item.message}
      </Text>
      <Text style={{
        color: isMine() ? 'white' : null,
      }}>
        {dayjs(item.createAt).fromNow(true)}
      </Text>
    </View>
  )
} 