import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function Quote({content, author, onPress}) {
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
                <Text style={styles.label}>TODAY'S QUOTE</Text>
                <View style={styles.content}>
                    <Text style={styles.title}>"{content}" -
                        <Text style={styles.subtitle}> {author}</Text>
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        padding: 10,
        paddingVertical: 10,
    },
    pressable: {
        borderRadius: 10,
        padding: 10,
    },
    content: {
        padding: 10,
        
    },
    title: {
        fontFamily: 'sans-serif',
        fontSize: 13,
        color: '#9c9c9c',
        fontStyle: 'italic',
    },
    subtitle: {
        fontFamily: 'sans-serif',
        fontSize: 13,
        color: '#9c9c9c',
        fontStyle: 'italic',
    },
    label: {
        fontFamily: 'sans-serif',
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 18,
        textAlign: 'left'
    }
})