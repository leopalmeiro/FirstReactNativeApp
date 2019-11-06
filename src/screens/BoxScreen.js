import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyleParent}>
        <View style={styles.viewTwoStyle} />
      </View>
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderBottomWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
  },
  viewTwoStyleParent: {
    height: 100,
    justifyContent: 'flex-end',
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'purple',
  },

});

export default BoxScreen;
