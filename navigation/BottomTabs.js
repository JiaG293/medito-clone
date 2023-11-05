import React, { useEffect } from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme, useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Pressable, useColorScheme } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Packs from '../screens/Packs'
import PressableCustom from '../components/PressableCustom'
import HomeStacks from './HomeStacks';

const Tab = createBottomTabNavigator();
const lightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgba(0, 241, 149, 0.89)',
    },
};
const darkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: 'rgba(0, 241, 149, 0.89)',
    },
};

export default function BottomTabs() {
    const schemeTheme = useColorScheme();

    return (
        <NavigationContainer theme={schemeTheme === 'dark' ? lightTheme : darkTheme}>
            <Tab.Navigator
                initialRouteName="Home" // khoi tao route "Danh sách công việc"
                backBehavior="history">
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home-outline" color={color} size={26} />
                        ),
                    }} name="HomeStacks" component={HomeStacks} />

                <Tab.Screen
                    options={({ navigation, route }) => ({
                        tabBarLabel: 'Packs',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="menu" color={color} size={26} />
                        )
                    })}
                    name="Packs" component={Packs} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}



