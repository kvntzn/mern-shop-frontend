import React from "react";
import { View, Image, StyleSheet, SafeAreaView } from "react-native";

export const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Image
        source={require("../assets/tindahan.png")}
        resizeMode="contain"
        style={{ height: 50 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    // backgroundColor: "red",
    padding: 20,
    marginTop: 80, //TODO: delete
  },
});
