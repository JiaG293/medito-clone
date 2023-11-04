import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Packs({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Packs</Text>
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