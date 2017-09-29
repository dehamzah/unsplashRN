import React from 'react';
import { AppRegistry, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';

const App = StackNavigator({
    Home: { screen: HomeScreen }
});

AppRegistry.registerComponent('unsplashRN', () => App);
