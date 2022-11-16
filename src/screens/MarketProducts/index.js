import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getCategories } from "../../api/getCategories";

export function MarketProducts({ route }) {
  const { name, id } = route.params;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getCategories(id);
      console.log(data);
      setCategories(data);
    })();
  }, []);
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>{name}</Text>
      <Text>Categorias</Text>
      <Text>Produtos por categorias</Text>
    </View>
  );
}
