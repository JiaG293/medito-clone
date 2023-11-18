import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Pressable, SafeAreaView, ScrollView } from 'react-native'
import ITEMDETAILS from '../data/ItemDetails'
import BannerPack from '../components/BannerPack'
import ListAuthorDuration from '../components/ListAuthorDuration'
import DURATIONS from '../data/DurationsData'
import DownloadTimer from '../components/DownloadTimer'


export default function Timer({ navigation }) {
  const [dataTimer, setDataTimer] = useState({});
  const [selectedData, setSelectedData] = useState({});

  const handleSelectedDataDuration = (data) => {
    setSelectedData(data);
    console.log(dataTimer);
  };

  /* const ITEMDETAILS_URL = 'http://localhost:3000/ITEMDETAILS';
  const DURATIONS_URL = 'http://localhost:3000/DURATIONS';

  const getApi = (url, state, setState, nameField) => {
    const getDataFromApi = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('network error');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error get api:', error);
        return null;
      }
    };

    getDataFromApi()
      .then((data) => {
        console.log('Data from API:', data);
        setState({ ...state, "ITEMDETAILS": {...data[0]} });
  })
      .catch ((error) => {
    console.error('Error:', error);
  });
}
const a = "ITEMSDETAILS";
useEffect(() => {
  getApi(ITEMDETAILS_URL, dataTimer, setDataTimer, a);
  console.log(dataTimer);
}, []);
 */



return (
  <View style={styles.container}>
    <ScrollView
      scrollEnabled={true}
      style={styles.container1}
      scrollIndicatorInsets={{
        bottom: 50,
      }}
      contentContainerStyle={{
        marginBottom: 100,
      }}
    >
      <View style={styles.banner}>
        <BannerPack
          title={ITEMDETAILS[0].title}
          subtile={ITEMDETAILS[0].subtile}
          onPress={() => { }}
          image='50x50png'
        >
        </BannerPack>
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        <ListAuthorDuration data={DURATIONS} onSelect={handleSelectedDataDuration}></ListAuthorDuration>
      </SafeAreaView>
      <View style={styles.download}>
        <DownloadTimer author='JiaG' time='9'></DownloadTimer>
      </View>

    </ScrollView>

    <Pressable
      android_ripple={{ color: '#9eb9f7', borderless: false }}
      onPress={() => navigation.navigate('Player')}
      style={({ pressed }) => [
        { backgroundColor: pressed ? '#9eb9f7' : '#f4f5b0' }
        , styles.beginButton
      ]}
    >
      <Text style={styles.textBeginButton}>Begin</Text>
    </Pressable>
  </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    marginBottom: 70,
  },
  banner: {
    flex: 0.5,
  },
  beginButton: {
    position: 'absolute',
    bottom: 0,
    marginVertical: 10,
    borderRadius: 30,
    width: '90%',
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  textBeginButton: {
    fontFamily: 'sans-serif',
    color: '#000000',
    fontWeight: '500',
    fontSize: 16,
  },
})