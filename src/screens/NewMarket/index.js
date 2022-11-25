import { Avatar, Button, Dialog, ListItem } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

import { getMarkets } from "../../api/getMarkets";
import { createMarket as saveMarket } from "../../api/createMarket";
import { styles } from "./styles";
import { Storefront, XSquare } from "phosphor-react-native";

export function NewMarket({ navigation }) {
  const [selectMarketDialog, setSelectMarketDialog] = useState(false);
  const [createMarket, setCreateMarket] = useState(false);
  const [market, setMarket] = useState([]);

  const handleNavigateMarket = (selectedMarket) => {
    navigation.navigate("marketproducts", {
      name: selectedMarket.name,
      id: selectedMarket.id,
    });
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    (async () => {
      const { data } = await getMarkets();
      setMarket(data);
    })();
  }, []);

  const onSubmit = async (marketData) => {
    const { data } = await saveMarket(marketData.name);
    handleNavigateMarket(data);
  };

  const toggleSelectDialog = () => {
    setSelectMarketDialog(!selectMarketDialog);
  };
  const toggleCreateDialog = () => {
    setCreateMarket(!createMarket);
  };
  return (
    <View style={styles.container}>
      <Button
        title={"Cadastrar mercado"}
        onPress={toggleCreateDialog}
        color="#F26241"
        titleStyle={{ fontSize: 20 }}
        buttonStyle={{ width: 210, height: 65 }}
        radius="md"
        containerStyle={{ margin: 12 }}
      />
      <Dialog isVisible={createMarket} onBackdropPress={toggleCreateDialog}>
        <Text style={styles.label}>Nome:</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        {errors.name && <Text>Campo obrigatório.</Text>}

        <Button
          title="Cadastrar"
          color="#4D49BF"
          buttonStyle={{
            padding: 13,
          }}
          radius="md"
          onPress={handleSubmit(onSubmit)}
        />
      </Dialog>

      <Button
        title={"Selecionar Mercado"}
        onPress={toggleSelectDialog}
        color="#F26241"
        titleStyle={{ fontSize: 20 }}
        buttonStyle={{ width: 210, height: 65 }}
        radius="md"
        containerStyle={{ margin: 12 }}
      />
      <Dialog
        isVisible={selectMarketDialog}
        onBackdropPress={toggleSelectDialog}
      >
        <Dialog.Title title="Escolha um mercado" />
        {market.map((market, idx) => (
          <ListItem
            key={market.id}
            containerStyle={{
              marginHorizontal: -10,
              borderRadius: 8,
            }}
            onPress={() => {
              handleNavigateMarket(market);
              toggleSelectDialog();
            }}
          >
            <Avatar
              rounded
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/862/862819.png",
              }}
            />
            <ListItem.Content>
              <ListItem.Title style={{ fontWeight: "700" }}>
                {market.name}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </Dialog>
    </View>
  );
}
