import React, { FunctionComponent } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { IProduct } from "./ProductContainer";
import { ProductCard } from "./ProductCard";

var { width } = Dimensions.get("window");

export const ProductList = (props) => {
  const { item } = props;

  return (
    <TouchableOpacity>
      <View style={{ width: width / 2, backgroundColor: "gainsboro" }}>
        <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  );
};
