import { Button, Dialog } from "@rneui/themed";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, TextInput } from "react-native";

export function CategoryForm({
  id,
  categories,
  handleToggleCategoryForm,
  toggleCategoryForm,
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      order: 0,
      icon: "",
    },
  });

  const onSubmit = async (marketData) => {
    console.log(marketData);
  };

  return (
    <Dialog
      isVisible={toggleCategoryForm}
      onBackdropPress={handleToggleCategoryForm}
    >
      <Text>Nome do corredor:</Text>
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
      <Text>Ordem:</Text>
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
        name="order"
      />
      {errors.order && <Text>Campo obrigatório.</Text>}
      <Text>Url avatar:</Text>
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
        name="icon"
      />
      {errors.icon && <Text>Campo obrigatório.</Text>}

      <Button title="Cadastrar Corredor" onPress={handleSubmit(onSubmit)} />
    </Dialog>
  );
}
