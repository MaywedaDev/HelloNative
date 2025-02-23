import Box from "@/components/Box";
import PokemonCard from "@/components/PokemonCard";
import { StatusBar } from "expo-status-bar";
import {
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	View,
	useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
	const { width } = useWindowDimensions();

	const styles = StyleSheet.create({
		safeArea: {
			flex: 1,
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
		<View
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
				<ScrollView style={styles.screen}>
					{pokemonData.map((pokemon, i) => (
						<PokemonCard key={i} {...pokemon} />
					))}
				</ScrollView>
			</SafeAreaView>
		</View>
	);
}
