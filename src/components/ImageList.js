import React, { Component } from 'react';
import { FlatList, View, Textl, ActivityIndicator } from 'react-native';
import ImageCard from './ImageCard';
import { client_id } from 'unsplashRN/secret.json';

class ImageList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        let res = await fetch(`https://api.unsplash.com/photos?client_id=${client_id}`);
        let photos = await res.json();
        //console.log('photos', photos);

        this.setState({ photos });
    }

    render() {
        return (
            <FlatList
                style={{ marginBottom: 70 }}
                data={this.state.photos}
                renderItem={({ item }) => {
                    const { urls, user } = item;
                    return (
                        <ImageCard 
                            srcImage={urls.small}
                            srcImageAuthor={user.profile_image.medium}
                            authorName={user.name}
                        />
                    )
                }}
                keyExtractor={(item) => item.id}
            />
        );
    }
}

export default ImageList;
