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

  const apiUrl = 'http://localhost:3000/COURSES'; // URL api endpoint

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
        setCourses(data)
        console.log('Data from API:', data);
      })
      .catch(error => {
        console.error('Get data fail:', error);
      });
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView style={{ minHeight: 100, maxHeight: 1900 }}>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryRow}>
            <ButtonCategory
              title='Daily Meditation'
              image='50x50.png'
              onPress={() => navigation.navigate('Daily Meditation')}

            ></ButtonCategory>
            <ButtonCategory
              title='Timer'
              image='50x50.png'
              onPress={() => navigation.navigate('Timer')}

            ></ButtonCategory>
          </View>
          <View style={styles.categoryRow}>
            <ButtonCategory
              title='Downloads'
              image='50x50.png'
              onPress={() => navigation.navigate('Downloads')}

            ></ButtonCategory>
            <ButtonCategory
              title='Sleep'
              image='50x50.png'
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
                  id={item.idCourses}
                  title={item.titleCourses}
                  image={item.imageCourses}
                  subtitle={item.subTitleCourses}
                  onPress={() => navigation.navigate('Details', { listCoursesDetail: {...courses[index].listCoursesDetail} })}
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
            onPress={() => navigation.navigate('Player')} //test screen not comfirm

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
            content="Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
            author="Steve Jobs"
          ></Quote>


        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer: {
    flex: 1,
    marginVertical: 20,
  },
  categoryRow: {
    flexDirection: 'row',
  },
  coursesContainer: {
    flex: 3,
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(34, 35, 39, 0.84)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  quotesContainer: {
    flex: 1,
  }
})

