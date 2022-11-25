import { Avatar, Button, ListItem } from "@rneui/themed";
import { ArrowLeft } from "phosphor-react-native";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { CategoriesList } from "../../components/CategoriesList";
import { CategoryForm } from "../../components/CategoryForm";
import { Header } from "../../components/Header";
import { ProductForm } from "../../components/ProductForm";
import { ProductsList } from "../../components/ProductsList";
import { styles } from "./styles";

export function MarketProducts({ route, navigation }) {
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
      <View style={styles.header}>
        <Button
          onPress={() => navigation.goBack()}
          color="#F26241"
          radius={100}
          buttonStyle={{ width: 36, height: 36 }}
          icon={<ArrowLeft weight="bold" />}
        />
        <Text style={styles.market}>{name}</Text>
        <View style={styles.buttonsWrapper}>
          <Button
            onPress={() => handleToggleCategoryForm()}
            title="Nova Categoria"
            color="#F26241"
            titleStyle={{ fontSize: 20 }}
            buttonStyle={{ width: 70, height: 65 }}
            radius="md"
            containerStyle={{ margin: 12 }}
          />
          <Button
            onPress={() => handleToggleProductForm()}
            title="Novo Produto"
            color="#F26241"
            titleStyle={{ fontSize: 20 }}
            buttonStyle={{ width: 70, height: 65 }}
            radius="md"
            containerStyle={{ margin: 12 }}
          />
        </View>
      </View>
      <Text style={styles.label}>Categorias</Text>

      <CategoriesList
        id={id}
        selectCategory={selectCategory}
        setCategories={setCategories}
      />
      <ProductsList categoryId={selectedCategory} />

      <CategoryForm
        handleToggleCategoryForm={handleToggleCategoryForm}
        toggleCategoryForm={toggleCategoryForm}
        categories={categories}
        id={id}
      />

      <ProductForm
        handleToggleProductForm={handleToggleProductForm}
        toggleProductForm={toggleProductForm}
        id={id}
      />
    </View>
  );
}
