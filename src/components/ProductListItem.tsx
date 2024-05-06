import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/src/constants/Colors";
// import products from "@/assets/data/products";
import { Product } from "@/assets/types";
import { Link } from "expo-router";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.name}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          style={styles.image}
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    flex: 1,
    maxWidth: "50%",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
  },
  image: {
    width: "100%",
    // height: 100,
    aspectRatio: 1,
    resizeMode: "contain",
  },
});
