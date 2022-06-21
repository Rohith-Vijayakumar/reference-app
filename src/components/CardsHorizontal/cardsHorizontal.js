/* eslint-disable no-undef */
import * as React from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import Carousel, { Pagination } from 'react-native-x-carousel';
import styles from './style';

const DATA = [
    { text: '#1', image: require('../../../assets/plane.jpg') },
    { text: '#2', image: require('../../../assets/road.jpg') },
    { text: '#3', image: require('../../../assets/train.jpg') },

];

export default function CardsHorizontal() {
    const renderItem = data => (
        <View key={data.text} style={styles.item}>
            <Image source={data.image} style={styles.carouselImage} />
        </View>
    );
    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <View style={styles.horizontalCardcontainer}>
                <Carousel
                    pagination={Pagination}
                    renderItem={renderItem}
                    data={DATA}
                />
            </View>
        </SafeAreaView>

    );
}

