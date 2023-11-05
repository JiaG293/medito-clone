import * as React from 'react'
import { Pressable, SafeAreaView } from 'react-native'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function PressableCustom({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Pressable
                android_ripple={{color: 'rgba(67, 66, 66, 0.2)', borderless: false, foreground: true}}
                onPress={() => { }}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? 'rgba(67, 66, 66, 0.8)' : 'linear-gradient(90deg, rgba(117,233,200,0.7543859649122807) 0%, rgba(0,212,255,1) 100%)',
                    },
                    styles.wrapperCustom,
                ]}
            >
                <View style={styles.buttonRow}>
                    <Image style={styles.image} source={require('../assets/50x50.png')}></Image>
                    <Text>DailyMeditaion</Text>
                </View>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        flex: 1,
        resizeMode: 'contain',
    },
    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: -1,
    },
    
})