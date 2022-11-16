import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { MarketProducts } from "../screens/MarketProducts";
import { NewMarket } from "../screens/NewMarket";
import { ProductsList } from "../screens/ProductsList";
import { UserProducts } from "../screens/UserProducts";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="newmarket" component={NewMarket} />
      <Screen name="marketproducts" component={MarketProducts} />
      <Screen name="productslist" component={ProductsList} />
      <Screen
        name="userproducts"
        component={UserProducts}
        options={{ presentation: "modal" }}
      />
    </Navigator>
  );
}
