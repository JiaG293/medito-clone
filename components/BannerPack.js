import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'

export default function BannerPack({ image, onPress, title, subtile, colorBanner }) {
    return (
        <Pressable
            android_ripple={{ color: 'rgba(187, 187, 187, 1)', borderless: false }}
            onPress={onPress}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? 'rgba(187, 187, 187, 1)' : 'rgba(34, 35, 39, 0.84)',
                },
                styles.pressable,
            ]}
        >
            <View style={styles.content}>
                <View style={styles.image}>
                    <Image
                        source={{ uri: image }}
                        style={{
                            width: 120,
                            height: 120,
                            resizeMode: 'cover',
                            flex: 1,
                        }} ></Image>
                </View>
                <Text
                    ellipsizeMode='tail'
                    numberOfLines={3}
                    style={styles.title}
                >
                    {title}
                </Text>
            </View>
            <ScrollView>
                <Text
                    ellipsizeMode='tail'
                    numberOfLines={5}
                    style={styles.subtitle}
                >
                    {subtile}
                </Text>
            </ScrollView>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pressable: {
        elevation: 5,

        flex: 1,
    },
    image: {
        width: 120,
        height: 120,
        backgroundColor: 'rgba(45, 252, 171, 0.3)',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        padding: 10,
        flexDirection: 'row',
    },
    title: {
        fontFamily: 'sans-serif',
        fontWeight: '700',
        fontSize: 18,
        width: null,
        color: '#ffffff',
        paddingLeft: 20,
        alignSelf: 'center',
    },
    subtitle: {
        fontFamily: 'sans-serif',
        color: '#9c9c9c',
        fontSize: 14,
        marginHorizontal: 10,
        marginVertical: 10,

    },
})