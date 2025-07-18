import { View, PixelRatio } from 'react-native'
import { Text } from '../shared/hoc/WithFontAutoScaleOff'

console.log('Text 3', Text)


export default function TestText() {
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Wake up!2!!!</Text>
            {/* <Text style={{ fontSize: 30 * PixelRatio.getFontScale(-1) }}>Wake up!2!</Text> */}
            <View>
                <Text style={{fontSize: 30}} allowFontScaling={false}>Wake up!1!</Text>
            </View>
        </View>
    )
}