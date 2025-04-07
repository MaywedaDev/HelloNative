import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hello! This is home</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 16,
		color: "darkGrey",
		textAlign: "center",
	},
});

export default HomeScreen;
