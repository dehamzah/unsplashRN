import React from 'react';
import { FlatList, View, Text } from 'react-native';
import ImageCard from './ImageCard';

const ImageList = () => (
    <FlatList
        style={{ marginBottom: 70 }}
        data={data}
        renderItem={({ item }) => {
            const { image, authorImage, authorName } = item;
            return (
                <ImageCard 
                    srcImage={image}
                    srcImageAuthor={authorImage}
                    authorName={authorName}
                />
            )
        }}
    />
);

const data =[
    {
        key: '1',
        image: require('../images/01.jpeg'),
        authorImage: require('../images/user-01.jpeg'),
        authorName: 'Dede Hamzah'
    },
    {
        key: '2',
        image: require('../images/01.jpeg'),
        authorImage: require('../images/user-01.jpeg'),
        authorName: 'Budiman'
    },
    {
        key: '3',
        image: require('../images/01.jpeg'),
        authorImage: require('../images/user-01.jpeg'),
        authorName: 'Suparno'
    },
    {
        key: '4',
        image: require('../images/01.jpeg'),
        authorImage: require('../images/user-01.jpeg'),
        authorName: 'Rizky Febrian'
    },
    {
        key: '5',
        image: require('../images/01.jpeg'),
        authorImage: require('../images/user-01.jpeg'),
        authorName: 'Anton Supratmo'
    },
    {
        key: '6',
        image: require('../images/01.jpeg'),
        authorImage: require('../images/user-01.jpeg'),
        authorName: 'Rio Adriansyah'
    },
    {
        key: '7',
        image: require('../images/01.jpeg'),
        authorImage: require('../images/user-01.jpeg'),
        authorName: 'Firman Prasetyo'
    },
    {
        key: '8',
        image: require('../images/01.jpeg'),
        authorImage: require('../images/user-01.jpeg'),
        authorName: 'Sigit Hanafi'
    },
];

export default ImageList;
