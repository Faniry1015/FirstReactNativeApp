import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import FaniryImg from '../../assets/images/faniry.jpg'
import { dashboardStyles } from './style.jsx'
import { ServiceOfferItem } from '../../Components/ServiceOfferItem'
import { FakeService } from '../../fakeData/fakeService.jsx'
import { FakeServiceOffer } from '../../fakeData/fakeServiceOffer.jsx'
import { FakeMission } from '../../fakeData/fakeMission.jsx'
import { ServiceItem } from '../../Components/ServiceItem'
import { MissionItem } from '../../Components/MissionItem'


export const Home = () => {
    return (
        <ScrollView>
            {/* Début du header */}
            <View style={dashboardStyles.header}>
                <Text style={dashboardStyles.userName}>Faniriantsoa RANDRIAHARIMINO</Text>
                <Image source={FaniryImg} style={dashboardStyles.userImg} />
            </View>
            {/* Fin du header */}

            {/* Mission */}
            <View style={dashboardStyles.title}>
                <Text style={dashboardStyles.titleBold}>Missions de la DRAE</Text>
            </View>
            <FlatList
                data={FakeMission}
                key={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={dashboardStyles.scrollableList}
                renderItem={({ item }) => {
                    return (
                        <MissionItem item={item} />
                    )
                }} />
            {/* Fin Liste des activités */}

            {/* Liste des Services */}
            <View style={dashboardStyles.title}>
                <Text style={dashboardStyles.titleBold}>Services au sein de la DRAE Vakinankaratra ?</Text>
            </View>
            <FlatList
                data={FakeService}
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
            <View style={dashboardStyles.title_space_between}>
                <Text style={dashboardStyles.titleBold}>Que recherchez vous à faire ?</Text>
                <TouchableOpacity style={dashboardStyles.title}>
                    <Text style={dashboardStyles.link}>Afficher tout</Text>
                </TouchableOpacity>
            </View>
            <View style={dashboardStyles.serviceOfferContainer}>
                {FakeServiceOffer.map((service, index) => {
                    return <TouchableOpacity key={service.id} style={dashboardStyles.serviceCard}>
                    <Image source={require('./../../assets/images/servicesOfferts/pi.jpg')} style={dashboardStyles.serviceImg} />
                        <Text>{service.libelle}</Text>
                    </TouchableOpacity>
                })}
            </View>

            {/* Fin Liste des services offerts */}
        </ScrollView>
    )
}