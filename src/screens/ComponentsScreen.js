import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const title = 'Getting started with React Native ';
    const name = 'Leonardo';

  return (
  <View>
    <Text style={styles.titleTextStyle}>{title}</Text>
    <Text style={styles.bodyTextStyle}> My name is: {name} </Text>
  </View>
  );
};

const styles = StyleSheet.create({
  titleTextStyle: {
    fontSize: 45
  },
  bodyTextStyle:{
    fontSize: 20
  },


});

export default ComponentsScreen;
