import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { fakeConversation } from '../../fakeData/fakeConversation'
import { Message } from '../../Components/Message'
import { MessageInput } from '../../Components/MessageInput'

export const MessageDetails = ({route, navigation}) => {

  const {item} = route.params

  useEffect(() => {
    navigation.setOptions({title: item.fullname})
  })

  return (
    <View style={{flex: 1}}>
      <FlatList 
      data={fakeConversation} 
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return <Message item={item} />
      }}
      />

      <MessageInput />
    </View>
  )
}