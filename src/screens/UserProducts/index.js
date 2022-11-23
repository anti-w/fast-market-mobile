import { Avatar, Icon, ListItem } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { CategoryWithProducts } from "../../components/CategoryWithProducts";
import { ProductWithCheckBox } from "../../components/ProductWithCheckBox";

export function UserProducts({ navigation }) {
  const categories = [];
  const userProducts = useSelector((state) => state.userProducts);

  userProducts.forEach((product) => categories.push(product.categoryName));

  const filterProductsByCategory = (categoryName) =>
    userProducts.filter((product) => product.categoryName === categoryName);

  useEffect(() => {
    console.log(userProducts);
  }, []);

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <Text>Você possui X produtos na sua lista</Text>
      <Text>Faltam corredores para terminar.</Text>
      {categories.map((category, i) => (
        <CategoryWithProducts
          categoryName={category}
          userProducts={filterProductsByCategory(category)}
        />
      ))}
    </View>
  );
}
