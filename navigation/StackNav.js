import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import DailyMeditation from '../screens/DailyMeditation';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function StackNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home" // khoi tao route "Danh sách công việc"
                backBehavior="history"
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Daily Meditation" component={DailyMeditation} />
                <Stack.Screen name="Downloads" component={Downloads} />
                <Stack.Screen name="Sleep" component={Sleep} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="Home" component={Home} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}
