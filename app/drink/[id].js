import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Dimensions, TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import BackButton from '../../components/drink/backButton';
import Animated, {
	interpolate,
	useAnimatedRef,
	useAnimatedStyle,
	useScrollViewOffset
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const IMG_HEIGHT = 300;

export default function Drink() {
    const { id } = useLocalSearchParams();
    const [drink, setDrink] = useState(null);

    // Load the drink
    useEffect(() => {
        setDrink({
            id: id,
            name: "Gin & Tonic",
            image: "https://example.com/image.jpg",
            favorite: false,
            totalLikes: 37,
            ingredients: [
                { name: "Gin", amount: "4 cl", amountAlt: "2 oz" },
                { name: "Tonic water", amount: "12 cl", amountAlt: "6 oz" },
                { name: "Lime", amount: "1 slice", amountAlt: "1 slice" }
            ],
            description: "Gin & Tonic is a classic cocktail made with gin and tonic water. It is usually garnished with a slice of lime. The drink tastes best when served in a highball glass with ice cubes.",
            guide: [
                { step: 1, text: "Fill a glass with ice cubes." },
                { step: 2, text: "Add the gin and tonic water." },
                { step: 3, text: "Stir gently." },
                { step: 4, text: "Garnish with a slice of lime." }
            ]
        });
    }, []);

    // Scroll parallax effect
    const scrollRef = useAnimatedRef();
	const scrollOffset = useScrollViewOffset(scrollRef);

    const imageAnimatedStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateY: interpolate(
						scrollOffset.value,
						[-IMG_HEIGHT, 0, IMG_HEIGHT],
						[-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
					)
				},
				{
					scale: interpolate(scrollOffset.value, [-IMG_HEIGHT, 0, IMG_HEIGHT], [2, 1, 1])
				}
			]
		};
	});

    // Handle click on the favorite button
    function handleFavorite() {
        Alert.alert("Favorite", "Drink has been added to favorites");
    }

    return (
    <View style={styles.container}>
        <BackButton />
        <Animated.ScrollView ref={scrollRef} style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
            <Animated.Image
                source={require('../../assets/images/placeholder/drink.png')}
                style={[styles.image, imageAnimatedStyle]}
                contentFit='contain'
            />
            <View style={styles.content}>
                <View style={styles.topRow}>
                    <Text style={styles.title}>
                        {drink?.name}
                    </Text>
                    <TouchableOpacity style={styles.favoriteButton} onPress={handleFavorite}>
                        <Ionicons name={drink?.favorite ? "heart" : "heart-outline"} size={28} color="#9F86C0" />
                        <Text style={styles.smallText}>({drink?.totalLikes})</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.description}>{drink?.description}</Text>
                <Text style={styles.ingredientTitle}>Ingredients:</Text>
                <View style={{ marginBottom: 10 }} />
                {drink?.ingredients.map((ingredient, index) => (
                    <View key={index} style={styles.ingredient}>
                        <Text style={styles.ingridientText}>{ingredient.name}</Text>
                        <Text style={styles.ingridientAmount}>{ingredient.amount}</Text>
                    </View>
                ))}
                <Text style={styles.ingredientTitle}>Guide:</Text>
                <View style={{ marginBottom: 10 }} />
                {drink?.guide.map((step, index) => (
                    <View key={index} style={styles.step}>
                        <View style={styles.stepCount}>
                            <Text style={styles.stepCountText}>
                                {step.step}
                            </Text>
                        </View>
                        <Text style={styles.stepText}>{step.text}</Text>
                    </View>
                ))}
            </View>
        </Animated.ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: '#000'
	},
	image: {
		width: width,
		height: IMG_HEIGHT
	},
    content: {
        padding: 20,
        backgroundColor: "#000",
    },
    title: {
        color: "#fff",
        fontSize: 36,
        fontFamily: "Nunito",
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    favoriteButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    smallText: {
        color: "#9F86C0",
        fontSize: 16,
        marginLeft: 5,
        fontFamily: "Nunito",
    },
    description: {
        color: "#fff",
        fontSize: 16,
        marginTop: 10,
        fontFamily: "Nunito",
        marginBottom: 10,
    },
    ingredient: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    ingridientText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Nunito-Bold",
    },
    ingridientAmount: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Nunito",
    },
    ingredientTitle: {
        color: "#9F86C0",
        fontSize: 20,
        fontFamily: "Nunito-Bold",
        marginTop: 10,
    },
    step: {
        flexDirection: "row",
        marginBottom: 10,
    },
    stepCount: {
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 20,
        width: 28,
        height: 28,
        justifyContent: "center",
        alignItems: "center",
    },
    stepCountText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Nunito-Bold",
    },
    stepText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Nunito",
        marginLeft: 10,
    },
})