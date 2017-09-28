import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const ImageCard = () => (
    <View style={styles.container}>
        <Image 
            source={require('../images/01.jpeg')}
            style={styles.image}
            resizeMode="cover"
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        padding: 15
    },
    image: {
        width: null,
        height: 200
    }
});

export default ImageCard;