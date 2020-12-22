import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>I'M BATMAN</Text>
    <Button onPress={() => navigation.navigate('Components')} title="Go To Component Demo"/>
    <Button onPress={() => navigation.navigate('List')} title="Go To List Demo"/>
    <Button onPress={() => navigation.navigate('Image')} title="Go To Image Demo"/>
    <Button onPress={() => navigation.navigate('Counter')} title="Go To Counter Demo"/>
    <Button onPress={() => navigation.navigate('Color')} title="Go To Color Demo"/>
    <Button onPress={() => navigation.navigate('Multiple')} title="Go To Multiple Demo"/>
    <Button onPress={() => navigation.navigate('Text')} title="Go To Text Demo"/>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 100,
  }
});

export default HomeScreen;
