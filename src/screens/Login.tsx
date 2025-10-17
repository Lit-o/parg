import React, { useState, useEffect, SetStateAction } from 'react'
import { ImageBackground, Pressable, StyleSheet, View } from 'react-native'

import { Text } from '../shared/hoc/WithFontAutoScaleOff'
import LoadingOverlay from '../shared/components/LoadingOverlay'
import InputCustomized from '../shared/components/InputCustomized'

import COLORS from '../shared/const/Colors'



// --- TYPES ---
type LoginProps = {
    setIsSignedIn: React.Dispatch<SetStateAction<boolean>>
}
type User = {
    name: string
    firstPassword: string
    secondPassword: string
}
// ----- END - TYPES -----



const Login: React.FC<LoginProps> = ({ setIsSignedIn }) => {

    // ----- DATA AND STATE -----
    const [isLoading, setIsLoading] = useState(false);

    const [username, setUsername] = useState('');
    const [firstPassword, setFirsPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');

    const [isValidateUserName, setIsValidateUserName] = useState<boolean | null>(null)
    const [isValidateFirstPassword, setIsValidateFirstPassword] = useState<boolean | null>(null)
    const [isValidateSecondPassword, setIsValidateSecondPassword] = useState<boolean | null>(null)

    const [isLoginDataFilledCorrect, setIsLoginDataFilledCorrect] = useState<boolean | null>(null)
    // ----- END - DATA AND STATE -----


    // ----- EFFECTS AND ACTIONS ----- 
    useEffect(()=>{
        setIsLoginDataFilledCorrect(isValidateUserName && isValidateFirstPassword && isValidateSecondPassword)
    }, [isValidateUserName, isValidateFirstPassword, isValidateSecondPassword])
    // ----- END - EFFECTS AND ACTIONS -----


    // ----- HANDLERS -----
    const setUserDataSecure = ({name, firstPassword, secondPassword}: User) => {
        // TODO
        // Add Keychain
    }

    const onPressAction = () => {
        setUserDataSecure({
            name: username,
            firstPassword: firstPassword,
            secondPassword: secondPassword
        })
        setIsSignedIn(true)
    }
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
                <Text style={styles.titleText}>Login</Text>

                <InputCustomized inputSettings={{
                    id:1, 
                    value: username,
                    maxLength: 15,
                    placeholder:'Name', 
                    secure: false, 
                    validationRule:'spaceless text', 
                    setValue: setUsername,
                    setIsValidate: setIsValidateUserName}}
                />

                <InputCustomized inputSettings={{
                    id:2, 
                    value: firstPassword,
                    maxLength: 15,
                    placeholder:'Password one', 
                    secure: true, 
                    validationRule:'password', 
                    setValue: setFirsPassword,
                    setIsValidate: setIsValidateFirstPassword}}
                />

                <InputCustomized inputSettings={{
                    id:3, 
                    value: secondPassword,
                    maxLength: 15,
                    placeholder:'Password two', 
                    secure: true, 
                    validationRule:'password', 
                    setValue: setSecondPassword,
                    setIsValidate: setIsValidateSecondPassword}}
                />


                <Pressable style={[styles.button, !isLoginDataFilledCorrect && styles.buttonDisable]} onPress={onPressAction} disabled={!isLoginDataFilledCorrect}>
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
    titleText: { 
        marginBottom: 20,
        fontSize: 30, 
        color: COLORS.TEXT.terracottaSoot 
    },
    backgroundImage: {
        padding: 20,
        flex: 1,
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
        borderWidth: 1,
        borderColor: COLORS.COMMON.METALLIC_STEEL,

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
        backgroundColor: COLORS.COMMON.WASHED_TEAL,
        paddingHorizontal: 12,

        borderWidth: 1,
        borderColor: COLORS.COMMON.DEEP_NIGHT_BLUE + '55',
        
    },
    buttonDisable: {
        backgroundColor: COLORS.COMMON.FADED_CLAY,
    },
    buttonText: {
        color: COLORS.COMMON.DEEP_NIGHT_BLUE,
        fontWeight: 700,
        fontSize: 24
    }
});

export default Login;