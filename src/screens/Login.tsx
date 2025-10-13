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
}
// ----- END - TYPES -----



const Login: React.FC<LoginProps> = ({ setIsSignedIn }) => {

    // ----- DATA AND STATE -----
    const [isLoading, setIsLoading] = useState(false);

    const [user, setUser] = useState<User | null>(null)
    console.log(user?.name)


    const [username, setUsername] = useState('');
    const [firstPassword, setFirsPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');

    const [isValidateUserName, setIsValidateUserName] = useState<boolean | null>(null)
    const [isValidateFirstPassword, setIsValidateFirstPassword] = useState<boolean | null>(null)
    const [isValidateSecondPassword, setIsValidateSecondPassword] = useState<boolean | null>(null)

    const [isButtonAble, setIsButtonAble] = useState<boolean | null>(null)
    // ----- END - DATA AND STATE -----


    // ----- EFFECTS AND ACTIONS ----- 
    useEffect(()=>{
        // setIsSignedIn(prev => !prev)
    }, [])

    type LocalData = 'on' | 'off'
    useEffect(()=>{
        // const previousData = localStorage.getItem('Data') as LocalData
        // const previousData2 = localStorage.getItem('Data') as unknown as LocalData
        console.log('1')
    },[])
    // ----- END - EFFECTS AND ACTIONS -----


    // ----- HANDLERS -----
    const onPressAction = () => {
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
                <Text style={{ fontSize: 30, color: COLORS.TEXT.terracottaSoot }}>Login</Text>

                <InputCustomized inputSettings={{
                    id:1, 
                    value: username,
                    placeholder:'Cusomized', 
                    secure: false, 
                    validationRule:'spaceless text', 
                    setValue: setUsername,
                    setIsValidate: setIsValidateUserName}}
                />

                <InputCustomized inputSettings={{
                    id:2, 
                    value: firstPassword,
                    placeholder:'Cusomized', 
                    secure: true, 
                    validationRule:'password', 
                    setValue: setFirsPassword,
                    setIsValidate: setIsValidateFirstPassword}}
                />

                <InputCustomized inputSettings={{
                    id:3, 
                    value: secondPassword,
                    placeholder:'Cusomized', 
                    secure: true, 
                    validationRule:'password', 
                    setValue: setSecondPassword,
                    setIsValidate: setIsValidateSecondPassword}}
                />


                <Pressable style={[styles.button, !isButtonAble && styles.buttonDisable]} onPress={onPressAction} disabled={isButtonAble}>
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
        backgroundColor: COLORS.COMMON.WASHED_TEAL,
        paddingHorizontal: 12,
    },
    buttonDisable: {
        backgroundColor: COLORS.COMMON.WASHED_TEAL + '77',
    },
    buttonText: {
        color: COLORS.COMMON.BURNT_GOLD,
        fontWeight: 700,
        fontSize: 24
    }
});

export default Login;