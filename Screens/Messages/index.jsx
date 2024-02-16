import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { fakeChat } from '../../fakeData/fakeChat'
import { MessageList } from '../../Components/MessageList'
import { styles } from './style'

export const Messages = () => {
  return (
    <FlatList 
    data={fakeChat} 
    keyExtractor={item => item.id} 
    showsVerticalScrollIndicator={false}
    style={styles.root}
    renderItem={({item}) => {
      return <MessageList item={item} />
    }}/>
  )
}