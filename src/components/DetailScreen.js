import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DetailScreen extends Component {
    static navigationOptions = {
        title: 'Detail Image'
    }

    render() {
        return (
            <View>
                <Text>Detail Screen of Image</Text>
            </View>
        )
    }
}