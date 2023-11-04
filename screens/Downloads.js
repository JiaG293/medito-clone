import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Downloads({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Downloads</Text>
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