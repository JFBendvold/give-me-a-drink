import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Alert, View, Text } from 'react-native';

/**
 * Top banner component, displays the drink of the week
 */
export default function HomeTitle() {
    const [quote, setQuote] = useState("You don't need to have fun to drink, but it helps");
    const [author, setAuthor] = useState("Anonymous");

    return (
        <View style={styles.container}>
            <Text style={styles.quote}>{quote}</Text>
            <Text style={styles.author}>- {author}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 60,
    },
    quote: {
        color: "#9F86C0",
        fontSize: 24,
        fontFamily: "Nunito-Italic",
        textAlign: "center",
        maxWidth: 300,
    },
    author: {
        color: "#333",
        fontSize: 16,
        fontFamily: "Nunito",
        textAlign: "right",
        width: "100%",
        maxWidth: 300,
    },
});