import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { ColorType } from '../const/Colors';
import COLORS from '../const/Colors';



interface propsType {
    color?: ColorType
}



const LoadingOverlay = ({ color }: propsType) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color={color ? color : COLORS.SYSTEM.smolderingFire} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'transparent'
    },
})

export default LoadingOverlay;
