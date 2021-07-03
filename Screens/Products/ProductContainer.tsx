import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
} from "react-native";

const data: IProduct[] = require("../../assets/data/products.json");

interface IObjectId {
  $oid: string;
}

interface IProduct {
  _id: IObjectId;
  image: string;
  brand: string;
  price: number;
  rating: number;
  numReviews: number;
  isFeatured: boolean;
  name: string;
  description: string;
  category: IObjectId;
  countInStock: number;
  __v: number;
}

const ProductContainer = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setProducts(data);

    return () => {
      setProducts([]);
    };
  }, []);

  const renderItem = ({ item }: { item: IProduct }) => (
    <Text>{item.brand}</Text>
  );

  return (
    <View style={styles.container}>
      <Text>Product Container</Text>
      <View>
        <FlatList
          horizontal
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      </View>
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
