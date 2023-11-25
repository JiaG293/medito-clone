import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import ButtonCategory from '../components/ButtonCategory';
import ItemCourseHome from '../components/ItemCourseHome';
import COURSES from '../data/CoursesData';
import Stat from '../components/Stat';
import Quote from '../components/Quote';
import PressableCustom from '../components/PressableCustom';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Home({ navigation, route }) {


  const [courses, setCourses] = useState([]);
  const [daily, setDaily] = useState({});
  const [timer, setTimer] = useState([]);
  const [downloads, setDownloads] = useState([]);
  const [quote, setQuote] = useState({});

  const baseURL = 'http://localhost:3000/';
  const coursesUrl = `${baseURL}COURSES`; // URL api endpoint
  const dailyUrl = `${baseURL}DAILY`;
  const timerUrl = `${baseURL}TIMER`;
  const downloadsUrl = `${baseURL}DOWNLOADS`;
  const quotesUrl = `${baseURL}QUOTES`;

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
    fetchData(coursesUrl, requestOptions)
      .then(data => {
        setCourses(data)
        console.log('Data from API:', data);
      })
      .catch(error => {
        console.error('Get data fail:', error);
      });

    getApiObject(dailyUrl, setDaily)

    getApiArray(timerUrl, setTimer)

    getApiArray(downloadsUrl, setDownloads)

    getApiObject(quotesUrl, setQuote)
  }, [])


  function getApiObject(url, setData) {

    fetchData(url, requestOptions)
      .then(data => {
        let temp = data[Math.floor(Math.random() * data.length)]
        setData(data[Math.floor(Math.random() * data.length)])
        console.log('Data from api object:', temp);
      })
      .catch(error => {
        console.error('Get data fail api object:', error);
      });
  }
  function getApiArray(url, setData) {
    fetchData(url, requestOptions)
      .then(data => {
        setData(data)
        console.log('Data from api array:', data);
      })
      .catch(error => {
        console.error('Get data fail api array:', error);
      });
  }








  return (
    <View style={styles.container}>
      <ScrollView style={{ minHeight: 100, maxHeight: 1900 }}>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryRow}>
            <ButtonCategory
              title='Daily Meditation'
              image='http://localhost:5000/beginner-960x.png'
              onPress={() => {
                navigation.navigate('Daily Meditation', {
                  itemTimerDetails: { ...daily.listDetail.listTimerDetails[Math.floor(Math.random() * daily.listDetail.listTimerDetails.length)] },
                  titleItem: daily.titleItem,
                  contentItem: daily.contentItem
                })
              }}
            ></ButtonCategory>
            <ButtonCategory
              title='Timer'
              image='http://localhost:5000/stress-anxiety-960x.png'
              onPress={() => navigation.navigate('Timer', {
                itemTimerDetails: { ...timer[0].listDetail.listTimerDetails[0] },
                titleItem: timer[0].titleItem,
                contentItem: timer[0].contentItem,
                idItem: timer[0].id,
                itemListId: timer[0].id
              })}

            ></ButtonCategory>
          </View>
          <View style={styles.categoryRow}>
            <ButtonCategory
              title='Downloads'
              image='http://localhost:5000/work-life-960x.png'
              onPress={() => navigation.navigate('Downloads',
                { listDownloads: [...downloads] }
              )}

            ></ButtonCategory>
            <ButtonCategory
              title='Sleep'
              image='http://localhost:5000/sleep-960x.png'
              onPress={() => navigation.navigate('Sleep')}

            ></ButtonCategory>
          </View>
        </View>

        <View style={styles.coursesContainer}>
          <Text
            style={{
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              fontSize: 18,
              color: '#ffffff',
              marginTop: 20,
              marginBottom: 10,
              marginHorizontal: 10,
            }}
          >
            Courses
          </Text>

          <SafeAreaView style={{ flex: 1 }}>
            <FlatList
              horizontal={true}
              data={courses}
              renderItem={({ item, index }) => (
                <ItemCourseHome
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  subtitle={item.subTitle}
                  onPress={() => navigation.navigate('Details', {
                    listDetail: { ...courses[index].listDetail },
                    idItem: item?.id,
                    image: courses[index].image
                  })
                  }
                >
                </ItemCourseHome>
              )}
              keyExtractor={item => item.id}
              initialNumToRender={5}
            >
            </FlatList>
          </SafeAreaView>
        </View>

        <View style={styles.statsContainer}>
          <Stat
            count={0}
            title="Current Streak"
            onPress={() => { }}

          ></Stat>
          <Stat
            count={0}
            title="Minutes Listened"
            onPress={() => { }}

          ></Stat>
          <Stat
            count={0}
            title="Longest Streak"
            onPress={() => { }}

          ></Stat>
          <Stat
            count={0}
            title="Sessions Listened"
            onPress={() => { }}

          ></Stat>
        </View>

        <View style={styles.quotesContainer}>
          <Quote
            content={quote.content}
            author={quote.author}
          ></Quote>


        </View>
      </ScrollView>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
  },
  categoryContainer: {
    marginVertical: 20,
  },
  categoryRow: {
    flexDirection: 'row',
  },
  coursesContainer: {
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(34, 35, 39, 0.84)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  quotesContainer: {
  }
})



