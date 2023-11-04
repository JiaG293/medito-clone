import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}></View>
      <View style={styles.coursesContainer}></View>
      <View style={styles.statsContainer}></View>
      <View style={styles.quoteContainer}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryContainer: {
    flex: 1,
  },
  coursesContainer: {
    flex: 1,
  },
  statsContainer: {
    flex: 1,
  },
  quoteContainer: {
    flex: 1,
  }
})