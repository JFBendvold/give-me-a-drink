import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Alert, View, Text } from 'react-native';
import { Image } from 'expo-image';

/**
 * Top banner component, displays the drink of the week
 */
export default function DiscoverButton() {
    // Handle click on the banner
    const handleClick = () => {
        //TODO: Navigate to the drink of the week
        Alert.alert("Discover");
    };
    
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={handleClick}>
            <View style={styles.textContainer}>
                <Text style={styles.drinkName}>
                    Give me a drink
                </Text>
                <Text style={styles.topText}>
                    Based on what you have
                </Text>
            </View>
            <View style={styles.iconContainer}>
                <Ionicons name="color-wand-outline" size={64} color="#9F86C0" />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5E548E",
        borderRadius: 20,
        width: "100%",
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    textContainer: {
        padding: 20,
        alignItems: "flex-start",
        justifyContent: "center",
    },
    topText: {
        color: "#fff",
        fontSize: 12,
        fontFamily: "Nunito-Bold",
    },
    drinkName: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "Nunito-Bold",
    },
    iconContainer: {
        padding: 20,
        marginRight: 20,
    },
});