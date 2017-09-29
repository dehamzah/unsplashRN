import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';

export default class HeartButton extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isLoved: false
        }
    }

    onPressButton = () => {
        //console.log('you loved this');
        this.setState(prevState => {
            return { isLoved: !prevState.isLoved }
        })
    }

    render() {
        const icon = this.state.isLoved ? require('unsplashRN/src/images/heart-fill.png') : require('unsplashRN/src/images/heart-outline-black.png');
        return (
            <TouchableOpacity onPress={this.onPressButton}>
                <Image 
                    source={icon} 
                    style={{ width: 25, height: 25 }}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        );
    }
}