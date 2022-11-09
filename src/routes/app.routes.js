import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { NewMarket } from "../screens/NewMarket";
import { ProductsList } from "../screens/ProductsList";
import { UserProducts } from "../screens/UserProducts";

const { Navigator, Screen, Group } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="userproducts" component={UserProducts} />
      <Screen name="newmarket" component={NewMarket} />
      <Screen
        name="productslist"
        component={ProductsList}
        options={{ presentation: "modal" }}
      />
    </Navigator>
  );
}
