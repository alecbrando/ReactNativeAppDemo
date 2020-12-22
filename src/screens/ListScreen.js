import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native';

export default function ListScreen() {
    const friends = [
        {name: 'Friend #1', age: 2},
        {name: 'Friend #2', age: 3},
        {name: 'Friend #3', age: 4},
        {name: 'Friend #4', age: 5},
        {name: 'Friend #5', age: 6}
    ]
    return (
        <FlatList keyExtractor={(friend) => friend.name} data={friends} renderItem={({item}) => {
             return <Text style={styles.textStyle}>{item.name} Age {item.age}</Text>
        }}/>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})
