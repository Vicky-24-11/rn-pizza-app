import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const productDetails = () => {
  const { name } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{ title: "Details" }} />
      <Text>productDetails of : {name}</Text>
    </View>
  );
};

export default productDetails;

const styles = StyleSheet.create({});
