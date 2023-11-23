import React from 'react';
import { Pressable } from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FloatingMenu = ({ isVisible, toggleMenu, onPress1, onPress2, onPress3, onPress4, onPress5, onPress6 }) => {
    return (
        <View style={[styles.container, { display: isVisible ? 'flex' : 'none' }]}>
            <View style={styles.menu}>

                <Pressable
                    android_ripple={{ color: 'rgba(187, 187, 187, 1)', borderless: false }}
                    onPress={() => navigation.navigate('About')}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(187, 187, 187, 0.3)' : 'rgba(34, 35, 39, 1)',
                        }
                    ]}
                >
                    {({ pressed }) => (
                        <Text style={[styles.textItem, { color: pressed ? '#000000' : '#ffffff' }]}
                        >
                            About Medito
                        </Text>)}
                </Pressable>

                <Pressable
                    android_ripple={{ color: 'rgba(187, 187, 187, 1)', borderless: false }}
                    onPress={() => { }}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(187, 187, 187, 0.3)' : 'rgba(34, 35, 39, 1)',
                        }
                    ]}
                >
                    {({ pressed }) => (
                        <Text style={[styles.textItem, { color: pressed ? '#000000' : '#ffffff' }]}
                        >
                            Blog
                        </Text>)}
                </Pressable>

                <Pressable
                    android_ripple={{ color: 'rgba(187, 187, 187, 1)', borderless: false }}
                    onPress={() => { }}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(187, 187, 187, 0.3)' : 'rgba(34, 35, 39, 1)',
                        }
                    ]}
                >
                    {({ pressed }) => (
                        <Text style={[styles.textItem, { color: pressed ? '#000000' : '#ffffff' }]}
                        >
                            Email us
                        </Text>)}
                </Pressable>

                <Pressable
                    android_ripple={{ color: 'rgba(187, 187, 187, 1)', borderless: false }}
                    onPress={() => { }}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(187, 187, 187, 0.3)' : 'rgba(34, 35, 39, 1)',
                        }
                    ]}
                >
                    {({ pressed }) => (
                        <Text style={[styles.textItem, { color: pressed ? '#000000' : '#ffffff' }]}
                        >
                            FAQ
                        </Text>)}
                </Pressable>

                <Pressable
                    android_ripple={{ color: 'rgba(187, 187, 187, 1)', borderless: false }}
                    onPress={() => { }}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(187, 187, 187, 0.3)' : 'rgba(34, 35, 39, 1)',
                        }
                    ]}
                >
                    {({ pressed }) => (
                        <Text style={[styles.textItem, { color: pressed ? '#000000' : '#ffffff' }]}
                        >
                            Service status
                        </Text>)}
                </Pressable>

                <Pressable
                    android_ripple={{ color: 'rgba(187, 187, 187, 1)', borderless: false }}
                    onPress={() => { }}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(187, 187, 187, 0.3)' : 'rgba(34, 35, 39, 1)',
                        }
                    ]}
                >
                    {({ pressed }) => (
                        <Text style={[styles.textItem, { color: pressed ? '#000000' : '#ffffff' }]}
                        >
                            Join us
                        </Text>)}
                </Pressable>

                <Pressable
                    android_ripple={{ color: 'rgba(187, 187, 187, 1)', borderless: false }}
                    onPress={() => { }}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(187, 187, 187, 0.3)' : 'rgba(34, 35, 39, 1)',
                        }
                    ]}
                >
                    {({ pressed }) => (
                        <Text style={[styles.textItem, { color: pressed ? '#000000' : '#ffffff' }]}
                        >
                            Donate
                        </Text>)}
                </Pressable>
                
                <Pressable
                    android_ripple={{ color: 'rgba(187, 187, 187, 1)', borderless: false }}
                    onPress={toggleMenu}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(187, 187, 187, 0.3)' : 'rgba(34, 35, 39, 1)',
                        }
                    ]}
                >
                    {({ pressed }) => (
                        <Text style={[styles.textItem, { color: pressed ? '#000000' : '#ffffff' }]}
                        >
                            Close
                        </Text>)}
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 20,
        right: 20,
        width: 120,
    },
    menu: {
        backgroundColor: 'rgba(34, 35, 39, 1)',
        borderRadius: 5,
        elevation: 3,

    },
    textItem: {
        fontFamily: 'sans-serif',
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500',
        padding: 10
    },
});

export default FloatingMenu;
