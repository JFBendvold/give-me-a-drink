import { useLocalSearchParams } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Drink() {
    const { id } = useLocalSearchParams();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    content: {
        flex: 1,
        justifyContent: "top",
        alignItems: "top",
        paddingTop: 20,
        paddingHorizontal: 20,
    },
})