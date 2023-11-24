import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, PanResponder } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ItemDownload = ({ title, author, time, imageUrl, id }) => {
    const [deleted, setDeleted] = useState(false);
    const position = new Animated.ValueXY(0, 0);

    const handleSwipe = () => {
        Animated.timing(position, {
            toValue: { x: -500, y: 0 },
            duration: 200,
            useNativeDriver: false,
        }).start(() => {
            setDeleted(true);
        });
    };

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: position.x }], { useNativeDriver: false }),
        onPanResponderRelease: (evt, gestureState) => {
            if (gestureState.dx < -200) {
                handleSwipe();
            } else {
                Animated.spring(position, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false,
                }).start();
            }
        },
    });

    if (deleted) {
        return null; 
    }

    return (
        <Animated.View
            style={[styles.container, { transform: position.getTranslateTransform() }]} {...panResponder.panHandlers}
            key={id}
        >
            <View style={styles.imageContainer}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.authortime}>{author + " - " + time}</Text>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(34, 35, 39, 0.84)',
        marginBottom: 5
    },
    imageContainer: {
        marginRight: 10,
        resizeMode: 'contain',
       
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    infoContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    authortime: {
        fontFamily: 'sans-serif',
        fontSize: 16,
        color: '#9c9c9c',
    }
});

export default ItemDownload;
