import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { ProductList } from "./ProductList";

const data: IProduct[] = require("../../assets/data/products.json");

interface IObjectId {
  $oid: string;
}

export interface IProduct {
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

  const renderItem = ({ item }: { item: IProduct }) => {
    console.log(item.name);
    return <ProductList key={item.name} item={item} />;
  };

  return (
    <View>
      <Text>Product Container</Text>
      <View style={{ marginTop: 100 }}>
        <FlatList
          numColumns={2}
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
