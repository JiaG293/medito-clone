import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const ItemDetails = ({ title, subtitle, image, onPress, id, icon, onLongPress, selected }) => {

    return (
        <View style={styles.container} key={id}>
            <Pressable
                android_ripple={{ color: 'rgba(187, 187, 187, 1)', borderless: false }}
                onLongPress={onLongPress}
                delayLongPress={1000}
                onPress={onPress}
                style={({ pressed }) => [
                    {
                        borderRadius: 10,
                        backgroundColor: pressed ? 'rgba(187, 187, 187, 1)' : 'rgba(34, 35, 39, 0.84)',
                    },
                    styles.pressable,
                ]}
            >{/* check */}
                <View style={styles.image} source={image}>
                    <MaterialCommunityIcons name={selected ? 'check' : (icon ? icon : 'play-circle')} color='#ffffff' size={28}></MaterialCommunityIcons>
                </View>
                <View style={styles.content}>
                    <Text
                        ellipsizeMode='tail'
                        numberOfLines={2}
                        style={styles.title}
                    >
                        {title}
                    </Text>
                    <Text
                        ellipsizeMode='tail'
                        numberOfLines={2}
                        style={styles.subtitle}
                    >
                        {subtitle}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 10,
    },
    pressable: {
        borderRadius: 10,
        elevation: 5,
        flexDirection: 'row',
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        backgroundColor: 'rgba(45, 252, 171, 0.3)',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
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

export default ItemDetails;