import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './components/Header';

const App = () => (
    <View>
        <Header />
    </View>
);

AppRegistry.registerComponent('unsplashRN', () => App);
