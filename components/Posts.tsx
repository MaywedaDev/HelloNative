import { loadAsync } from "expo-font";
import { useEffect, useState } from "react";
import {
	View,
	StyleSheet,
	FlatList,
	Text,
	ActivityIndicator,
	TextInput,
	Pressable,
} from "react-native";

const Posts = () => {
	const [postList, setPostList] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const [refreshing, setRefreshing] = useState(false);
	const [postTitle, setPostTitle] = useState("");
	const [postBody, setPostBody] = useState("");
	const [isPosting, setIsPosting] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const fetchData = async (limit: number = 10) => {
		setError(null);
		try {
			// Simulating a network request
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
			);
			const data = await response.json();
			// console.log("data", data);
			setPostList(data);
		} catch (error) {
			console.error("Error fetching data:", error);
			setError("Failed to fetch posts. Please try again later.");
		}

		setLoading(false);
	};

	const handleRefresh = async () => {
		setRefreshing(true);
		await fetchData(20);
		setRefreshing(false);
	};

	const handlePost = async () => {
		setError(null);
		setIsPosting(true);
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						title: postTitle,
						body: postBody,
						userId: Math.round(Math.random() * 10),
					}),
				}
			);
			const data = await response.json();
			console.log("data", data);
			setPostList((prevPosts: any[]) => [data, ...prevPosts]);
		} catch (error) {
			console.error("Error posting data:", error);
			setError("Failed to post. Please try again later.");
		}
		setPostTitle("");
		setPostBody("");
		setIsPosting(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (loading) {
		return (
			<View style={styles.loadingContainer}>
				<ActivityIndicator size="large" color="#0000ff" />
				<Text style={styles.emptyText}>Loading...</Text>
			</View>
		);
	}

	return (
		<>
			{error && (
				<View style={styles.emptyContainer}>
					<Text style={styles.errorText}>{error}</Text>
				</View>
			)}

			<View style={styles.postContainer}>
				<Text style={styles.postHeader}>Add Posts</Text>
				<TextInput
					style={styles.postInput}
					placeholder="Title"
					value={postTitle}
					onChangeText={(text: string) => setPostTitle(text)}
				/>
				<TextInput
					style={styles.postInput}
					placeholder="Body"
					value={postBody}
					multiline={true}
					numberOfLines={4}
					onChangeText={(text: string) => setPostBody(text)}
				/>
				<Pressable style={styles.postButton} onPress={handlePost}>
					<Text style={{ color: "white", textAlign: "center" }}>
						{isPosting ? "Posting..." : "Add Post"}
					</Text>
				</Pressable>
			</View>
			<FlatList
				data={postList}
				renderItem={({
					item,
				}: {
					item: { title: string; body: string; id: number };
				}) => (
					<View style={styles.postContainer}>
						<Text style={styles.postTitle}>{item.title}</Text>
						<Text>{item.body}</Text>
					</View>
				)}
				ListEmptyComponent={() => (
					<View style={styles.emptyContainer}>
						<Text style={styles.emptyText}>No posts available</Text>
					</View>
				)}
				ListHeaderComponent={() => <Text style={styles.postHeader}>Posts</Text>}
				ListFooterComponent={() => (
					<Text style={styles.postFooter}>End of Posts</Text>
				)}
				keyExtractor={(item) => item.id.toString()}
				refreshing={refreshing}
				onRefresh={handleRefresh}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	postContainer: {
		padding: 20,
		marginVertical: 10,
		marginHorizontal: 16,
		backgroundColor: "#f5f5f5",
		borderRadius: 8,
		borderColor: "#000",
		borderWidth: 1,
	},
	postTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 5,
	},
	postHeader: {
		fontSize: 20,
		fontWeight: "bold",
		margin: 20,
	},
	postFooter: {
		textAlign: "center",
		marginVertical: 10,
		fontSize: 12,
		color: "#888",
	},
	emptyContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 20,
		padding: 20,
	},
	loadingContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 20,
		padding: 20,
		backgroundColor: "#f5f5f5",
		// borderRadius: 8,
		// borderColor: "#000",
		// borderWidth: 1,
		height: "100%",
	},
	emptyText: {
		fontSize: 16,
		color: "#888",
	},
	postInput: {
		borderWidth: 1,
		borderColor: "#00000033",
		padding: 10,
		borderRadius: 7,
		marginTop: 10,
	},
	postButton: {
		backgroundColor: "#0000ff",
		padding: 10,
		borderRadius: 5,
		marginTop: 10,
		alignItems: "center",
	},
	errorText: {
		color: "red",
		fontSize: 16,
		marginTop: 10,
	},
});

export default Posts;
