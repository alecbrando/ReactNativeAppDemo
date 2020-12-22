import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default function TextScreen(){

    const [text, setText] = useState('')

    return (
        <View>
            <Text>Enter a Password:</Text>
            <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={text}
            onChangeText={(t) => setText(t)}
            />
            {text.length < 5 ? <Text>Password must be longer than 5 characters</Text> : null }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})
