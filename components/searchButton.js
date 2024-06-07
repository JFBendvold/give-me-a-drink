import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function SearchButton() {
    // Handle the search button press
    const handlePress = () => {
        console.log('Search button pressed');
        Alert.alert('Search button pressed');
    }

    return (
        <TouchableOpacity style={styles.button} onPress={handlePress} activeOpacity={0.8}>
            <Ionicons name="search" size={24} color="#9F86C0" />
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
        right: 20,
        top: 10,
        zIndex: 5,
    },
})
