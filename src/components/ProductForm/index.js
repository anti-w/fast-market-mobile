import { useNavigation } from "@react-navigation/native";
import { Button, Dialog } from "@rneui/themed";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Text, TextInput } from "react-native";
import { createProduct } from "../../api/createProduct";
import { CategoriesList } from "../CategoriesList";

export function ProductForm({
  id,
  handleToggleProductForm,
  toggleProductForm,
}) {
  const [category, setCategory] = useState("");
  const navigation = useNavigation();

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
    await createProduct(category, {
      name: marketData.name,
      description: marketData.description,
    });
    alert("Produto cadastrado com sucesso!");
    handleToggleProductForm();
  };

  return (
    <Dialog
      isVisible={toggleProductForm}
      onBackdropPress={handleToggleProductForm}
    >
      <Text>Categoria:</Text>
      <CategoriesList
        id={id}
        selectCategory={setCategory}
        setCategories={() => {}}
      />

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
