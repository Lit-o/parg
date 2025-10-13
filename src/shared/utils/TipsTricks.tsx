// 1 ------------------------------------------------------------------------
import React, { useState, useEffect, SetStateAction } from 'react'
import { ImageBackground, Pressable, StyleSheet, View } from 'react-native'

import { Text } from '../hoc/WithFontAutoScaleOff'
import InputCustomized from '../components/InputCustomized'

import COLORS from '../const/Colors'

interface LoginProps {
    setIsSignedIn: React.Dispatch<SetStateAction<boolean>>
    // Practice with property typing 
    // ReactNode include string, number, boolean, JSX.Element etc.
    children?: React.ReactNode
    childrens?: React.JSX.Element[]
    someOptionalProp?: any 
    imageProps?: React.ComponentPropsWithoutRef<"img"> & string & {name: string}
    padding?: [number, number, number, number]
    style?: React.CSSProperties
    onClick?: () => void
    onDblClick?: (data: string) => string
}

type User = {
    name: string
}

// TS ignore comment for line below
let erIgnore:'errIgnore' = 'errIgnore'
// @ts-ignore
erIgnore = '2'

//React.JSX.Element unnecessary
const Login: React.FC<LoginProps> = ({ setIsSignedIn }): React.JSX.Element => {

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

    // ----- MAIN RENDER -----
    return (
        <ImageBackground
            source={require('../shared/assets/images/LOGIN.jpg')}
            style={styles.stylesCommon}
            blurRadius={2}>
            <View style={styles.stylesCommon}>
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
                <Pressable style={[styles.stylesCommon, !isButtonAble && styles.stylesCommonActive]} onPress={onPressAction} disabled={isButtonAble}>
                    <View>
                        <Text style={styles.stylesCommon}>DONE</Text>
                    </View>
                </Pressable>
            </View>
            {isLoading ? (
                <Text>Loading</Text>
            ) : null}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    stylesCommon: {
        width: 260,
        borderColor: COLORS.COMMON.WASHED_TEAL + '77',
    },
    stylesCommonActive: {
        backgroundColor: COLORS.BACKGROUNDS.FREEDOM_WIND
    }
});

export default Login;
// 1-END ------------------------------------------------------------------------
