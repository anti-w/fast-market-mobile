import { Avatar } from "@rneui/themed";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity } from "react-native";
import { getCategories } from "../../api/getCategories";

export function CategoriesList({
  id,
  selectCategory,
  setCategories: saveCategories,
}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getCategories(id);
      setCategories(data);
      saveCategories(data);
    })();
  }, []);

  return (
    <FlatList
      data={categories}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => selectCategory(item.id)} key={item.id}>
          <Avatar rounded source={{ uri: item.icon }} />
          <Text>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
}
