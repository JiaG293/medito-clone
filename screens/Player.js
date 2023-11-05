import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Player({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Player</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },})