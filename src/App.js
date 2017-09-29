import React from 'react';
import { AppRegistry, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';

const App = StackNavigator({
    Home: { screen: HomeScreen },
    Detail: { screen: DetailScreen }
});

AppRegistry.registerComponent('unsplashRN', () => App);
