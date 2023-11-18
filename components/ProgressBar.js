import Slider from "@react-native-community/slider";
import { memo } from "react";
import { StyleSheet } from "react-native";

const ProgressBar = memo(({ value, onValueChange, onSlidingComplete, disabled, duration }) => {

    return (
        <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={duration}
            value={value}
            onValueChange={onValueChange}
            onSlidingComplete={onSlidingComplete}
            disabled={disabled}
            minimumTrackTintColor="#C8BA9D"
            maximumTrackTintColor="#000000"
            thumbTintColor='#C8BA9D'
        />
    );
});

const styles = StyleSheet.create({
    slider: {
        width: '80%',
        marginVertical: 20,
    },
})

export default ProgressBar;