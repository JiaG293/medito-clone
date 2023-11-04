import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import Packs from '../screens/Packs'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home" // khoi tao route "Danh sách công việc"
                backBehavior="history">
                <Tab.Screen
                    options={({ navigation, route }) => ({
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home-outline" color={color} size={26} />
                        ),
                    })} name="Home" component={Home} />

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
