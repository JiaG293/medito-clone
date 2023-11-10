import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import PressableTimer from './PressableTimer'


/* <View style={styles.listTimerRow}>
            <PressableTimer title='15 min' value='15'></PressableTimer>
            <PressableTimer title='15 min' value='15'></PressableTimer>
            <PressableTimer title='15 min' value='15'></PressableTimer>
        </View> */

        
export default function FlatListRowDuration({ data }) {
    return (
        <SafeAreaView>
            <FlatList
                horizontal={true}
                data={data}
                renderItem={({ item }) => (
                    <PressableTimer title={item.title + " min"} value={item.value}></PressableTimer>
                )}
                keyExtractor={item => item.id}
                initialNumToRender={4}
            >
            </FlatList>
        </SafeAreaView>
      
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