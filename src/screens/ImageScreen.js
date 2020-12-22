import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import ImageDetail from '../components/ImageDetail';

export default function ImageScreen() {
    return (
        <View>
            <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} score="5" />
            <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} score="4" />
            <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} score="3" />
        </View>
    )
}

const styles = StyleSheet.create({})
