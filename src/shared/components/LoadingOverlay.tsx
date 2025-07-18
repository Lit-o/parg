import { StyleSheet, View, ActivityIndicator } from 'react-native';
import COLORS from '../const/Colors';


const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={COLORS.SYSTEM.WAITING} />
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
