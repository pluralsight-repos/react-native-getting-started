import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image} from 'react-native';

const News = () => {
    const [isLoaded, setDataLoaded] = useState(true);
    const [storyData, setStoryData] = useState();

    const getNews = async () => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
            let stories = await response.json();
            setStoryData(stories);
            setDataLoaded(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getNews();
    }, []);

    console.log(storyData);

    const newsItem = ({item}) => {
        return (
            <View style={styles.storylist}>
                <Image 
                    style={styles.thumb}
                    source={{uri: item.url}}
                />
                <Text style={styles.storytext}>{item.title}</Text>
                <Text style={styles.storytext}>{item.url}</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    storylist: {
        flexDirection: 'row'
    },
    thumb: {

    },
    storytext: {

    }
});

export default News;