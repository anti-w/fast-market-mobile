import { Avatar, Button, ListItem } from "@rneui/themed";
import { Pencil, PencilSimple, PlusCircle } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { getProducts } from "../../api/getProducts";

export function ProductsList({
  categoryId,
  selectProduct,
  icon = "add" | "edit",
}) {
  const [products, setProducts] = useState([]);

  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <Avatar source={{ uri: item.categoryIcon }} />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
        {icon == "add" && (
          <Button
            onPress={() =>
              selectProduct(
                item.name,
                item.id,
                item.categoryOrder,
                item.categoryName,
                item.categoryIcon
              )
            }
          >
            <PlusCircle color="red" />
          </Button>
        )}
        {icon == "edit" && <PencilSimple color="red" />}
      </ListItem.Content>
    </ListItem>
  );

  const keyExtractor = (item) => item.id;
  useEffect(() => {
    (async () => {
      if (categoryId) {
        const { data } = await getProducts(categoryId);
        setProducts(data);
        console.log(data);
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
