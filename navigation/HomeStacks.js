import React, { useState } from 'react';
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
import { Linking, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import About from '../screens/About';
/* 
import  from '../screens/';
import  from '../screens/'; */


const Stack = createNativeStackNavigator();

export default function HomeStacks({ navigation, route }) {

    const handlePressLink = async (link) => {
        const url = link;
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log("Failed to open URL");
        }
    };

    return (
        <Stack.Navigator
            initialRouteName="Home"
            backBehavior="history"
        >

            <Stack.Screen
                options={({ navigation, route }) => ({
                    headerRight: (() => (<PressableCustom
                        colorRiple='rgba(187, 187, 187, 1)'
                        onPress={() => console.log('toggle menu')}
                        onPress1={() => navigation.navigate('About')}
                        onPress2={() => handlePressLink('https://meditofoundation.org/blog')}
                        onPress3={() =>  handlePressLink('mailto:hello@meditofoundation.org')}
                        onPress4={() => handlePressLink('https://meditofoundation.org/privacy')}
                        onPress5={() => handlePressLink('https://meditofoundation.org/terms-of-service')}
                        onPress6={() => handlePressLink('https://meditofoundation.org/volunteer')}
                        onPress7={() => handlePressLink('https://meditofoundation.org/donate')}
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
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>

    );
}


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    menu: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
});
