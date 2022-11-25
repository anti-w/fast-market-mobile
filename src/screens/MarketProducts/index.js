import { Avatar, Button, ListItem } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { CategoriesList } from "../../components/CategoriesList";
import { CategoryForm } from "../../components/CategoryForm";
import { ProductForm } from "../../components/ProductForm";
import { ProductsList } from "../../components/ProductsList";
import { styles } from "./styles";

export function MarketProducts({ route }) {
  const { name, id } = route.params;

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([{}]);
  const [toggleCategoryForm, setToggleCategoryForm] = useState(false);
  const [toggleProductForm, setToggleProductForm] = useState(false);

  const selectCategory = (id) => {
    setSelectedCategory(id);
  };

  const handleToggleCategoryForm = () => {
    setToggleCategoryForm(!toggleCategoryForm);
  };

  const handleToggleProductForm = () => {
    setToggleProductForm(!toggleProductForm);
  };

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <CategoriesList
        id={id}
        selectCategory={selectCategory}
        setCategories={setCategories}
      />
      <ProductsList categoryId={selectedCategory} />

      <Button
        onPress={() => handleToggleCategoryForm()}
        title="Nova Categoria"
        color="#F26241"
        titleStyle={{ fontSize: 20 }}
        buttonStyle={{ width: 170, height: 65 }}
        radius="md"
        containerStyle={{ margin: 12 }}
      />
      <CategoryForm
        handleToggleCategoryForm={handleToggleCategoryForm}
        toggleCategoryForm={toggleCategoryForm}
        categories={categories}
        id={id}
      />
      <Button
        onPress={() => handleToggleProductForm()}
        title="Novo Produto"
        color="#F26241"
        titleStyle={{ fontSize: 20 }}
        buttonStyle={{ width: 170, height: 65 }}
        radius="md"
        containerStyle={{ margin: 12 }}
      />
      <ProductForm
        handleToggleProductForm={handleToggleProductForm}
        toggleProductForm={toggleProductForm}
        id={id}
      />
    </View>
  );
}
