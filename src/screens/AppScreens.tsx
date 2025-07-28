import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import LogIn from './LogIn'

export default function AppScreens() {
    const [counter, setCounter] = useState(0)

    return (
        <View style={styles.container}>
            <Text>Counter: {counter}</Text>
            <LogIn />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});