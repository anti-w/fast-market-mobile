import { ListItem } from "@rneui/themed";
import React from "react";
import { FlatList } from "react-native";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Product } from "../../components/Product";

export function UserProducts({ navigation }) {
  const categories = [];
  const userProducts = useSelector((state) => state.userProducts);

  userProducts.forEach((product) => categories.push(product.categoryName));

  console.log(userProducts[1]);

  console.log(categories);

  return (
    <View>
      <Text>Você possui X produtos na sua lista</Text>
      <Text>Faltam corredores para terminar.</Text>
      {/* <FlatList
        data={userProducts}
        renderItem={({ item }) => (
          <>
            <Text>{item.name}</Text>
          </>
        )}
      /> */}
    </View>
  );
}
