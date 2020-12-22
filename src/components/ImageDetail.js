import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default function ImageDetail(props) {
    return (<View>
            <Image source={props.imageSource}/>
            <Text>
                {props.title}
            </Text>
            <Text>
                Score: {props.score}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({})