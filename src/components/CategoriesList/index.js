import { Avatar } from "@rneui/themed";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { getCategories } from "../../api/getCategories";
import { styles } from "./styles";

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
    <View style={styles.container}>
      <FlatList
        data={categories}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => selectCategory(item.id)}
            key={item.id}
            style={styles.categoryContainer}
          >
            <Image source={{ uri: item.icon }} style={styles.icon} />
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
