import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import ItemDownload from '../components/ItemDownload';

export default function Downloads({ navigation, route }) {
  console.log(route.params?.listDownloads);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1, marginLeft: 10, marginVertical: 10 }}>
        <FlatList
          data={route.params?.listDownloads} //data
          renderItem={({ item, index }) => (<ItemDownload
            title={item.title}
            author={item.author}
            time={item.time}
            imageUrl={item.image}
          ></ItemDownload>
          )}
          keyExtractor={(item, index) => item.id + index}
          initialNumToRender={10}
        >
        </FlatList>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})