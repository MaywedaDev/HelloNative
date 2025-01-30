import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <View style={styles.box}>
          <Text style={styles.boxText}>Hello World!</Text>
        </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: 300,
    borderColor: 'black',
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 6,
    padding: 20,
    margin: 20,
    backgroundColor: "purple",
    display: 'flex',
    alignItems: 'center'
  },
  boxText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  }

})
