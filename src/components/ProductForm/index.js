import { Button, Dialog } from "@rneui/themed";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, TextInput } from "react-native";

export function ProductForm({
  id,
  categories,
  handleToggleProductForm,
  toggleProductForm,
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = async (marketData) => {
    console.log(marketData);
  };

  return (
    <Dialog
      isVisible={toggleProductForm}
      onBackdropPress={handleToggleProductForm}
    >
      <Text>Nome:</Text>
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
      <Text>Descrição:</Text>
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
        name="description"
      />
      {errors.description && <Text>Campo obrigatório.</Text>}

      <Button title="Cadastrar Produto" onPress={handleSubmit(onSubmit)} />
    </Dialog>
  );
}
