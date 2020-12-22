import React, {useReducer} from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {...state, counter: state.counter + 1}
        case 'decrement':
            return {...state, counter: state.counter - 1}
        default:
            return state
        }   
}

export default function CounterScreen() {
    const [state, dispatch] = useReducer(reducer, { counter: 0})
    return (
        <View>
            <Button onPress={() => dispatch({type: 'increment'})} title="Increase"/>
            <Button onPress={() => dispatch({type: 'decrement'})} title="Decrease"/>
            <Text style={styles.countText}>Current Count: {state.counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    countText: {
        fontSize: 30,
    }
})
