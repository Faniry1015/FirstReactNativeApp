import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import FaniryImg from '../../assets/images/faniry.jpg'
import { dashboardStyles } from './style.jsx'
import { FakeActivity } from '../../fakeData/fakeActivity.jsx'
import AGRISVG from '../../assets/images/svg/planting.svg'

export const Home = () => {
    return (
        <ScrollView>
            {/* Début du header */}
            <View style={dashboardStyles.header}>
                <Text style={dashboardStyles.userName}>Faniriantsoa RANDRIAHARIMINO</Text>
                <Image source={FaniryImg} style={dashboardStyles.userImg} />
            </View>
            {/* Fin du header */}

            {/* Liste des activités */}
            <FlatList
                data={FakeActivity}
                key={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={dashboardStyles.scrollableList}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={dashboardStyles.scrollableListItem}>
                                <AGRISVG height={60} width={60} />
                            <Text style={dashboardStyles.mainText}>{item.mainText}</Text>
                            <Text style={dashboardStyles.subText}>{item.subText}</Text>
                        </TouchableOpacity>
                    )
                }} />
            {/* Fin Liste des activités */}
        </ScrollView>
    )
}