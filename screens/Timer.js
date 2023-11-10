import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, Pressable, SafeAreaView } from 'react-native'
import ITEMDETAILS from '../data/ItemDetails'
import BannerPack from '../components/BannerPack'
import ItemDetails from '../components/ItemDetails'
import ListAuthorDuration from '../components/ListAuthorDuration'
import DURATIONS from '../data/DurationsData'


export default function Timer({ navigation }) {

  const [selectedItems, setSelectedItems] = useState([]);

  const handleOnPress = (key) => {

    if (selectedItems.length) {
      return selectItems(key);
    }

    console.log('pressed');
  };

  const getSelected = (key) => selectedItems.includes(key.id);

  const deSelectItems = () => setSelectedItems([]);

  const selectItems = item => {
    if (selectedItems.includes(item.id)) {
      const newListItems = selectedItems.filter(
        listItem => listItem !== item.id,
      );
      return setSelectedItems([...newListItems]);
    }
    setSelectedItems([...selectedItems, item.id]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <BannerPack
          title={ITEMDETAILS[0].title}
          subtile={ITEMDETAILS[0].subtile}
          onPress={() => deSelectItems()}
          image='50x50png'
        >
        </BannerPack>
      </View>
      <SafeAreaView style={{ flex: 1 }}>
       {/*  <FlatList
          data={ITEMDETAILS[0].dataDetails}
          renderItem={({ item }) => (
            <ItemDetails
              icon='play-circle'
              id={item.id}
              title={item.title}
              image={item.image}
              subtitle={item.time}
              onPress={() => {
                navigation.navigate('Timer', {
                  itemId: item.id,
                  itemData: item.title,
                })
                handleOnPress(item);
              }
              }
              onLongPress={() => selectItems(item)}
              selected={getSelected(item)}
            >
            </ItemDetails>
          )}
          keyExtractor={item => item.id}
          initialNumToRender={10}
        >
        </FlatList> */}
        <ListAuthorDuration data={DURATIONS}></ListAuthorDuration>
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