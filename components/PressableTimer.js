import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function PressableTimer({onPress, title, value}) {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
      };

    return (
        <Pressable
            android_ripple={{ color: 'rgba(187, 187, 187, 1)', borderless: false }}
            onPress={handleToggle}
            style={({ pressed }) => [
                {
                    borderRadius: 10,
                    backgroundColor: isOn ? '#ffffff' : 'rgba(34, 35, 39, 0.84)',
                },
                styles.pressable,
            ]}
        >
            {({ pressed }) => (
                <Text style={[styles.textTitleTimer, { color: isOn ? '#000000' : '#ffffff' }]}
                >
                    {title}
                </Text>)}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(34, 35, 39, 0.84)',
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    tittle: {
        fontFamily: 'sans-serif',
        color: '#9c9c9c',
        fontSize: 16,
        fontWeight: '700',
        marginVertical: 10,
    },
    timerRow: {
        flex: 1,
        marginVertical: 10,

    },
    textTimerRow: {
        fontFamily: 'sans-serif',
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 16,
    },
    listTimerRow: {
        flexDirection: 'row',
        marginTop: 10,

    },
    pressable: {
        borderRadius: 20,
        elevation: 5,
        width: 70,
        height: 50,
        marginHorizontal: 10,
        justifyContent: 'center'
    },
    textTitleTimer: {
        fontFamily: 'sans-serif',
        color: '#ffffff',
        fontSize: 16,
        alignSelf: 'center',
    },
})