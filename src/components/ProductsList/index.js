import { Avatar, Button, ListItem } from "@rneui/themed";
import { Pencil, PencilSimple, PlusCircle } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { getProducts } from "../../api/getProducts";
import { styles } from "./styles";

export function ProductsList({
  categoryId,
  selectProduct,
  icon = "add" | "edit",
}) {
  const [products, setProducts] = useState([]);

  const renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      style={styles.container}
      containerStyle={{ backgroundColor: "#4D49BF", borderRadius: 10 }}
    >
      <Avatar source={{ uri: item.categoryIcon }} size="medium" />
      <ListItem.Content>
        <ListItem.Title style={styles.title}>{item.name}</ListItem.Title>
        <ListItem.Subtitle style={styles.subtitle}>
          {item.description}
        </ListItem.Subtitle>
      </ListItem.Content>
      {icon == "add" && (
        <Button
          title="Adicionar"
          radius={10}
          onPress={() =>
            selectProduct(
              item.name,
              item.id,
              item.categoryOrder,
              item.categoryName,
              item.categoryIcon
            )
          }
        />
      )}
      {icon == "edit" && <PencilSimple color="red" />}
    </ListItem>
  );

  const keyExtractor = (item) => item.id;
  useEffect(() => {
    (async () => {
      if (categoryId) {
        const { data } = await getProducts(categoryId);
        setProducts(data);
      }
    })();
  }, [categoryId]);

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
}
