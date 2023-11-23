import React, { useEffect, useState } from 'react'
import { Alert, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import Slider from '@react-native-community/slider'
import Modal from 'react-native-modal'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Audio } from 'expo-av';
import { TouchableOpacity } from 'react-native';
import BackgroundSounds from '../components/BackgroundSounds'
import ProgressBar from '../components/ProgressBar'


export default function Player({ navigation, route }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [audioState, setAudioState] = useState({
    sound: null,
    isPlaying: false,
    position: 0,
    duration: 0,
    initialVolume: 1,
  });

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const loadAudio = async (audio, duration) => {
    const { sound } = await Audio.Sound.createAsync(
      audio.includes('http') ? { uri: audio } : require('../assets/Arti.mp3'),
      { isLooping: true }
    );

    const status = await sound.getStatusAsync();
    setAudioState((prevState) => ({
      ...prevState,
      sound,
      duration: status.durationMillis,
    }));

    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isPlaying) {
        setAudioState((prevState) => ({
          ...prevState,
          position: status.positionMillis,
        }));
      }
    });

    setTimeout(() => {
      sound.pauseAsync();
      setAudioState((prevState) => ({
        ...prevState,
        isPlaying: false,
      }));
    }, convertToMilliseconds(duration));
  };

  const togglePlayPause = async () => {
    const { sound, isPlaying } = audioState;
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setAudioState((prevState) => ({
        ...prevState,
        isPlaying: !prevState.isPlaying,
      }));
    }
  };

  const handleSliderChange = async (value) => {
    const { sound } = audioState;
    if (sound) {
      await sound.setPositionAsync(value);
      setAudioState((prevState) => ({
        ...prevState,
        position: value,
      }));
    }
  };

  useEffect(() => {
    let audio = route.params?.dataPlayer.urlAudio ?? 'http://localhost:5000/Arti.mp3';
    let playDuration = route.params?.playDuration ?? 1;
    if (audio == null) {
      Alert.alert("Cant not find audio");
      console.log("Cant not find audio");
    } else {
      loadAudio(audio, playDuration);
    }
  }, []);

  const convertToMilliseconds = (minutes) => {
    const totalMilliseconds = minutes * 60 * 1000;
    return totalMilliseconds;
  };

  const getPositionMinutesSeconds = (milliseconds) => {
    const totalSeconds = milliseconds / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/backgroundPlayer.png')}
        style={styles.image}
      >
        <View style={styles.content}>
          <Text style={styles.textTitle}> {route.params?.titlePlaying ?? "NaN"}</Text>
        </View>
        <View style={styles.controller}>
          <Pressable
            onPress={() => togglePlayPause()}
            style={styles.playerButton}
          >
            <MaterialCommunityIcons
              name={(audioState.isPlaying) ? 'pause' : 'play'}
              color='#ffffff'
              size={26}
            />
          </Pressable>
          <Pressable
            android_ripple={{ color: 'rgba(187, 187, 187, 1)', borderless: false }}
            onPress={toggleModal}
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
          <ProgressBar
            value={audioState.position}
            onValueChange={(value) => setAudioState({ ...audioState, position: value })}
            onSlidingComplete={(value) => handleSliderChange(value)}
            disabled={!audioState.sound}
            duration={audioState.duration}
          />
          <View style={styles.timeContainer}>
            <Text style={styles.textTimer}>{getPositionMinutesSeconds(audioState.position)}</Text>
            <Text style={styles.textTimer}>{getPositionMinutesSeconds(audioState.duration)}</Text>
          </View>
        </View>

        {/* Modal */}
        <Modal
          isVisible={isModalVisible}
          onSwipeComplete={toggleModal}
          swipeDirection={['down']}
          style={styles.modal}
          onBackdropPress={toggleModal}
          propagateSwipe={true}
          backdropOpacity={0.7}
        >
          <View style={styles.modalContent}>
            <View style={styles.headerBackgroundSound}>
              <Text style={styles.titleScreen}>Background Sound</Text>
              <TouchableOpacity onPress={toggleModal}>
                <MaterialCommunityIcons style={styles.closeButton} name="close" size={32} color="#ffffff"></MaterialCommunityIcons>
              </TouchableOpacity>
            </View>
            <BackgroundSounds data={dataAudio} defaultAudioId="1"></BackgroundSounds>
          </View>
        </Modal>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  slider: {
    width: '80%',
    marginVertical: 20,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  textTimer: {
    fontFamily: 'sans-serif',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  buttonText: {
    fontFamily: 'sans-serif',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'rgb(34, 35, 39)',
    padding: 22,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: '90%',
  },
  headerBackgroundSound: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  closeButton: {
    fontFamily: 'sans-serif',
    color: '#ffffff',

    marginBottom: 10,
    fontWeight: 'bold',
  },
  titleScreen: {
    fontFamily: 'sans-serif',
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    alignSelf: 'flex-start',
  }

})


const dataAudio = [
  { id: '1', name: 'No sound', source: require('../assets/Arti.mp3') },
  { id: '2', name: 'Peaceful Moment', source: require('../assets/Arti.mp3') },
  { id: '3', name: 'Wind Chimes', source: require('../assets/Arti.mp3') },
  { id: '4', name: 'Waves', source: require('../assets/Arti.mp3') },
  { id: '5', name: 'River', source: require('../assets/Arti.mp3') },
  { id: '6', name: 'Rain', source: require('../assets/Arti.mp3') },
  { id: '7', name: 'Safe Haven', source: require('../assets/Arti.mp3') },
  { id: '8', name: 'Spring Field', source: require('../assets/Arti.mp3') },
];