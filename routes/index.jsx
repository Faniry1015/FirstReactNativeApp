import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabs } from '../Screens/Tabs';

export const Routes = () => {


  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}