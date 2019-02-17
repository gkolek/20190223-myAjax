import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  state = {
    results: [
      { name: 'Alicja', },
      { name: 'Bogdan' }
    ]
  }

  render() {

    fetch('https://randomuser.me/api/?results=50')
    .then(response => response.json())
    .then(data => {
      this.setState(data);
    })

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text style={styles.text}>Hello JFDZL2</Text>
        {this.state.results.map(item => (
          <View>
            <Text>{item.name.first}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22
  }
});
