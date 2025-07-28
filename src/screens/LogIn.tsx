import { StyleSheet, View } from 'react-native'
import { Text, TextInput } from '../shared/hoc/WithFontAutoScaleOff'
import React from 'react'
import COLORS from '../shared/const/Colors'
import LoadingOverlay from '../shared/components/LoadingOverlay'

export default function LogIn() {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, color: COLORS.TEXT.terracottaSoot }}>LogIn</Text>
            <TextInput style={styles.textInput}/>
            {/* <LoadingOverlay color={COLORS.COMMON.FIRE_RUST}/> */}
            {/* <LoadingOverlay color={'#5D7A9E'}/> */}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: COLORS.COMMON.BURNT_GOLD
    },
    textInput: {
        marginTop: 10,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: COLORS.COMMON.WASHED_TEAL
    }
});