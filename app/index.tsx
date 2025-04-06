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

export default function Index() {
	const { width } = useWindowDimensions();

	const [name, setName] = useState("");
	const [errors, setErrors] = useState({});
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const validateForm = () => {
		let errors: { userName: string; password: string } = {
			userName: "",
			password: "",
		};

		if (!userName) errors.userName = "Name is required";
		if (!password) errors.password = "Password is required";

		setErrors(errors);

		return !errors.password && !errors.userName;
	};

	const formImage = require("../assets/images/adaptive-icon.png");

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

	const pokemonData = [
		{
			name: "Pikachu",
			image: require("../assets/images/pikachu.png"),
			moves: [
				"Thunder Shock",
				"Quick Attack",
				"Iron Tail",
				"Electro Ball",
				"Thunderbolt",
			],
			weaknesses: ["Ground", "Rock", "Ice"],
			hp: 34,
			type: "electric",
		},
		{
			name: "Bulbasaur",
			image: require("../assets/images/bulbasaur.png"),
			moves: ["Vine Whip", "Razor Leaf", "Seed Bomb", "Tackle"],
			weaknesses: ["Fire", "Flying", "Psychic", "Ice"],
			hp: 45,
			type: "grass",
		},
		{
			name: "Charmander",
			image: require("../assets/images/charmander.png"),
			moves: ["Ember", "Scratch", "Dragon Breath", "Fire Fang"],
			weaknesses: ["Water", "Ground", "Rock"],
			hp: 39,
			type: "fire",
		},
		{
			name: "Squirtle",
			image: require("../assets/images/squirtle.png"),
			moves: ["Water Gun", "Bubble", "Bite", "Aqua Tail"],
			weaknesses: ["Electric", "Grass"],
			hp: 44,
			type: "water",
		},
		// {
		// 	name: "Eevee",
		// 	image: require("../assets/images/pictures/eevee.png"),
		// 	moves: ["Tackle", "Quick Attack", "Bite", "Shadow Ball"],
		// 	weaknesses: ["Fighting"],
		// 	hp: 55,
		// 	type: "normal",
		// },
	];

	return (
		<KeyboardAvoidingView
			behavior="padding"
			keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 10}
			style={{
				flex: 1,
				height: "100%",
				display: "flex",
				flexDirection: "column",
				backgroundColor: "#f6f6f6",
			}}
		>
			<StatusBar backgroundColor="#0000ff" />
			<SafeAreaView style={styles.safeArea}>
				<Posts />
			</SafeAreaView>
		</KeyboardAvoidingView>
	);
}
