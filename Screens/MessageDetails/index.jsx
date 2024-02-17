import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

export const MessageDetails = ({route, navigation}) => {

  const {item} = route.params

  useEffect(() => {
    navigation.setOptions({title: item.fullname})
  })

  return (
    <View>
      <Text>{item.lastMessage}</Text>
    </View>
  )
}