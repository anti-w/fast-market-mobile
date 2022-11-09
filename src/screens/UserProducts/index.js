import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Category } from "../../components/Category";
import { CATEGORIES } from "../../utils/mockData";

export function UserProducts({ navigation }) {
  return (
    <View style={{ flex: 1, marginTop: 40 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("productslist");
        }}
      >
        <Image
          style={{ width: 80, height: 80 }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1440/1440998.png",
          }}
        />
      </TouchableOpacity>

      <Text>Categorias</Text>
      <FlatList
        data={CATEGORIES}
        horizontal
        renderItem={({ item }) => (
          <Category
            id={item.id}
            name={item.name}
            key={item.id}
            icon={item.icon}
          />
        )}
      />
      <Text>Produtos:</Text>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => (
          <Category
            id={item.id}
            name={item.name}
            key={item.id}
            icon={item.icon}
          />
        )}
      />
    </View>
  );
}
