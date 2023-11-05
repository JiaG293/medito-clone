import * as React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const ItemCourseHome = ({ title, subtitle, image, id }) => {
    return (
        <View style={styles.container} key={id}>
            <Pressable
                android_ripple={{ color: 'rgba(187, 187, 187, 1)', borderless: false }}
                onPress={() => { }}
                style={({ pressed }) => [
                    {
                        borderRadius: 10,
                        backgroundColor: pressed ? 'rgba(187, 187, 187, 1)' : 'rgba(34, 35, 39, 0.84)',
                    },
                    styles.pressable,
                ]}
            >
                <View style={styles.image} source={image}></View>
                <View style={styles.content}>
                    <Text ellipsizeMode='tail' numberOfLines={2} style={styles.title}>{title}</Text>
                    <Text ellipsizeMode='tail' numberOfLines={2} style={styles.subtitle}>{subtitle}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        margin: 10,
        width: 120,
        height: 130,

    },
    pressable: {
        borderRadius: 10,
        paddingRight: 10,
        elevation: 5,
        width: 120,
    },
    image: {
        width: 120,
        height: 120,
        backgroundColor: 'rgba(45, 252, 171, 0.3)',
        borderRadius: 5,
    },
    content: {
        width: 120,
        padding: 5,
        height: 80,

    },
    title: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        color: '#ffffff'

    },
    subtitle: {
        fontFamily: 'sans-serif',
        color: '#9c9c9c'


    },
})

export default ItemCourseHome;