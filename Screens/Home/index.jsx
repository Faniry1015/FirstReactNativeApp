import { View, Text, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import FaniryImg from '../../assets/images/faniry.jpg'
import { dashboardStyles } from './style.jsx'
import { FakeActivity } from '../../fakeData/fakeActivity.jsx'
import { ActivityItem } from '../../Components/ActivityItem/index.jsx'
import { ServiceOfferItem } from '../../Components/ServiceOfferItem/index.jsx'
import { FakeServiceOffer } from '../../fakeData/fakeServiceOffer.jsx'
import { ServiceItem } from '../../Components/ServiceItem/index.jsx'


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
            <View style={dashboardStyles.title}>
                <Text style={dashboardStyles.titleBold}>Services au sein de la DRAE Vakinankaratra ?</Text>
            </View>
            <FlatList
                data={FakeActivity}
                key={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={dashboardStyles.scrollableList}
                renderItem={({ item }) => {
                    return (
                        <ActivityItem item={item} />
                    )
                }} />
            {/* Fin Liste des activités */}

            {/* Liste des Services */}
            <View style={dashboardStyles.title}>
                <Text style={dashboardStyles.titleBold}>Services au sein de la DRAE Vakinankaratra ?</Text>
            </View>
            <FlatList
                data={FakeActivity}
                key={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={dashboardStyles.scrollableList}
                renderItem={({ item }) => {
                    return (
                        <ServiceItem item={item} />
                    )
                }} />
            {/* Fin Liste des Services*/}

            {/* Liste des services offerts */}
            <View style={dashboardStyles.title}>
                <Text style={dashboardStyles.titleBold}>Que recherchez vous à faire ?</Text>
            </View>
            <FlatList
                data={FakeServiceOffer}
                key={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={dashboardStyles.scrollableList}
                renderItem={({ item }) => {
                    return (
                        <ServiceOfferItem item={item} />
                    )
                }} />
            {/* Fin Liste des services offerts */}
        </ScrollView>
    )
}