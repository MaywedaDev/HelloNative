import { StatusBar } from "expo-status-bar";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	useWindowDimensions,
	TextInput,
	Image,
	KeyboardAvoidingView,
	Pressable,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Posts from "@/components/Posts";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "@/components/screens/AboutScreen";
import HomeScreen from "@/components/screens/HomeScreen";

export default function Index() {
	const { width } = useWindowDimensions();

	const Stack = createNativeStackNavigator();

	const styles = StyleSheet.create({
		safeArea: {
			flex: 1,
			display: "flex",
			justifyContent: "center",
			// alignItems: "center",
		},
		screen: {
			width: "100%",
			height: "auto",
			flex: 1,
			// paddingVertical: 20,
			backgroundColor: "white",
		},
		boxText: {
			color: "white",
			fontSize: width > 400 ? 36 : 16,
			textAlign: "center",
		},
		image: {
			width: "100%",
			height: 360,
			marginVertical: 20,
		},
		androidShadow: {
			elevation: 30,
			shadowColor: "#0000ff",
		},
		card: {
			width: "100%",
			padding: 15,
			borderRadius: 8,
			borderWidth: 3,
			borderColor: "#000",
			color: "#f5f5f5",
			marginVertical: 10,
		},
		cardText: {
			fontSize: 20,
		},
		input: {
			height: 48,
			borderColor: "rgba(0, 0, 0, 0.4)",
			borderWidth: 1,
			padding: 8,
			marginTop: 12,
			borderRadius: 10,
			// marginHorizontal: 15,
		},
		nameText: {
			fontSize: 30,
			fontWeight: 600,
		},
		multiLineText: {
			minHeight: 100,
			fontSize: 22,
		},
		form: {
			marginHorizontal: 20,
			padding: 20,
			borderRadius: 15,
			elevation: 10,
			backgroundColor: "#f5f5f5",
		},
		label: {
			fontSize: 18,
			fontWeight: 600,
			marginTop: 12,
		},
		btn: {
			backgroundColor: "#0000ff",
			width: "100%",
			height: 48,
			borderRadius: 12,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			marginVertical: 20,
		},
	});

	return (
		<NavigationContainer>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="About" component={AboutScreen} />
		</NavigationContainer>
	);
}
