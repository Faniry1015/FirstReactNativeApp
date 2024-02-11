import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Home } from '../Home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Messages } from '../Messages';
import { Settings } from '../Settings';

export const BottomTabs = () => {
    // const Tab = createBottomTabNavigator(); // variante moin stylisé que celui en bas
    const Tab = createMaterialBottomTabNavigator()

    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="tabs_home"
                component={Home}
                options={{
                    tabBarLabel: 'Tableau de bord',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="messages"
                component={Messages}
                options={{
                    tabBarLabel: 'Messages',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chat" color={color} size={size} />
                    ),
                    //   tabBarBadge: 3,
                }}
            />
            <Tab.Screen
                name="settings"
                component={Settings}
                options={{
                    tabBarLabel: 'Paramètres',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-settings-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}