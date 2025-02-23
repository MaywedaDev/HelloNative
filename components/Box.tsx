import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

interface BoxProps {
	children: React.ReactNode;
	style: ViewStyle;
}

const Box: React.FC<BoxProps> = ({ children, style }) => {
	return (
		<View style={[styles.container, style]}>
			<View style={styles.content}>{children}</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
		// margin: 5,
		backgroundColor: "#f0f0f0",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 8,
	},
	content: {
		width: "100%",
	},
});

export default Box;
