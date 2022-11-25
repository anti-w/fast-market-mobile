import { Button, ButtonGroup, Dialog } from "@rneui/themed";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, TextInput } from "react-native";
import { createCategory } from "../../api/createCategory";
import { styles } from "./styles";

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
      icon: "https://cdn-icons-png.flaticon.com/512/3514/3514499.png",
    },
  });

  const arrayOfOrders = categories.map(
    (category) => category.order && category.order
  );

  const onSubmit = async (data) => {
    const newCategory = await createCategory(id, data);

    console.log(newCategory);
  };

  return (
    <Dialog
      isVisible={toggleCategoryForm}
      onBackdropPress={handleToggleCategoryForm}
      overlayStyle={{ padding: 20, paddingVertical: 30, borderRadius: 10 }}
    >
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
      <Text style={styles.label}>Ordem:</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          validate: (number) => !arrayOfOrders.includes(parseInt(number)),
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="order"
      />
      {errors.order && <Text>Campo obrigatório.</Text>}

      <Text style={styles.label}>Ícone:</Text>
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
        name="icon"
      />
      {errors.icon && <Text>Campo obrigatório.</Text>}

      <Button
        title="Cadastrar"
        onPress={handleSubmit(onSubmit)}
        color="#4D49BF"
        buttonStyle={{ marginTop: 15 }}
        titleStyle={{ fontWeight: "bold" }}
      />
    </Dialog>
  );
}
