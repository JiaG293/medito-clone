import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import ItemPack from '../components/ItemPack'
import PACKS from '../data/PacksData'

export default function Packs({ navigation }) {
  const [packs, setPacks] = useState([]);

  const apiUrl = 'http://localhost:3000/PACKS'; // URL api endpoint

  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  async function fetchData(url, options = {}) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Get data success")
      }
      return await response.json();
    } catch (error) {
      console.error('Get data fail:', error);
      throw error;
    }
  }

  useEffect(() => {
    fetchData(apiUrl, requestOptions)
      .then(data => {
        setPacks(data)
        console.log('Data from API:', data);
      })
      .catch(error => {
        console.error('Get data fail:', error);
      });
  }, [])

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={packs}
          renderItem={({ item, index }) => (
            <ItemPack
              id={item.idPack}
              title={item.titlePack}
              image={item.imagePack}
              subtitle={item.subTitlePack}
              onPress={() => navigation.navigate('Details', { listDetail: { ...packs[index].listDetail } })}
            >
            </ItemPack>
          )}
          keyExtractor={item => item.idPack}
          initialNumToRender={5}
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