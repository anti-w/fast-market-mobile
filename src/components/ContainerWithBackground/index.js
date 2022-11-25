import { View } from "react-native";
import { styles } from "./styles";

export function ContainerWithBackground({ children }) {
  return <View style={styles.container}>{children}</View>;
}
