import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import logoImg from "../../../assets/logoImg.png";

import { useNavigation } from "@react-navigation/native";
import { ContainerWithBackground } from "../../components/ContainerWithBackground";
import { styles } from "./styles";
import { Button } from "@rneui/themed";

export function Home() {
  const navigation = useNavigation();

  function handleOpenNewMarket() {
    navigation.navigate("newmarket");
  }

  function handleOpenProductsList() {
    navigation.navigate("productslist");
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoWithIcon}>
        <View>
          <Text style={styles.logoText}>Fast Market</Text>
          <Text style={styles.slogan}>Chega de se perder no mercado!</Text>
        </View>

        <Image style={styles.logoImg} source={logoImg} />
      </View>
      <Button
        title="Cadastrar Mercado"
        onPress={handleOpenNewMarket}
        color="#F26241"
        titleStyle={{ fontSize: 20 }}
        buttonStyle={{ width: 210, height: 65 }}
        radius="md"
        containerStyle={{ margin: 12 }}
      />
      <Button
        title="Criar lista de compras"
        onPress={handleOpenProductsList}
        color="#F26241"
        titleStyle={{ fontSize: 20 }}
        buttonStyle={{ width: 210, height: 65 }}
        radius="md"
        containerStyle={{ margin: 12 }}
      />
    </View>
  );
}
