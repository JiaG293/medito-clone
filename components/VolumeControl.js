import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { MaterialIcons } from '@expo/vector-icons';

const VolumeControl = ({ sound, initialVolume }) => {
  const [volume, setVolume] = React.useState(initialVolume);
  const [isMuted, setIsMuted] = React.useState(false);

  const handleVolumeChange = async (value) => {
    if (sound) {
      await sound.setVolumeAsync(value);
      setVolume(value);
      setIsMuted(value === 0);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleVolumeChange(isMuted ? 0.5 : 0)}>
        <MaterialIcons
          name={isMuted ? 'volume-mute' : 'volume-up'}
          size={24}
          color={isMuted ? '#d9d9d9' : '#848582'} // Màu sắc thay đổi tùy thuộc vào trạng thái mute
        />
      </TouchableOpacity>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={volume}
        onValueChange={handleVolumeChange}
        minimumTrackTintColor="#d9d9d9"
        maximumTrackTintColor="#848582"
        thumbTintColor="#d9d9d9"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    width: 200,
    marginHorizontal: 10,
  },
});

export default VolumeControl;
