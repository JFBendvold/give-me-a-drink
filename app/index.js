import React, { useCallback, useState, useEffect } from 'react';
import { Redirect, useRouter } from 'expo-router';
import { Text, View, StyleSheet } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


export default function Index() {
  const [fontsLoaded, fontError] = useFonts({ // Load fonts
    'Nunito': require('../assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf'),
  });
  const router = useRouter();

  /**
   * Called when the root view is laid out
   */
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // If the fonts are not loaded
  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This is the index screen. Edit the file app/index.js to change this
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    maxWidth: 300,
    fontFamily: 'Nunito-Bold',
  },
});