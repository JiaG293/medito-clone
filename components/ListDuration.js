import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import PressableTimer from './PressableTimer'



export default function ListDuration({ data, onPress }) {
    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>PICK A NARRATOR & DURATION</Text>
            {data.map((elem) => (
                <View style={styles.timerRow}>
                    <Text style={styles.textTimerRow}>{elem.author}</Text>
                    <View style={styles.listTimerRow}>
                        {[...(elem.dataTime)].map((elem) => <PressableTimer title={elem.title} value={elem.value}></PressableTimer>)}
                    </View>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(34, 35, 39, 0.84)',
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    tittle: {
        fontFamily: 'sans-serif',
        color: '#9c9c9c',
        fontSize: 16,
        fontWeight: '700',
        marginVertical: 10,
    },
    timerRow: {
        flex: 1,
        marginVertical: 10,

    },
    textTimerRow: {
        fontFamily: 'sans-serif',
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 16,
    },
    listTimerRow: {
        flexDirection: 'row',
        marginTop: 10,

    },
    pressable: {
        borderRadius: 20,
        elevation: 5,
        width: 70,
        height: 50,
        marginHorizontal: 10,
        justifyContent: 'center'
    },
    textTitleTimer: {
        fontFamily: 'sans-serif',
        color: '#ffffff',
        fontSize: 16,
        alignSelf: 'center',
    },

})