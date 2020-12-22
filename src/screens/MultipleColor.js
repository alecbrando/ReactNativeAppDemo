import React, {useState} from 'react'
import { StyleSheet, View, Button, FlatList, Text } from 'react-native'

export default function MultipleColor() {
    const [select, setSelect] = useState(0)
    const [red, setRed] = useState(0)
    const [blue, setBlue] = useState(0)
    const [green, setGreen] = useState(0)

    return (
        <View>
            <Text>Red</Text>
            <Button onPress={() => setRed(red + 10)} title="More Red"/>
            <Button onPress={() => setRed(red - 10)} title="Less Red"/>
            <Text>Green</Text>
            <Button onPress={() => setGreen(green + 10)} title="More Green"/>
            <Button onPress={() => setGreen(green - 10)} title="Less Green"/>
            <Text>Blue</Text>
            <Button onPress={() => setBlue(blue + 10)} title="More Blue"/>
            <Button onPress={() => setBlue(blue - 10)} title="Less Blue"/>
            <View style={{width: 100, height: 100, backgroundColor: `rgb(${red},${green},${blue})`}}></View>
        </View>
    )
}


const styles = StyleSheet.create({
})
