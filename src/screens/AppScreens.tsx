import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import Login from './Login.tsx'



export default function AppScreens() {
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false)

    return (
        <View style={styles.container}>
            {isSignedIn ? 
                <View>
                    <Text>
                        GO INSIDE APP(TODO first compo after login)
                    </Text>
                        <Pressable onPress={() => {
                            console.log('pressed!')
                            setIsSignedIn(true)
                        }}
                        >
                        <Text>Login</Text>
                    </Pressable> 
                </View>
                :
                <>
                    <Login setIsSignedIn={setIsSignedIn} />
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