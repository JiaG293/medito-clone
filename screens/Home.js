import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ButtonCategory from '../components/ButtonCategory';
import ItemCourseHome from '../components/ItemCourseHome';
import COURSES from '../data/Courses';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <View style={styles.categoryRow}>
          <ButtonCategory title='Daily Meditation' image='50x50.png'></ButtonCategory>
          <ButtonCategory title='Timer' image='50x50.png'></ButtonCategory>
        </View>
        <View style={styles.categoryRow}>
          <ButtonCategory title='Downloads' image='50x50.png'></ButtonCategory>
          <ButtonCategory title='Sleep' image='50x50.png'></ButtonCategory>
        </View>
      </View>

      <View style={styles.coursesContainer}>
        <FlatList
          horizontal={true}
          data={COURSES}
          renderItem={({ item }) => (
            <ItemCourseHome
              id={item.id}
              title={item.title}
              image={item.image}
              subtitle={item.subtile}
            >
            </ItemCourseHome>
          )}
          keyExtractor={item => item.id}
          initialNumToRender={5}
        >

        </FlatList>
      </View>
      <View style={styles.statsContainer}>

      </View>
      <View style={styles.quoteContainer}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer: {
    flex: 1,
  },
  categoryRow: {
    flexDirection: 'row',
  },
  coursesContainer: {
    flex: 2,
  },
  statsContainer: {
    flex: 1,
  },
  quoteContainer: {
    flex: 1,
  }
})