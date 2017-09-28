import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './components/Header';
import ImageCard from './components/ImageCard';
import ImageList from './components/ImageList';

const App = () => (
    <View>
        <Header title="Unsplash" />
        <ImageList />
    </View>
);

AppRegistry.registerComponent('unsplashRN', () => App);
