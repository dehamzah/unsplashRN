import React, { Component } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import ImageCard from './ImageCard';
import { client_id } from 'unsplashRN/secret.json';

class ImageList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        let res = await fetch(`https://api.unsplash.com/photos?client_id=${client_id}`);
        let photos = await res.json();
        //console.log('photos', photos);

        this.setState({ 
            photos,
            isLoading: false
        });
    }

    render() {
        if (this.state.isLoading) {
            return <ActivityIndicator size="large" color="#4c4c4c" style={{ marginTop: 55 }}/>
        }

        return (
            <FlatList
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
