import {
	Image,
	ImageSourcePropType,
	Platform,
	StyleSheet,
	Text,
	View,
} from "react-native";

type CardProps = {
	name: string;
	image: ImageSourcePropType;
	moves: string[];
	hp: number;
	weaknesses: string[];
	type: string;
};

const PokemonCard: React.FC<CardProps> = ({
	name,
	image,
	moves,
	hp,
	weaknesses,
	type,
}) => {
	const { borderColor, emoji } = getTypeDetails(type);
	return (
		<>
			<View style={styles.container}>
				<View style={styles.nameContainer}>
					<Text style={styles.name}>{name}</Text>
					<Text style={styles.hp}>❤️ {hp}</Text>
				</View>

				<Image
					accessibilityLabel={`${name} pokemon`}
					style={styles.image}
					source={image}
					resizeMode="contain"
				/>

				<View style={styles.typeContainer}>
					<View style={{ ...styles.badge, borderColor: borderColor }}>
						<Text style={styles.typeEmoji}>{emoji}</Text>
						<Text style={styles.typeText}>{type}</Text>
					</View>
				</View>

				<View>
					<Text style={styles.header}>Moves</Text>
					<Text style={styles.typeText}>{moves.join(", ")}</Text>
				</View>
				<View>
					<Text style={styles.header}>Weakness</Text>
					<Text style={styles.typeText}>{weaknesses.join(", ")}</Text>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#f5f5f5",
		padding: 15,
		margin: 15,
		borderWidth: 3,
		borderColor: "#000000",
		borderRadius: 8,
		display: "flex",
		flexDirection: "column",
		gap: 20,
		// height: 900,
		...Platform.select({
			ios: {
				shadowOffset: {
					width: 2,
					height: 2,
				},
				shadowColor: "#333",
				shadowOpactiy: 0.3,
				shadowRadius: 4,
			},
			android: {
				elevation: 6,
			},
		}),
	},
	image: {
		width: "100%",
		objectFit: "scale-down",
		height: 350,
	},
	nameContainer: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
	},
	name: {
		fontSize: 28,
		fontWeight: 700,
	},
	hp: {
		fontSize: 18,
	},
	header: {
		fontWeight: 600,
		fontSize: 18,
	},
	typeContainer: {
		marginBottom: 40,
		alignItems: "center",
	},
	badge: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 6,
		paddingHorizontal: 12,
		borderRadius: 30,
		borderWidth: 4,
	},
	typeEmoji: {
		fontSize: 30,
		marginRight: 12,
	},
	typeText: {
		fontSize: 22,
		fontWeight: "bold",
		// textTransform: "capitalize",
	},
});

const getTypeDetails = (type: string) => {
	switch (type.toLowerCase()) {
		case "electric":
			return { borderColor: "#FFD780", emoji: "⚡" };
		case "water":
			return { borderColor: "#6493EA", emoji: "💧" };
		case "fire":
			return { borderColor: "#FF5733", emoji: "🔥" };
		case "grass":
			return { borderColor: "#66CC66", emoji: "🌿" };
		default:
			return { borderColor: "#ABABAB", emoji: "" };
	}
};

export default PokemonCard;
