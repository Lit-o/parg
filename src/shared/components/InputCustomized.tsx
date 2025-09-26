import { View, StyleSheet } from 'react-native'
import { Text, TextInput } from '../hoc/WithFontAutoScaleOff'
import React, { SetStateAction, useState } from 'react'
import COLORS from '../const/Colors'



interface InputCustomizedProps {
    inputSettings: {
        value: string
        placeholder: string
        id: number
        secure: boolean
        validationRule: 'text' | 'spaceless text' | 'password' | 'multiline'
        setValue: React.Dispatch<SetStateAction<string>>
        setIsValidate: React.Dispatch<SetStateAction<boolean | null>>
    }
}



const InputCustomized: React.FC<InputCustomizedProps> = ({ inputSettings: { id, secure, validationRule, placeholder, value, setValue, setIsValidate } }) => {

    // ----- DATA AND STATE -----
    const [isFocused, setIsFocused] = useState(false);
    // ----- END - DATA AND STATE -----

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    
    const onChangeHandler = (text: string) => {
        // validator(e)
        setValue(text)
    }


    console.log(id, secure, validationRule)


    return (
        <View>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={COLORS.TEXT.terracottaSoot + '99'}
                secureTextEntry={secure}
                value={value}
                onChangeText={onChangeHandler}

                onFocus={handleFocus}
                onBlur={handleBlur}
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
        paddingHorizontal: 12,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: COLORS.COMMON.WASHED_TEAL + '77',
        color: COLORS.TEXT.terracottaSoot,
        fontSize: 16,
    },
    textInputFocused: {
        borderColor: COLORS.COMMON.WASHED_TEAL,
    },
});

export default InputCustomized