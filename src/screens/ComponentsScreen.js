import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function ComponentsScreen() {
    const name = "Michael Reeves"
    return (
        <View>
            <Text style={styles.textStyle}>
                Getting started with React Native
            </Text>
            <Text style={styles.nameStyle}>
                My name is {name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    nameStyle: {
        fontSize: 20
    }
})
