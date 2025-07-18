// import { NewAppScreen } from '@react-native/new-app-screen';
import { useEffect } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, Appearance, SafeAreaView } from 'react-native';
import AppScreens from './screens/AppScreens';

// DISABLE FONT SCALING
// maxFontSizeMultiplier can be alternative in future
// Text.defaultProps = Text.defaultProps || {};
// Text.defaultProps.allowFontScaling = false
// TextInput.defaultProps = TextInput.defaultProps || {};
// TextInput.defaultProps.allowFontScaling = false;

// TS Solution
// interface TextWithDefaultProps extends Text {
//     defaultProps?: { allowFontScaling?: boolean };
// }
// interface TextInputWithDefaultProps extends TextInput {
//     defaultProps?: { allowFontScaling?: boolean };
// }
// ((Text as unknown) as TextWithDefaultProps).defaultProps = ((Text as unknown) as TextWithDefaultProps).defaultProps || {};
// ((Text as unknown) as TextWithDefaultProps).defaultProps!.allowFontScaling = false;
// ((TextInput as unknown) as TextInputWithDefaultProps).defaultProps = ((TextInput as unknown) as TextInputWithDefaultProps).defaultProps || {};
// ((TextInput as unknown) as TextInputWithDefaultProps).defaultProps!.allowFontScaling = false;


// TS Quick Solution
// (Text as any).defaultProps = (Text as any).defaultProps || {};
// (Text as any).defaultProps.allowFontScaling = false;
// (TextInput as any).defaultProps = (TextInput as any).defaultProps || {};
// (TextInput as any).defaultProps.allowFontScaling = false;

// "... this stopped working in 0.78 when we ship React 19."  c Cipolleschi






// [EXAMPLE] ColorScheme control  for future manual color theme settings
// const colorScheme = Appearance.getColorScheme();
// if (colorScheme === 'dark') {
//   // Use dark color scheme
// }

function App() {
    // const isDarkMode = useColorScheme() === 'dark';
    useEffect(() => Appearance.setColorScheme('light'), [])

    return (
        // SafeAreaView - the safe area boundaries of a device iOS version 11 or later
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
                <StatusBar barStyle={'light-content'} />
                {/* <NewAppScreen templateFileName="App.tsx" /> */}
                <AppScreens/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
