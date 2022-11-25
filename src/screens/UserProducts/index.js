import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { CategoryWithProducts } from "../../components/CategoryWithProducts";
import { styles } from "./styles";

export function UserProducts({ navigation }) {
  const categories = [];
  const userProducts = useSelector((state) => state.userProducts);

  userProducts.forEach((product) => {
    if (!categories.includes(product.categoryName))
      categories.push(product.categoryName);
  });

  return (
    <View style={styles.container}>
      <Text>Você possui {userProducts.length} produtos para pegar</Text>
      <Text>Faltam {categories.length} corredores para terminar.</Text>
      {categories.map((category, i) => (
        <CategoryWithProducts
          categoryName={category}
          products={userProducts}
          key={category + i}
        />
      ))}
    </View>
  );
}
