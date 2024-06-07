import React, { useCallback, useState, useEffect } from 'react';
import { Redirect, useRouter } from 'expo-router';
import { Text, View, StyleSheet } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import SearchButton from '../components/searchButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopBanner from '../components/topBanner';

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
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.content}>
        <SearchButton />
        <TopBanner />
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
  text: {
    color: "#fff",
    fontSize: 16,
    maxWidth: 300,
    fontFamily: 'Nunito-Bold',
  },
});
