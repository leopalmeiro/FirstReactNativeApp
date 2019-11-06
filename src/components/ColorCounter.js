import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.btn}>{color}</Text>
      <View style={styles.btn}>
        <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      </View>
      <View style={styles.btn}>
        <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        marginTop: 5,
    },
    btn:{
        marginTop:10
    }
});

export default ColorCounter;
