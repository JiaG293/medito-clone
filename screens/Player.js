import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ListAuthorDuration from '../components/ListAuthorDuration'


export default function Player({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Player</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer: {
    flex: 1,
    marginVertical: 20,
  },
  categoryRow: {
    flexDirection: 'row',
  },
  coursesContainer: {
    flex: 3,
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(34, 35, 39, 0.84)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  quotesContainer: {
    flex: 1,
  }
})