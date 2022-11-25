import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { CategoryWithProducts } from "../../components/CategoryWithProducts";

export function UserProducts({ navigation }) {
  const categories = [];
  const userProducts = useSelector((state) => state.userProducts);

  userProducts.forEach((product) => {
    if (!categories.includes(product.categoryName))
      categories.push(product.categoryName);
  });

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <Text>Você possui X produtos na sua lista</Text>
      <Text>Faltam corredores para terminar.</Text>
      {categories.map((category, i) => (
        <CategoryWithProducts categoryName={category} products={userProducts} />
      ))}
    </View>
  );
}
