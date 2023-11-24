import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import SLEEPFOLDER from '../data/SleepFolderData'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function ItemFolder({ onPress, title, id  }) {
    return (
        <View style={styles.container} key={id}>
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
                <View style={styles.image}>
                    <MaterialCommunityIcons name='folder' color='#ffffff' size={50}></MaterialCommunityIcons>
                </View>
                <View style={styles.content}>
                    <Text
                        ellipsizeMode='tail'
                        numberOfLines={2}
                        style={styles.title}
                    >
                        {title}
                    </Text>
                </View>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
    },
    pressable: {
        borderRadius: 10,
        elevation: 5,
        flexDirection: 'row',
    },
    image: {
        width: 80,
        height: 80,
        backgroundColor: 'rgba(45, 252, 171, 0.3)',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        padding: 10,
        height: 80,
        justifyContent: 'space-around',

    },
    title: {
        fontFamily: 'sans-serif',
        fontWeight: '700',
        fontSize: 16,
        width: null,
        color: '#ffffff',
    },
    subtitle: {
        fontFamily: 'sans-serif',
        color: '#9c9c9c',
        fontSize: 12,
    },
})