import { Pressable, Text, View } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import Styles from '../styles/page-styles';
export default function Page() {
    const params = useLocalSearchParams();
    const { name } = params;
    const { noun } = params;
    const { event } = params;
    return (
        <View style={Styles.page}>
            <Text style={{ transform: [{ rotate: '-90deg' }] }}>Hall Pass</Text>
            <Text>Mad Libs </Text>
            <Text>{name} is Cool{"\n"} for {noun} class.{"\n"}  instead, she/he/they will be attending the {event}</Text>
            <Link
                style={Styles.button}
                href="/">
                <Pressable >
                    <Text>Back</Text>
                </Pressable>
            </Link>
        </View>
    )
}
