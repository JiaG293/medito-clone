import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function TextLink({ text, link, onPress }) {
    const handlePress = async () => {
        const url = link;
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log("Failed opening URL");
        }
    };
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.textLink}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textLink: {
        fontFamily: 'sans-serif',
        color: '#0A43C7',
        fontWeight: '700',
        fontSize: 16,

    },
})