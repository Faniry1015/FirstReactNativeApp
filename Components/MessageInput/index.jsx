import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const MessageInput = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Ecrire ici...' />
            <TouchableOpacity>
                <MaterialCommunityIcons name='send' style={styles.send} size={24} />
            </TouchableOpacity>
        </View>
    )
}