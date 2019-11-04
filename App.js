import React, { Component } from 'react';
import {View} from 'react-native';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';



 const navigator = createStackNavigator(
{
  Home: HomeScreen,
  Components: ComponentsScreen,
  List: ListScreen,
  ImageScreen : ImageScreen,
  CounterScreen : CounterScreen,
  ColorScreen : ColorScreen,
  SquareScreen : SquareScreen,
  TextScreen : TextScreen,
  BoxScreen : BoxScreen,

},
{
  initialRouteName:'Home',
  defaultNavigationOptions:{
    title: 'App'
  }
}
); 
/*  
 class App extends Component {
  render() {
    return (
      <View>
        <ComponentsScreen />
        <ListScreen />
        <text>ffdsfd</text>
      </View>
    );
  }
}  */

export default createAppContainer(navigator);
 