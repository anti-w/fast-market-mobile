import { Avatar, Button, ListItem } from "@rneui/themed";
import { ShoppingCartSimple } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getMarkets } from "../../api/getMarkets";
import { CategoriesList } from "../../components/CategoriesList";

import { ProductsList as Products } from "../../components/ProductsList";
import { addProduct } from "../../store/reducers/userProducts";

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

  return (
    <View
      style={{
        flex: 1,
        marginTop: 40,
      }}
    >
      {marketId ? (
        <>
          <CategoriesList
            id={marketId}
            selectCategory={handleCategorySelection}
            setCategories={() => {}}
          />
          <Text>Produtos</Text>
          <Products
            categoryId={categoryId}
            selectProduct={addProductToCart}
            icon="add"
          />
        </>
      ) : (
        <FlatList
          data={market}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      )}
      <Button onPress={navigateToUserProducts}>
        <ShoppingCartSimple />
      </Button>
    </View>
  );
}
