import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { PlusCircle } from "phosphor-react-native";

export function Product({
  name,
  categoryName,
  categoryOrder,
  categoryIcon,
  description,
  id,
  handleClickAddProduct,
}) {
  return (
    <View key={id}>
      <Image source={{ uri: categoryIcon }} style={{ width: 50, height: 50 }} />
      <Text>{name}</Text>
      <Text>{description}</Text>
      <Text>{categoryName}</Text>

      <TouchableOpacity
        onPress={() =>
          handleClickAddProduct(
            name,
            id,
            categoryOrder,
            categoryName,
            categoryIcon
          )
        }
      >
        <PlusCircle size={22} color="white" />
      </TouchableOpacity>
    </View>
  );
}
