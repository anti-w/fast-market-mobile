import { Avatar, ListItem } from "@rneui/themed";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { getProducts } from "../../api/getProducts";

export function ProductsList({ categoryId }) {
  const [products, setProducts] = useState([]);

  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <Avatar source={{ uri: item.categoryIcon }} />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
      </ListItem.Content>
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
