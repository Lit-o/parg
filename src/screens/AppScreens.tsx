import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import LogIn from './LogIn'

export default function AppScreens() {

    const [isSignedIn, setIsSignedIn] = useState(false)

    return (
        <View style={styles.container}>
            {isSignedIn ? <Text style={styles.loginText}>Login</Text> :
                <>
                    <Text style={styles.loginText}>Sign Up</Text>
                    <LogIn onLogin={() => setIsSignedIn(true)} />
                </>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
});