import React from 'react'
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import ItemPack from '../components/ItemPack'
import PACKS from '../data/PacksData'

export default function Packs({ navigation }) {

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={PACKS}
          renderItem={({ item }) => (
            <ItemPack
              id={item.id}
              title={item.title}
              image={item.image}
              subtitle={item.subtile}
              onPress={() => navigation.navigate('Details', {
                itemId: item.id,
                itemData: item.title,
              })}
            >
            </ItemPack>
          )}
          keyExtractor={item => item.id}
          initialNumToRender={5}
        >
        </FlatList>
      </SafeAreaView >
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})