import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Alert, View, Text } from 'react-native';
import { Image } from 'expo-image';

/**
 * Top banner component, displays the drink of the week
 */
export default function TopBanner() {
    const [drink, setDrink] = useState(null);
    
    useEffect(() => {
        setDrink({
            name: "Gin & Tonic",
            image: "https://example.com/image.jpg",
        });
    }, []);

    // Handle click on the banner
    const handleClick = () => {
        //TODO: Navigate to the drink of the week
        Alert.alert("Drink of the week", "Gin & Tonic");
    };
    
    if (!drink) {
        return null;
    }
    
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={handleClick}>
            <View style={styles.textContainer}>
                <Text style={styles.topText}>Drink of the week</Text>
                <Text style={styles.drinkName}>{drink.name}</Text>
            </View>
            <Image
                source={require('../assets/images/placeholder/drink.png')}
                style={styles.image}
                contentFit='cover'
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: "#9F86C0",
        borderWidth: 1,
        borderRadius: 20,
        width: "100%",
        height: 150,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    textContainer: {
        padding: 20,
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
    image: {
        width: 120,
        height: 120,
        borderRadius: 20,
        marginRight: 20,
    },
});