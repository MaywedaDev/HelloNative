import { View, Text, StyleSheet } from "react-native";

const AboutScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hello! This is About</Text>
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

export default AboutScreen;
