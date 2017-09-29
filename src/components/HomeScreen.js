import React, { Component } from 'react';
import { View } from 'react-native';
import ImageList from './ImageList';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Unsplash'
    }

    render() {
        return (
            <View>
                <ImageList />
            </View>
        );
    }
}