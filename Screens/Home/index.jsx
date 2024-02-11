import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import FaniryImg from '../../assets/images/faniry.jpg'
import { dashboardStyles } from './style.jsx'

export const Home = () => {
    return (
        <ScrollView>
        {/* Début du header */}
            <View style={dashboardStyles.header}>
                <Text>Faniriantsoa RANDRIAHARIMINO</Text>
                <Image source={FaniryImg} />
            </View>

        {/* Fin du header */}
        </ScrollView>
    )
}