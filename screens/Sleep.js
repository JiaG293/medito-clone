import * as React from 'react'
import { StyleSheet, Text, View, FlatList, Pressable, SafeAreaView } from 'react-native'
import ItemFolder from '../components/ItemFolder'
import SLEEPFOLDER from '../data/SleepFolderData'
import BannerPack from '../components/BannerPack'


export default function Sleep({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <BannerPack
          title='Getting Started'
          subtile='Find out more about Medito, mindfulness and meditation'
          onPress={() => { }}
          image='http://localhost:5000/sleep-960x.png'
        >
        </BannerPack>
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={SLEEPFOLDER[0].dataCategory}
          renderItem={({ item }) => (
            <ItemFolder
              id={item.id}
              title={item.titleFolder}
            >
            </ItemFolder>
          )}
          keyExtractor={item => item.id}
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
  banner: {
    flex: 0.5,
  }
})