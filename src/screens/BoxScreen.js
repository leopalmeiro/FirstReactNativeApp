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
    /*  <Text style={styles.textOneStyle}>Child #01</Text>
      <Text style={styles.textTwoStyle}>Child #02</Text>
      <Text style={styles.textThreeStyle}>Child #03</Text> */
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderBottomWidth: 3,
    borderColor: 'black',
    height: 200,
    /*     alignItems: 'center', 
    alignItems: 'center', */
    /* flexDirection: 'row', */
    /* 
    justifyContent: 'flex-start', */
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    //marginTop: 50,
    //alignSelf: 'flex-end'
    //top: 50
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
  /*   textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    //margin: 20,
    //flex: 4
  },

  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    //margin: 20,
    //flex: 4
    //alignSelf: 'center',
    //position: 'absolute',
    fontSize: 18,
    //top: 10
    //bottom: 10
    //left: 10,
    //right: 10
    //position: 'absolute',
    //top: 0,
    //right: 0,
    //bottom: 0,
     //left: 0
    //position: 'absolute',top: 0,right: 0,bottom: 0,left: 0
    ...StyleSheet.absoluteFillObject

  },

  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    //margin: 20,
    //flex: 2
  }, */
});

export default BoxScreen;
