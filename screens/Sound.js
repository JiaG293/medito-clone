import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Sound({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Sound</Text>
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