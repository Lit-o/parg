import { View, StyleSheet } from 'react-native'
import { Text, TextInput } from '../hoc/WithFontAutoScaleOff'
import React, { SetStateAction, useState } from 'react'
import COLORS from '../const/Colors'



// TODO Validation system



type InputCustomizedProps = {
    inputSettings: {
        value: string
        placeholder: string
        id: number
        secure: boolean
        maxLength: number
        validationRule: 'text' | 'spaceless text' | 'password' | 'multiline'
        setValue: React.Dispatch<SetStateAction<string>>
        setIsValidate: React.Dispatch<SetStateAction<boolean | null>>
    }
}




const InputCustomized: React.FC<InputCustomizedProps> = ({ inputSettings:
    { id, secure, validationRule, placeholder, value, setValue, setIsValidate }
}) => {

    // ----- DATA AND STATE -----
    const [isFocused, setIsFocused] = useState(false);
    // ----- END - DATA AND STATE -----

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    const onChangeHandler = (e:string) => {
        setValue(e)
        if(e.trim().length !== 0) {
            // validator(e)
            setIsValidate(true)
        } else {
            setIsValidate(false)
        }
    }



    // // ----- REFERENCE ----- 
    // const regexValidation = /[^a-zA-Z0-9\s]/gi
    // const regexValidation2 = /[^a-zA-Z0-9\_]/gi

    // const [localInputValue, setLocalInputValue] = useState(value)
    // const [textInputStatus, setTextInputStatus] = useState('blur')
    // const textInputStyleSwitcher = () => {
    //     switch (textInputStatus) {
    //         case 'blur':
    //             return importedStyles.textInput
    //         case 'focus':
    //             return [importedStyles.textInput, importedStyles.textInputFocus]
    //         case 'validationFail':
    //             return [importedStyles.textInput, importedStyles.textInputValidationFail]
    //     }
    // }
    // const textInputStyle = textInputStyleSwitcher()
    // // ----- END - DATA AND STATE -----

    // // ----- HANDLERS -----
    // const onFocusHandler = () => {
    //     textInputStatus !== 'validationFail' && setTextInputStatus('focus')
    // }
    // const onBlurHandler = () => {
    //     textInputStatus !== 'validationFail' && setTextInputStatus('blur')
    // }

    // const onChangeHandler = (e) => {
    //     setValue(e)
    //     validator(e)
    // }


    // async function validator(e) {
    //     var matches = regexValidation.exec(e); // either an array or null
    //     var matchStatus = Boolean(matches);

    //     if (!matchStatus) {
    //         setTextInputStatus('focus')
    //         setIsValidate(true)
    //         if (e.length > 2) {
    //             setIsButtonAble(false)
    //             const nameStatus = await getUsernameStatusAPI(e)
    //             if (nameStatus.is_available) {
    //                 setIsButtonAble(true)
    //                 setIsValidate(true)
    //             } else {
    //                 if (nameStatus.username === currentUsername) {
    //                     setIsButtonAble(true)
    //                     setIsValidate(true)
    //                 } else {
    //                     setTextInputStatus('validationFail')
    //                     setIsButtonAble(false)
    //                     setIsValidate(false)
    //                 }
    //             }
    //         }
    //     } else {
    //         setTextInputStatus('validationFail')
    //         setIsValidate(false)
    //     }
    // }
    // // ----- END - REFERENCE -----



    // ----- MAIN RENDER -----
    return (
        <View>
            <TextInput
                value={value}
                secureTextEntry={secure}
                placeholder={placeholder}
                placeholderTextColor={COLORS.TEXT.terracottaSoot + '99'}

                onChangeText={onChangeHandler}
                onFocus={handleFocus}
                onBlur={handleBlur}
                
                autoCorrect={false}
                maxLength={15}
                
                style={[
                    styles.textInput,
                    isFocused && styles.textInputFocused
                ]}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    textInput: {
        width: 260,
        marginBottom: 10,
        paddingHorizontal: 12,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: COLORS.COMMON.FADED_CLAY,
        color: COLORS.TEXT.terracottaSoot,
        fontSize: 16,
    },
    textInputFocused: {
        borderColor: COLORS.COMMON.WASHED_TEAL,
    },
});

export default InputCustomized