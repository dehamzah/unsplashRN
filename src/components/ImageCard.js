import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import HeartButton from './HeartButton';

const ImageCard = ({ srcImage, srcImageAuthor, authorName }) => (
    <View style={styles.container}>
        <Image 
            source={{ uri: srcImage }}
            style={styles.image}
            resizeMode="cover"
        />
        <View style={styles.metaContainer}>
            <View style={styles.authorContainer}>
                <Image
                    source={{ uri: srcImageAuthor }}
                    style={styles.authorImage}
                />
                <Text style={styles.authorName}>{authorName}</Text>
            </View>
            <View>
                <HeartButton />
            </View>
        </View>
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
    },
    metaContainer: {
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    authorImage: {
        width: 35,
        height: 35,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#e8e8e8'
    },
    authorName: {
        marginLeft: 8,
        color: '#4c4c4c',
        fontWeight: 'bold',
        fontSize: 14
    }
});

export default ImageCard;