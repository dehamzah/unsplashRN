import React, { Component } from 'react';
import { Image } from 'react-native';

export default class HeartButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Image 
                source={require('unsplashRN/src/images/heart-outline-black.png')} 
                style={{ width: 25, height: 25 }}
                resizeMode="contain"
            />
        );
    }
}