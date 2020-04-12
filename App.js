import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import BookCount from "./components/BookCount";
export default function App() {
  const type = ["total", "reading", "read"];
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView />
      <View
        style={{
          height: 70,
          borderBottomWidth: 2,
          borderBottomColor: "#e9e9e9",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 24 }}>Book Worm</Text>
      </View>
      <View style={{ flex: 1 }}></View>
      <View
        style={{
          height: 70,
          borderTopWidth: 2,
          borderTopColor: "#e9e9e9",
          flexDirection: "row",
        }}
      >
        <BookCount type={type} />
      </View>
      <SafeAreaView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
  },
});
