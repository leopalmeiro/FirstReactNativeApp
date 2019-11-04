import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const Homecreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        title="Go to components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go to List Component"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to Image Component"
        onPress={() => navigation.navigate('ImageScreen')}
      />
      <Button
        title="Go to Conter Screen"
        onPress={() => navigation.navigate('CounterScreen')}
      />
      <Button
        title="Go to Color Screen"
        onPress={() => navigation.navigate('ColorScreen')}
      />
      <Button
        title="Go to Square Screen"
        onPress={() => navigation.navigate('SquareScreen')}
      />
      <Button
        title="Go to Text Screen"
        onPress={() => navigation.navigate('TextScreen')}
      />

      <Button
        title="Go to Box Screen"
        onPress={() => navigation.navigate('BoxScreen')}
      />
      {/*       <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default Homecreen;
