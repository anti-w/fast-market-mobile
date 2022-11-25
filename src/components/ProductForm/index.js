import { useNavigation } from "@react-navigation/native";
import { Button, Dialog } from "@rneui/themed";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Text, TextInput } from "react-native";
import { createProduct } from "../../api/createProduct";
import { CategoriesList } from "../CategoriesList";
import { styles } from "./styles";

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
      <Text style={styles.label}>Categoria:</Text>
      <CategoriesList
        id={id}
        selectCategory={setCategory}
        setCategories={() => {}}
      />

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
      <Text style={styles.label}>Descrição:</Text>
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
        name="description"
      />
      {errors.description && <Text>Campo obrigatório.</Text>}

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
