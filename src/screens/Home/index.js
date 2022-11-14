import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();

  function handleOpenNewMarket() {
    navigation.navigate("newmarket");
  }

  function handleOpenProductsList() {
    navigation.navigate("productslist");
  }

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <TouchableOpacity onPress={() => handleOpenNewMarket()}>
        <Text>Cadastrar mercado</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleOpenProductsList()}>
        <Text>Criar lista de compras</Text>
      </TouchableOpacity>
    </View>
  );
}
