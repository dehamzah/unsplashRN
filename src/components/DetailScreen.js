import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DetailScreen extends Component {
    // navigationOptions bisa di definisikan sebagai fungsi
    // yang menerima parameter `props`
    // fungsi ini harus me-return object
    static navigationOptions = ({ navigation }) => ({
        title: `Image ${navigation.state.params.author}`
    })

    render() {
        // params yang di oper ke screen ini bisa didapatkan 
        // di object `props.navigation.state`
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Detail Screen of Image {params.author}</Text>
            </View>
        )
    }
}