import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login.tsx'
import LoadingOverlay from '../shared/components/LoadingOverlay.tsx';



const Stack = createNativeStackNavigator();



export default function AppScreens() {
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return (
        <>
            {isLoading ? <LoadingOverlay/> : (

                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        contentStyle: { backgroundColor: '#dd7744' },
                    }}
                    >
                        {isSignedIn ? (
                            <Stack.Screen name='Drawer' options={{ headerShown: false }}>
                                {() => <><View><Text>Wellcome to InitComponentAfterLogin!</Text></View></>}
                            </Stack.Screen>
                        ) : (
                            <Stack.Screen name='Login' options={{ headerShown: false }}>
                                {(props) => <Login {...props} setIsSignedIn={setIsSignedIn} />}
                            </Stack.Screen>
                        )}
                    </Stack.Navigator>
                </NavigationContainer>

                )
            }
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});