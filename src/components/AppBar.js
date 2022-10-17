import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AppBar(){
  return (
    <View style={styles.appBar}>
      <Text style={styles.heading}>Liste de courses</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: "#E9EAEE",
    width: "100%",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  heading: {
    // color: "white",
    fontSize: 24,
    fontWeight: "bold"
  }
});
