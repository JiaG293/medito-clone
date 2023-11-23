import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Pressable, SafeAreaView } from 'react-native'
import { Image, StyleSheet, Text, View } from 'react-native'
import FloatingMenu from './FloatingMenu'

export default function PressableCustom({ onPress, colorRiple, colorButton, colorButtonPressed, icon, colorIcon, colorIconPressed, sizeIcon }) {
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
            <FloatingMenu isVisible={isMenuVisible} toggleMenu={toggleMenu} />
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

})