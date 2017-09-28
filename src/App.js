import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './components/Header';
import ImageCard from './components/ImageCard';

const App = () => (
    <View>
        <Header title="Unsplash" />
        <ImageCard />
    </View>
);

AppRegistry.registerComponent('unsplashRN', () => App);
