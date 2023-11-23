import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Pressable, SafeAreaView } from 'react-native'
import ITEMDETAILS from '../data/ItemDetails'
import BannerPack from '../components/BannerPack'
import ItemDetails from '../components/ItemDetails'


export default function Details({ navigation, route }) {
  console.log("data from screen home: \n", route.params?.listDetail);

  const [details, setDetails] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  console.log("Time duration: ", route.params?.playDurationMillis);

  useEffect(() => {
    setDetails(route.params?.listDetail);
  }, [])

  const handleOnPress = selected => {

    if (selectedItems.length) {
      return selectItems(selected);
    }

    console.log('pressed');
  };

  const getSelected = selected => selectedItems.includes(selected.id);

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
          title={details.titleItem}
          subtile={details.contentItem}
          onPress={() => deSelectItems()}
          image='50x50png'
        >
        </BannerPack>
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={details.listTimerDetails} //data
          renderItem={({ item, index }) => (
            <ItemDetails
              icon='play-circle'
              id={item.idTimer}
              title={item.title}
              image={item.image}
              subtitle={item.content}
              onPress={() => {
                navigation.navigate('Timer', {
                  itemTimerDetails: { ...details.listTimerDetails[index] },
                  // itemId: item.id,
                  // itemData: item.title,
                  titleItem: details.titleItem,
                  contentItem: details.contentItem
                })
                handleOnPress(item);
              }
              }
              onLongPress={() => selectItems(item)}
              selected={getSelected(item)}
            >
            </ItemDetails>
          )}
          keyExtractor={item => item.idTimer}
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