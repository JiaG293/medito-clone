import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ListDuration from '../components/ListDuration'

const DATA = [{
  idAuthor: 113,
  author: 'JJoh',
  dataTime: [
      { id: 1, title: '5', value: '5' },
      { id: 2, title: '10', value: '10' },
      { id: 3, title: '15', value: '15' },
  ]
},
{
  idAuthor: 1451,
  author: 'Hello',
  dataTime: [
      { id: 1, title: '5', value: '5' },
      { id: 2, title: '10', value: '10' },
      { id: 3, title: '15', value: '15' },
  ]
}]

export default function Player({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Player</Text>
      <ListDuration data={[DATA]}></ListDuration>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})