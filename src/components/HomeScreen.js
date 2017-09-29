import React, { Component } from 'react';
import { View, Button } from 'react-native';
import ImageList from './ImageList';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Unsplash'
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Button
                    title="Go to Detail Screen"
                    onPress={() => navigate('Detail')}
                />
                <ImageList />
            </View>
        );
    }
}