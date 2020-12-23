import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default function BoxScreen(){
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOne}>Child #1</Text>
            <Text style={styles.textTwo}>Child #2</Text>
            <Text style={styles.textThree}>Child #3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textOne: {
        borderWidth: 1,
        borderColor: 'red',
        height: 60,
        backgroundColor: 'red',
    },
    textTwo: {
        borderWidth: 1,
        borderColor: 'green',
        top: 40,
        height: 60,
        backgroundColor: 'green'
    },
    textThree: {
        borderWidth: 1,
        borderColor: 'purple',
        height: 60,
        backgroundColor: 'purple'
    }
})