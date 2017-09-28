import React from 'react';
import { View, Text } from 'react-native';

const Header = () => (
    <View style={styles.container}>
        <Text style={styles.title}>Unsplash</Text>
    </View>
);

const styles = {
    container: {
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#525252'
    }
}

export default Header;