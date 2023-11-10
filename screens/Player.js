import React, { useState } from 'react'
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import ProgressBarPlayer from '../components/ProgressBarPlayer';


export default function Player({ navigation }) {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/backgroundPlayer.png')}
        style={styles.image}
      >
        <View style={styles.content}>
          <Text style={styles.textTitle}> flaskdjflsfsdfkdfjlk</Text>
        </View>
        <View style={styles.controller}>
          <Pressable
            onPress={() => handleToggle()}
            style={styles.playerButton}
          >
            {() => (<MaterialCommunityIcons
              name={isOn ? 'pause' : 'play'}
              color='#ffffff'
              size={26}
            />)}
          </Pressable>
          <Pressable
            android_ripple={{ color: 'rgba(187, 187, 187, 1)', borderless: false }}
            onPress={() => { }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#rgba(34, 35, 39, 0.3)' : 'rgba(34, 35, 39, 0.6)',
              },
              styles.pressableSounds,
            ]}
          >
            <MaterialCommunityIcons
              name='music-note-outline'
              color='#ffffff'
              size={26}
            />
            <Text style={styles.textSoundConfig}>Sounds</Text>
          </Pressable>
        </View>
        <View style={styles.progressBar}>
          <ProgressBarPlayer></ProgressBarPlayer>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 0.3,
    marginTop: 30,
  },
  controller: {
    flex: 0.6,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  playerButton: {
    backgroundColor: '#5c5c55',
    borderRadius: 25,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTitle: {
    fontFamily: 'sans-serif',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center'
  },
  textSoundConfig: {
    fontFamily: 'sans-serif',
    color: '#ffffff',
    fontSize: 14,
  },
  pressableSounds: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginVertical: 30
  },

  progressBar: {

  },

})