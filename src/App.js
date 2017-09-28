import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './components/Header';
import ImageCard from './components/ImageCard';

const App = () => (
    <View>
        <Header title="Unsplash" />
        <ImageCard
            srcImage={require('./images/01.jpeg')}
            srcImageAuthor={require('./images/user-01.jpeg')}
            authorName="Napaki Muttaqin"
        />
    </View>
);

AppRegistry.registerComponent('unsplashRN', () => App);
