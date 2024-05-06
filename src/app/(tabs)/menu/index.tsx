import { FlatList, ScrollView } from "react-native";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";

// const product = products[0];

export default function MenuScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // alignItems: "center",
//     // justifyContent: "center",
//     backgroundColor: "white",
//     padding: 20,
//     borderRadius: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginVertical: 10,
//   },
//   price: {
//     color: Colors.light.tint,
//   },
//   image: {
//     width: "100%",
//     // height: 100,
//     aspectRatio: 1,
//   },
// });
