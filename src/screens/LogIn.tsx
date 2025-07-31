import { StyleSheet, View } from 'react-native'
import { Text, TextInput } from '../shared/hoc/WithFontAutoScaleOff'
import React, { useState } from 'react'
import COLORS from '../shared/const/Colors'
import LoadingOverlay from '../shared/components/LoadingOverlay'

interface LogInProps {
    onLogin: (username: string, password: string) => void;
}

const LogIn: React.FC<LogInProps> = ({ onLogin }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (isLoading) return;
        setIsLoading(true);

        try {
            await onLogin(username, password);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, color: COLORS.TEXT.terracottaSoot }}>LogIn</Text>
            <TextInput style={styles.textInput}/>
            {/* <LoadingOverlay color={COLORS.COMMON.FIRE_RUST}/> */}
            {/* <LoadingOverlay color={'#5D7A9E'}/> */}
            <TextInput
                style={styles.textInput}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            {isLoading ? (
                <LoadingOverlay color={COLORS.COMMON.FIRE_RUST} />
            ) : null}
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

export default LogIn;