import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SupportUs({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>SupportUs</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
})