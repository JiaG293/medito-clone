import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import DailyMeditation from '../screens/DailyMeditation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Packs from '../screens/Packs';
import Details from '../screens/Details';
import Player from '../screens/Player';
import PressableCustom from '../components/PressableCustom';
/* 
import  from '../screens/';
import  from '../screens/'; */


const Stack = createNativeStackNavigator();

export default function PacksStacks({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Packs"
            backBehavior="history"
        >

            <Stack.Screen
                name="Packs"
                component={Packs}
            />

            <Stack.Screen
                name="Details"
                component={Details}
            />

            <Stack.Screen
                name="Player"
                component={Player}
            />
        </Stack.Navigator>
    );
}
