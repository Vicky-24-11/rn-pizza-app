import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "@/assets/data/products";
import { defaultPizzaImage } from "@/src/components/ProductListItem";

const productDetails = () => {
  const [selectedSize, setSelectedSize] = useState("M");

  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id);
  // console.log(product, "product", "====>", id, "id");
  const sizes = ["S", "M", "L", "XL"];

  if (!product) {
    <Text>Product not found</Text>;
  }

  const addToCart = () => {
    console.warn("Adding to cart , size: ", selectedSize);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image
        style={styles.image}
        source={{ uri: product?.image || defaultPizzaImage }}
      />
      <Text style={styles.price}>Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <TouchableOpacity
            onPress={() => setSelectedSize(size)}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? "gainsboro" : "white",
              },
            ]}
          >
            <Text
              key={size}
              style={[
                styles.textSize,
                { color: selectedSize === size ? "black" : "gainsboro" },
              ]}
            >
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.price}>${product?.price}</Text>
      <TouchableOpacity onPress={addToCart} style={styles.cartBtn}>
        <Text style={styles.cartBtnText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default productDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: { width: "100%", aspectRatio: 1 },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "auto",
  },
  size: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textSize: { fontSize: 20, fontWeight: "500" },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  cartBtn: {
    width: "100%",
    height: 50,
    backgroundColor: "blue",
    color: "white",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  cartBtnText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
