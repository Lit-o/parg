import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import LogIn from './LogIn'



export default function AppScreens() {
    const [isSignedIn, setIsSignedIn] = useState(false)

    return (
        <View style={styles.container}>
            {isSignedIn ? 
                <Text>
                    After login placeholder
                </Text> 
                :
                <>
                    <LogIn onLogin={() => setIsSignedIn(true)} />
                </>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});