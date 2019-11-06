import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const Homecreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First React Native App</Text>
      <View style={styles.btn}>
      <Button style={styles.btn}
        title="Go to components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button style={styles.btn}
        title="Go to List Component"
        onPress={() => navigation.navigate('List')}
      />
      <Button style={styles.btn}
        title="Go to Image Component"
        onPress={() => navigation.navigate('ImageScreen')}
      />
      <Button style={styles.btn}
        title="Go to Conter Screen"
        onPress={() => navigation.navigate('CounterScreen')}
      />
      <Button style={styles.btn}
        title="Go to Color Screen"
        onPress={() => navigation.navigate('ColorScreen')}
      />
      <Button style={styles.btnStyle}
        title="Go to Square Screen"
        onPress={() => navigation.navigate('SquareScreen')}
      />
      <Button style={styles.btn}
        title="Go to Text Screen"
        onPress={() => navigation.navigate('TextScreen')}
      />

      <Button style={styles.btn}
        title="Go to Box Screen"
        onPress={() => navigation.navigate('BoxScreen')}
      />
      {/*       <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  text: {
    fontSize: 30,
    marginTop: 5,
    marginBottom: 2,
  },
  btn: {
    marginTop: 5,
    marginBottom: 5,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
});

export default Homecreen;
