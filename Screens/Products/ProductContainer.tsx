import React, { useState } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";

const ProductContainer = () => {
  return (
    <View style={styles.container}>
      <Text>Product Container</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",

    justifyContent: "center",
  },
});

export default ProductContainer;
