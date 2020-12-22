import React, {useState} from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default function CounterScreen() {
    const [count, setCount] = useState(0)
    return (
        <View>
            <Button onPress={() => setCount(count + 1)} title="Increase"/>
            <Button onPress={() => setCount(count - 1)} title="Decrease"/>
            <Text style={styles.countText}>Current Count: {count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    countText: {
        fontSize: 30,
    }
})
