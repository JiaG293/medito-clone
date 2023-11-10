import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import PressableTimer from './PressableTimer'
import FlatListRowDuration from './FlatListRowDuration'

export default function ListAuthorDuration({ data, onPress }) {
    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>PICK A NARRATOR & DURATION</Text>
            {data.map((elem) => (
                <View style={styles.timerRow} key={elem.idAuthor}>
                    <Text style={styles.textTimerRow}>{elem.author}</Text>
                    <FlatListRowDuration data={elem.dataTime}></FlatListRowDuration>
                </View>
            ))}

            {/* <View style={styles.timerRow} key={data.idAuthor}>
                <Text style={styles.textTimerRow}>jiag</Text>
                <FlatListRowDuration data={data.dataTime}></FlatListRowDuration>
                <View style={styles.listTimerRow}>
                    <PressableTimer title='15 min' value='15'></PressableTimer>
                    <PressableTimer title='15 min' value='15'></PressableTimer>
                    <PressableTimer title='15 min' value='15'></PressableTimer>
                </View>
            </View> */}

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