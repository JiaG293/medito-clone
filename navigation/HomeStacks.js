import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import DailyMeditation from '../screens/DailyMeditation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Sleep from '../screens/Sleep';
import Details from '../screens/Details';
import Downloads from '../screens/Downloads';
import Timer from '../screens/Timer';
import PressableCustom from '../components/PressableCustom';
import Player from '../screens/Player';
/* 
import  from '../screens/';
import  from '../screens/'; */


const Stack = createNativeStackNavigator();

export default function HomeStacks({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Home" // khoi tao route "Danh sách công việc"
            backBehavior="history"
        >

            <Stack.Screen
                options={({ navigation, route }) => ({
                    headerRight: (() => (<PressableCustom
                        colorRiple='rgba(187, 187, 187, 1)'
                        onPress={() => { }}
                    >
                    </PressableCustom>))
                })}
                name="Home"
                component={Home}
            />
            <Stack.Screen name="Daily Meditation" component={DailyMeditation} />
            <Stack.Screen name="Downloads" component={Downloads} />
            <Stack.Screen name="Sleep" component={Sleep} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Timer" component={Timer} />
            <Stack.Screen name="Player" component={Player} />


        </Stack.Navigator>
    );
}
