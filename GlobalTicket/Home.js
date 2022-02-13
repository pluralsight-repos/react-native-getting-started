import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Home =(props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.globologo}
        source={require('./images/_Export_globoticket-bug-black.png')}
          />
          <Text style={ styles.title }>Welcome TO GloboTicket</Text>
          <Text style={styles.subtitle}>{ props.username}t</Text>
          <View style={styles.textcontainer}>
              <Text style={ styles.content }>{ introText }</Text>
          </View>
    </View>
  );
}
const introText = `Praesentium aut quod et mollitia distinctio fuga. Est nobis ducimus tempore sunt ut minus. Assumenda harum dolores explicabo necessitatibus et. Voluptas ipsa voluptatibus dolor quia aperiam qui rerum. Quia sit corporis dolorum omnis inventore a. Sit velit earum mollitia animi.`
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20
    },
    textcontainer: {
        textAlign: 'center',
        paddingTop: 10
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
    }
});
export default Home;

