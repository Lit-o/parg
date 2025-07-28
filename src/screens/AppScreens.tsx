import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LogIn from './LogIn'

export default function AppScreens() {
    return (
        <View style={styles.container}>
            <LogIn />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});