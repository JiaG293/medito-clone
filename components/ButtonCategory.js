import * as React from 'react'
import { Image, StyleSheet, Text, View, Pressable} from 'react-native'

const ButtonCategory =  ({ title, image, onPress }) => {
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
                <View style={styles.buttonRow}>
                    <Image style={styles.image} source={{uri: image}}></Image>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        padding: 5,
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pressable: {
        borderRadius: 10,
        paddingRight: 10,
        elevation: 5,
    },
    text: {
        width: 100,
        fontFamily: "sans-serif",
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
        color: '#ffffff',
    },
    wrapperCustom: {

    }

})

export default ButtonCategory