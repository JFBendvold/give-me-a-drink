import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function BackButton() {
    const route = useRouter();

    // Handle the search button press
    const handlePress = () => {
        route.back();
    }

    return (
        <TouchableOpacity style={styles.button} onPress={handlePress} activeOpacity={0.8}>
            <Ionicons name="arrow-back" size={24} color="#9F86C0" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#000',
        borderColor: '#9F86C0',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 20,
        top: 60,
        zIndex: 5,
    },
})
