import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Menu from './Menu';

const Home =(props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.globologo}
        source={require('./images/_Export_globoticket-bug-black.png')}
          />
          <Text style={ styles.title }>Welcome TO GloboTicket</Text>
          <Text style={styles.subtitle}>{ props.username}t</Text>
          <Image
            style={styles.heroimage}
            source={require('./images/boxing.jpg')}
          />
          <View style={styles.textcontainer}>
              <Text style={ styles.content }>{ introText }</Text>
          </View>
    </View>
  );
}
const introText = `Are you ready for yhe best events? Whether you are into sports, music, or the most amazing seminars we have got you covered. Get rready to purchase great tickets at the best prices. Events are in-person and virtual.`
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        flex: 1
    },
    textcontainer: {
        padding: 20
    },
    globologo: {
        height: 100,
        width: 150
    },
    title: {
        fontFamily: 'Ubuntu-R'
    },
    subtitle: {
        paddingTop: 5,
        fontFamily: 'Ubuntu-R'
    },
    content: {
        fontFamily: 'Ubuntu-L',
        fontWeight: '300'
    },
    heroimage: {
        height: 170,
        width: '100%'
    },
    menu: {
        position: 'absolute',
        bottom: 10
    }
});
export default Home;

