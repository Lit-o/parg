import { ImageBackground, StyleSheet, View } from 'react-native'
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
        <ImageBackground
            source={require('../shared/assets/images/LOGIN.jpg')}
            style={styles.backgroundImage}
            blurRadius={2}>
            <View style={styles.glassCard}>
                <Text style={{ fontSize: 30, color: COLORS.TEXT.terracottaSoot }}>Login Page</Text>
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
                    placeholder="First Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Second Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
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
        borderColor: COLORS.COMMON.WASHED_TEAL
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
        height: 400,
        // backgroundColor: COLORS.COMMON.BURNT_GOLD + `DD`,
        backgroundColor: COLORS.COMMON.BURNT_GOLD,
        borderRadius: 20,

        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LogIn;