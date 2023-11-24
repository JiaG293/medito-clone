import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TextLink from '../components/TextLink'

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Medito was built and is maintained
          <Text style={styles.textBold}> 100% by volunteers. </Text> Join us!</Text>

        <Text style={styles.text}>There are five ways you can get involved:</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>
          <TextLink text='Donate ' link='https://meditofoundation.org/donate'></TextLink>
          We can't keep the project going without the generous support of our donors. Help us to continue what we're doing and to reach even more people who need free mental wellbeing resources.</Text>
        <Text style={styles.text}>Rate us on the
          <TextLink text=' Appstore ' link='https://apps.apple.com/us/app/medito/id1500780518?ls=1'></TextLink>
          or on
          <TextLink text=' Google Play.' link='https://play.google.com/store/apps/details?id=meditofoundation.medito'></TextLink>
        </Text>
        <Text style={styles.text}>Follow & Share
          <TextLink text=' Medito ' link='https://meditofoundation.org/'></TextLink>
          on
          <TextLink text=' Twitter' link='https://twitter.com/meditohq'></TextLink>
          ,
          <TextLink text=' Instagram' link='https://www.instagram.com/meditohq'></TextLink>
          ,
          <TextLink text=' Facebook ' link='https://www.facebook.com/MeditoHQ/'></TextLink>
          and
          <TextLink text=' Linkedln.' link='https://www.linkedin.com/in//company/meditofoundation'></TextLink>
        </Text>

        <Text style={styles.text}>Help spread the message by telling your friends and family about Medito. Word of mouth really helps!</Text>
        <Text style={styles.text}>Volunteer to work with us.
          <TextLink text='Check who we are looking for here.' link='https://medito.notion.site/Together-we-can-make-mental-health-resources-accessible-to-all-1bc4f81c932d4e31996e45ad928c32a6'></TextLink>
        </Text>
      </View>
      <Text style={styles.text}>Learn more about Medito Foundation on our website.Learn more about Medito Foundation on
        <TextLink text=' our website.' link='https://meditofoundation.org/'></TextLink>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    marginHorizontal: 30
  },
  text: {
    fontFamily: 'sans-serif',
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 16,
    marginVertical: 5,
  },
  textLink: {
    fontFamily: 'sans-serif',
    color: '#0A43C7',
    fontWeight: '700',
    fontSize: 16,

  },
  textBold: {
    fontFamily: 'sans-serif',
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 18,
  },
  content: {
    marginHorizontal: 20,
  }
})