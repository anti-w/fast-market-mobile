import { Avatar, Button, Dialog, ListItem } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

import { getMarkets } from "../../api/getMarkets";
import { createMarket as saveMarket } from "../../api/createMarket";

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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title={"Cadastrar mercado"}
        onPress={toggleCreateDialog}
        buttonStyle={{
          borderRadius: 6,
          width: 220,
          margin: 20,
        }}
      />
      <Dialog isVisible={createMarket} onBackdropPress={toggleCreateDialog}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{
                backgroundColor: "#FFF",
                fontSize: 20,
                height: 80,
                padding: 10,
                borderRadius: 4,
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        {errors.name && <Text>Campo obrigatório.</Text>}

        <Button title="Cadastrar Mercado" onPress={handleSubmit(onSubmit)} />
      </Dialog>

      <Button
        title={"Selecionar Mercado"}
        onPress={toggleSelectDialog}
        buttonStyle={{
          borderRadius: 6,
          width: 220,
          margin: 20,
        }}
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
