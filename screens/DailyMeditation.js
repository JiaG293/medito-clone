import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Pressable, SafeAreaView, ScrollView } from 'react-native'
import ITEMDETAILS from '../data/ItemDetails'
import BannerPack from '../components/BannerPack'
import ListAuthorDuration from '../components/ListAuthorDuration'
import DURATIONS from '../data/DurationsData'
import DownloadTimer from '../components/DownloadTimer'

export default function DailyMeditation({ navigation, route }) {
  console.log("data from screen details:\n", route.params?.itemTimerDetails);
  const [selectedDataId, setSelectedDataId] = useState({});
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  const handleSelectedDataDuration = (id) => {
    route.params.itemTimerDetails.durations.filter((elem) => {
      if (elem.idAuthor == Object.keys(id)) {
        elem.timeDetail.filter((elemm) => {
          if (elemm.idTimeDetail == Object.values(id))
            setSelectedDataId(elemm)
        })
      }
    })
  };

  useEffect(() => console.log("data timer selected: ", selectedDataId), [selectedDataId])


  const convertToTimer = (durationString) => {
    const stringWithoutMin = durationString.replace('min', '').trim();

    const minutes = parseInt(stringWithoutMin, 10);

    return minutes;
  };



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
            title={route.params.itemTimerDetails.title}
            subtile={route.params.itemTimerDetails.content}
            onPress={() => { }}
            image='50x50png'
          >
          </BannerPack>
        </View>
        <SafeAreaView style={{ flex: 1 }}>
          <ListAuthorDuration
            data={route.params?.itemTimerDetails.durations}
            onSelect={handleSelectedDataDuration}>
          </ListAuthorDuration>
        </SafeAreaView>
        <View style={styles.download}>
          <DownloadTimer
            author={route.params?.itemTimerDetails.author}
            time={route.params?.itemTimerDetails.timeSummary}
            isOn={isOn}
            handleToggle={handleToggle}
          />
        </View>

      </ScrollView>
      {console.log('time duration selected:', selectedDataId.time)}
      <Pressable
        android_ripple={{ color: '#9eb9f7', borderless: false }}
        onPress={() => navigation.navigate('Player', {
          dataPlayer: { ...selectedDataId },
          titlePlaying: route.params?.itemTimerDetails.title,
          playDuration: selectedDataId.time
        })}
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
    // flex: 1,
    marginBottom: 70,
  },
  banner: {
    // flex: 0.5,
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