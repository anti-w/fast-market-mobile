import { Text, TouchableOpacity, View, FlatList, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Category } from "../../components/Category";
import { Product } from "../../components/Product";
import { addProduct } from "../../store/reducers/userProducts";
import { CATEGORIES, PRODUCTS } from "../../utils/mockData";

export function ProductsList({ navigation }) {
  const userProductsList = useSelector((state) => state.userProducts);
  const dispatch = useDispatch();

  const handleClickAddProduct = (
    name,
    id,
    categoryOrder,
    categoryName,
    categoryIcon
  ) => {
    if (userProductsList.find((product) => product.id == id)) return;

    dispatch(
      addProduct({ name, id, categoryName, categoryOrder, categoryIcon })
    );
  };

  return (
    <View style={{ flex: 1, marginTop: 40 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("userproducts");
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
        data={PRODUCTS}
        renderItem={({ item }) => (
          <Product
            categoryOrder={item.categoryOrder}
            categoryName={item.categoryName}
            categoryIcon={item.categoryIcon}
            description={item.description}
            name={item.name}
            id={item.id}
            handleClickAddProduct={handleClickAddProduct}
          />
        )}
      />
    </View>
  );
}
