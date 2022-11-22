import { Avatar, Button, ListItem } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { CategoriesList } from "../../components/CategoriesList";
import { CategoryForm } from "../../components/CategoryForm";
import { ProductForm } from "../../components/ProductForm";
import { ProductsList } from "../../components/ProductsList";

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
    <View
      style={{
        flex: 1,
        marginTop: 40,
      }}
    >
      <Text>{name}</Text>
      <CategoriesList
        id={id}
        selectCategory={selectCategory}
        setCategories={setCategories}
      />
      <ProductsList categoryId={selectedCategory} />

      <Button
        onPress={() => handleToggleCategoryForm()}
        title="Cadastrar categoria"
      />
      <CategoryForm
        handleToggleCategoryForm={handleToggleCategoryForm}
        toggleCategoryForm={toggleCategoryForm}
        categories={categories}
        id={id}
      />
      <Button
        onPress={() => handleToggleProductForm()}
        title="Cadastrar Produto"
      />
      <ProductForm
        handleToggleProductForm={handleToggleProductForm}
        toggleProductForm={toggleProductForm}
        id={id}
      />
    </View>
  );
}
