import { ImageBackground, Pressable, StyleSheet, View } from 'react-native'
import { Text, TextInput } from '../shared/hoc/WithFontAutoScaleOff'
import React, { useState } from 'react'
import COLORS from '../shared/const/Colors'
import LoadingOverlay from '../shared/components/LoadingOverlay'



interface LogInProps {
    onLogin: (username: string, password: string) => void;
}


// TODO inputs to separate Compo with options like secure and custom validations

const LogIn: React.FC<LogInProps> = ({ onLogin }) => {
    // ----- DATA AND STATE -----
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [firstPassword, setFirsPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    //TODO isFocuset separate to all inputs
    const [isFocused, setIsFocused] = useState(false);
    // ----- END - DATA AND STATE -----


    // ----- HANDLERS -----
    const handleLogin = async () => {
        if (isLoading) return;
        setIsLoading(true);

        try {
            // await onLogin(username, password);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const onPressAction = () => {}

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    // ----- END - HANDLERS -----


    // ----- ERROR RENDER AND HANDLER -----
    // function errorHandler() {
    //     setError(null)
    //     setErrorPlace(null)
    // }
    // if (error && !isFetching) {
    //     return <ErrorOverlay 
    //                 screen={'AllVenuesScreen'} 
    //                 place={errorPlace}
    //                 error={error}  
    //                 onConfirm={errorHandler} />
    // }
    // ----- END - ERROR RENDER AND HANDLER -----


    // ----- MAIN RENDER -----
    return (
        <ImageBackground
            source={require('../shared/assets/images/LOGIN.jpg')}
            style={styles.backgroundImage}
            blurRadius={2}>
            <View style={styles.glassCard}>
                <Text style={{ fontSize: 30, color: COLORS.TEXT.terracottaSoot }}>Login</Text>
                {/* <LoadingOverlay color={COLORS.COMMON.FIRE_RUST}/> */}
                {/* <LoadingOverlay color={'#5D7A9E'}/> */}
                <TextInput
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}

                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={[
                        styles.textInput,
                        isFocused && styles.inputFocused 
                    ]}
                />
                <TextInput
                    placeholder="First Password"
                    placeholderTextColor={COLORS.TEXT.terracottaSoot + '99'}
                    secureTextEntry
                    value={firstPassword}
                    onChangeText={setFirsPassword}

                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={[
                        styles.textInput,
                        isFocused && styles.inputFocused 
                    ]}
                />
                <TextInput
                    placeholder="Second Password"
                    placeholderTextColor={COLORS.TEXT.terracottaSoot + '99'}
                    secureTextEntry
                    value={secondPassword}
                    onChangeText={setSecondPassword}
                    
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={[
                        styles.textInput,
                        isFocused && styles.inputFocused 
                    ]}
                />
                <Pressable style={styles.button} onPress={onPressAction}>
                    <View>
                        <Text style={styles.buttonText}>DONE</Text>
                    </View>
                </Pressable>
            </View>


            {isLoading ? (
                <LoadingOverlay color={COLORS.COMMON.FIRE_RUST} />
            ) : null}


        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    textInput: {
        width: 260,
        paddingHorizontal: 12,
        marginTop: 10,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: COLORS.COMMON.WASHED_TEAL + '77',
        color: COLORS.TEXT.terracottaSoot,
        fontSize: 16,
    },
    inputFocused: {
        borderColor: COLORS.COMMON.WASHED_TEAL,
    },
    backgroundImage: {
        padding: 20,
        flex: 1,
        backgroundColor: COLORS.COMMON.BURNT_GOLD,
        // height: 244,
        resizeMode: 'cover',
        alignItems: 'center'
    },
    glassCard: {
        // margin: 'auto',
        marginTop: 40,
        width: 300,
        height: 340,
        // backgroundColor: COLORS.COMMON.BURNT_GOLD + `DD`,
        backgroundColor: COLORS.COMMON.BURNT_GOLD,
        borderRadius: 20,

        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 260,
        height: 44,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        
        borderRadius: 8,
        backgroundColor: COLORS.COMMON.WASHED_TEAL + '77',
        paddingHorizontal: 12,
    },
    buttonText: {
        color: COLORS.COMMON.BURNT_GOLD,
        fontWeight: 700,
        fontSize: 24
    }
});

export default LogIn;