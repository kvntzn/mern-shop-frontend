import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import {
  Container,
  HStack,
  Icon,
  IconButton,
  Item,
  Input,
  Text,
  Box,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

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
    <Box>
      <HStack px={1} py={3} justifyContent="space-between" alignItems="center">
        <Input
          placeholder="Search"
          variant="filled"
          width="100%"
          bg="gray.200"
          borderRadius={10}
          py={1}
          px={2}
          _web={{
            _focus: { borderColor: "muted.300", style: { boxShadow: "none" } },
          }}
          InputLeftElement={
            <Icon
              size="sm"
              ml={2}
              color="gray.400"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
      </HStack>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "red",
  },
  listContainer: {
    width: "100%",
    flexDirection: "row",
    flex: 1,
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
});

export default ProductContainer;
