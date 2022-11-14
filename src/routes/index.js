import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import storeConfig from "../store/storeConfig";

import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <Provider store={storeConfig}>
        <AppRoutes />
      </Provider>
    </NavigationContainer>
  );
}
