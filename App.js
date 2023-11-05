import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabs from './navigation/BottomTabs';
import StackNav from './navigation/HomeStacks';


export default function App() {
  return (
    <View style={styles.container}>
      <BottomTabs>
      </BottomTabs>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

