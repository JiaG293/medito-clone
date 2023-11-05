import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function Stat({ count, title, onPress }) {
    return (
        <View style={styles.container}>
            <Pressable
                android_ripple={{ color: 'rgba(187, 187, 187, 1)', borderless: false }}
                onPress={onPress}
                style={({ pressed }) => [
                    {
                        borderRadius: 10,
                        backgroundColor: pressed ? 'rgba(187, 187, 187, 1)' : 'rgba(34, 35, 39, 0.84)',
                    },
                    styles.pressable,
                ]}
            >
                <View style={styles.content}>
                    <Text style={styles.title}>{count}</Text>
                    <Text numberOfLines={2} style={styles.subtitle}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: 80,
        maxHeight: 150,
        borderRadius: 10,
    },
    pressable: {
        borderRadius: 10,
    },
    content: {
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#ffffff',
        marginBottom: 20,
    },
    subtitle: {
        fontFamily: 'sans-serif',
        color: '#9c9c9c',
        textAlign: 'center',
    },
})