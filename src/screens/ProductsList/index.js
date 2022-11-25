import { Avatar, Button, ListItem } from "@rneui/themed";
import { ArrowLeft, ShoppingCartSimple } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getMarkets } from "../../api/getMarkets";
import { CategoriesList } from "../../components/CategoriesList";

import { ProductsList as Products } from "../../components/ProductsList";
import { addProduct } from "../../store/reducers/userProducts";
import { styles } from "./styles";

export function ProductsList({ navigation }) {
  const userProductsList = useSelector((state) => state.userProducts);
  const dispatch = useDispatch();

  const [market, setMarket] = useState([]);
  const [marketId, setMarketId] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const handleCategorySelection = (categoryId) => {
    setCategoryId(categoryId);
  };

  const navigateToUserProducts = () => {
    navigation.navigate("userproducts");
  };

  const addProductToCart = (
    name,
    id,
    categoryOrder,
    categoryName,
    categoryIcon
  ) => {
    if (userProductsList.find((product) => product.id == id))
      return alert("Produto já adicionado!");

    dispatch(
      addProduct({ name, id, categoryName, categoryOrder, categoryIcon })
    );
  };

  useEffect(() => {
    (async () => {
      const { data } = await getMarkets();
      setMarket(data);
    })();
  }, []);

  const renderItem = ({ item }) => (
    <ListItem onPress={() => setMarketId(item.id)}>
      <Avatar
        rounded
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/1198/1198310.png",
        }}
      />
      <ListItem.Title>{item.name}</ListItem.Title>
    </ListItem>
  );

  const keyExtractor = (key) => key.id;

  return marketId ? (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button
          onPress={() => navigation.goBack()}
          color="#F26241"
          radius={100}
          buttonStyle={{ width: 36, height: 36 }}
          icon={<ArrowLeft weight="bold" />}
        />
        <Button
          onPress={navigateToUserProducts}
          color="#F26241"
          title="Cart"
          buttonStyle={{ width: 70, height: 65 }}
          radius="lg"
          icon={<ShoppingCartSimple />}
        />
      </View>
      <Text style={styles.label}>Categorias</Text>
      <CategoriesList
        id={marketId}
        selectCategory={handleCategorySelection}
        setCategories={() => {}}
      />
      <Text style={styles.label}>Produtos</Text>
      <Products
        categoryId={categoryId}
        selectProduct={addProductToCart}
        icon="add"
      />
    </View>
  ) : (
    <View style={[styles.container]}>
      <Text style={styles.label}>Escolha um mercado</Text>
      <FlatList
        data={market}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}
