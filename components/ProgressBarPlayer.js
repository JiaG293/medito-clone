import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TrackPlayer, { useProgress } from 'react-native-track-player';

export default function ProgressBarPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const { position, duration } = useProgress(1000);
    const startMusic = async () => {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.add({
            id: '112',
            url: `../assets/Odd,isn't It - Arti.mp3`,
            title: `Odd,isn't It`,
            artist: 'Arti',
        });
        await TrackPlayer.play();
        setIsPlaying(true);
    };

    const stopMusic = async () => {
        await TrackPlayer.stop();
        setIsPlaying(false);
    };

    useEffect(() => {
        updateProgressBar(position, duration);
    }, [position, duration]);

    const updateProgressBar = (currentTime, totalDuration) => {
        const progress = currentTime / totalDuration;
    };

    return (
        <View style={styles.container}>
            <Text>{`Current Time: ${position} / Duration: ${duration}`}</Text>
            <View style={styles.progressBar}>
                <View style={{ width: `${position / duration * 100}%`, height: '100%', backgroundColor: 'blue' }} />
            </View>
            <View>
                {isPlaying ? (
                    <Text onPress={stopMusic}>Pause</Text>
                ) : (
                    <Text onPress={startMusic}>Play</Text>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    progressBar: {
        height: 10,
        backgroundColor: 'lightgray',
        marginTop: 10,
    },
});

