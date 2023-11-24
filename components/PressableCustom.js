import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Pressable, SafeAreaView } from 'react-native'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function PressableCustom({ onPress, colorRiple, colorButton, colorButtonPressed, icon, colorIcon, colorIconPressed, sizeIcon, onPress1, onPress2, onPress3, onPress4, onPress5, onPress6, onPress7 }) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const handlePress = () => {
        onPress();
        toggleMenu();
    };


    return (
        <SafeAreaView style={styles.container}>
            <Pressable
                android_ripple={{ color: { colorRiple }, borderless: false }}
                onPress={handlePress}
                style={({ pressed }) => [
                    {
                        borderRadius: 10,
                        backgroundColor: pressed ? { colorButtonPressed } : colorButton,
                    },
                    styles.pressable,
                ]}
            >

                {({ pressed }) => (pressed ?
                    <MaterialCommunityIcons
                        name={icon ? icon : 'dots-vertical'}
                        color={colorIcon ? colorIconPressed : 'rgba(0, 241, 149, 0.89)'}
                        size={sizeIcon ? sizeIcon : 26}

                    /> :
                    <MaterialCommunityIcons
                        name={icon ? icon : 'dots-vertical'}
                        color={colorIcon ? colorICon : '#ffffff'}
                        size={sizeIcon ? sizeIcon : 26}

                    />)}
            </Pressable>
            {/* <FloatingMenu isVisible={isMenuVisible} toggleMenu={toggleMenu} /> */}
            <View style={[styles.container1, { display: isMenuVisible ? 'flex' : 'none' }]}>
            <View style={styles.menu}>

                <Pressable
                    android_ripple={{ color: 'rgba(187, 187, 187, 1)', borderless: false }}
                    onPress={onPress1}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(187, 187, 187, 0.3)' : 'rgba(34, 35, 39, 1)',
                        }
                    ]}
                >
                    {({ pressed }) => (
                        <Text style={[styles.textItem, { color: pressed ? '#000000' : '#ffffff' }]}
                        >
                            About Medito
                        </Text>)}
                </Pressable>

                <Pressable
                    android_ripple={{ color: 'rgba(187, 187, 187, 1)', borderless: false }}
                    onPress={onPress2}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(187, 187, 187, 0.3)' : 'rgba(34, 35, 39, 1)',
                        }
                    ]}
                >
                    {({ pressed }) => (
                        <Text style={[styles.textItem, { color: pressed ? '#000000' : '#ffffff' }]}
                        >
                            Blog
                        </Text>)}
                </Pressable>

                <Pressable
                    android_ripple={{ color: 'rgba(187, 187, 187, 1)', borderless: false }}
                    onPress={onPress3}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(187, 187, 187, 0.3)' : 'rgba(34, 35, 39, 1)',
                        }
                    ]}
                >
                    {({ pressed }) => (
                        <Text style={[styles.textItem, { color: pressed ? '#000000' : '#ffffff' }]}
                        >
                            Email us
                        </Text>)}
                </Pressable>

                <Pressable
                    android_ripple={{ color: 'rgba(187, 187, 187, 1)', borderless: false }}
                    onPress={onPress4}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(187, 187, 187, 0.3)' : 'rgba(34, 35, 39, 1)',
                        }
                    ]}
                >
                    {({ pressed }) => (
                        <Text style={[styles.textItem, { color: pressed ? '#000000' : '#ffffff' }]}
                        >
                            FAQ
                        </Text>)}
                </Pressable>

                <Pressable
                    android_ripple={{ color: 'rgba(187, 187, 187, 1)', borderless: false }}
                    onPress={onPress5}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(187, 187, 187, 0.3)' : 'rgba(34, 35, 39, 1)',
                        }
                    ]}
                >
                    {({ pressed }) => (
                        <Text style={[styles.textItem, { color: pressed ? '#000000' : '#ffffff' }]}
                        >
                            Service status
                        </Text>)}
                </Pressable>

                <Pressable
                    android_ripple={{ color: 'rgba(187, 187, 187, 1)', borderless: false }}
                    onPress={onPress6}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(187, 187, 187, 0.3)' : 'rgba(34, 35, 39, 1)',
                        }
                    ]}
                >
                    {({ pressed }) => (
                        <Text style={[styles.textItem, { color: pressed ? '#000000' : '#ffffff' }]}
                        >
                            Join us
                        </Text>)}
                </Pressable>

                <Pressable
                    android_ripple={{ color: 'rgba(187, 187, 187, 1)', borderless: false }}
                    onPress={onPress7}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(187, 187, 187, 0.3)' : 'rgba(34, 35, 39, 1)',
                        }
                    ]}
                >
                    {({ pressed }) => (
                        <Text style={[styles.textItem, { color: pressed ? '#000000' : '#ffffff' }]}
                        >
                            Donate
                        </Text>)}
                </Pressable>

                <Pressable
                    android_ripple={{ color: 'rgba(187, 187, 187, 1)', borderless: false }}
                    onPress={toggleMenu}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(187, 187, 187, 0.3)' : 'rgba(34, 35, 39, 1)',
                        }
                    ]}
                >
                    {({ pressed }) => (
                        <Text style={[styles.textItem, { color: pressed ? '#000000' : '#ffffff' }]}
                        >
                            Close
                        </Text>)}
                </Pressable>
            </View>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 30,
        height: 30,

    },
    pressable: {
        borderRadius: 10,
        paddingRight: 10,
        elevation: 5,
        width: 30,
        height: 30,
    },
    container1: {
        position: 'absolute',
        top: 20,
        right: 20,
        width: 120,
    },
    menu: {
        backgroundColor: 'rgba(34, 35, 39, 1)',
        borderRadius: 5,
        elevation: 3,

    },
    textItem: {
        fontFamily: 'sans-serif',
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500',
        padding: 10
    },

})