import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import icon từ thư viện
import { Audio } from 'expo-av';
import VolumeControl from './VolumeControl';

const BackgroundSounds = ({ data, defaultAudioId }) => {
  const [selectedAudio, setSelectedAudio] = useState(defaultAudioId);





  const [initialVolume, setinitialVolume] = useState(0.5);
  const [soundObject, setSoundObject] = useState(null);

  const playAudio = async (audio) => {
    if (soundObject) {
      await soundObject.unloadAsync();
    }

    if (audio.id !== selectedAudio) {
      setSelectedAudio(audio.id);
      const { sound } = await Audio.Sound.createAsync(audio.source);
      setSoundObject(sound);
      await sound.setVolumeAsync(initialVolume)
      await sound.playAsync();
    } else {
      setSelectedAudio(null);
    }
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedAudio === item.id;

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => playAudio(item)}
      >
        <Text style={styles.audioName}>{item.name}</Text>
        {isSelected && (
          <MaterialCommunityIcons name="check-circle-outline" size={24} color="#ffffff" />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={styles.volumeStyle}>
        <VolumeControl sound={soundObject} initialVolume={initialVolume}></VolumeControl>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  audioName: {
    fontFamily: 'sans-serif',
    color: '#ffffff',
    fontSize: 16,
  },
  volumeStyle: {
    backgroundColor: 'rgba(108, 108, 108, 0.5)',
    padding: 20,
  }
  
});

export default BackgroundSounds;
