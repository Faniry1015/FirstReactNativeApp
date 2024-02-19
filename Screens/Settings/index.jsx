import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { styles } from './style'
import { fakeSettings } from '../../fakeData/fakeSettings'
import { SettingItem } from '../../Components/SettingItem'

export const Settings = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('./../../assets/images/faniry.jpg')} style={styles.img} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Faniriantsoa RANDRIAHARIMINO</Text>
          <Text style={styles.userEmail}>frandriaharimino@yahoo.com</Text>
          <Text>+241 34 08 717 66</Text>
        </View>
      </View>

      {/* Fin Header */}

      <FlatList
        data={fakeSettings}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <SettingItem item={item}/>
        }}
      />
      </View>
      )
}