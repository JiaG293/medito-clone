import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Pressable } from 'react-native'
import PressableTimer from './PressableTimer'
import FlatListRowDuration from './FlatListRowDuration'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function DownloadTimer({ data, onPress, author, time }) {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
        onPress
    };

    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>DOWNLOAD</Text>
            <View style={styles.downloadButton}>
                <Text style={styles.textTitleTimer}>{author + " - " + time}</Text>
                <Pressable onPress={handleToggle} style={{ marginLeft: 50 }}>
                    {() => (isOn ? <MaterialCommunityIcons name="close-circle" color='#ffffff' size={26} />
                        : <MaterialCommunityIcons name="download-circle-outline" color='#ffffff' size={26} />
                    )}
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(34, 35, 39, 0.84)',
        borderRadius: 10,
        marginHorizontal: 10,
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
    },
    downloadButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10
    }

})