import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Enjoy, and drink responsibly!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        padding: 10,
        alignItems: "center",
    },
    text: {
        color: "#9F86C0",
        fontSize: 16,
        fontFamily: "Nunito",
    },
})
