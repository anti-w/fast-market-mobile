import { Icon, ListItem } from "@rneui/themed";
import { useState } from "react";
import { ProductWithCheckBox } from "../ProductWithCheckBox";

export function CategoryWithProducts({ categoryName, products }) {
  const [expanded, setExpanded] = useState(false);

  const filterProductsByCategory = products.filter(
    (product) => product.categoryName == categoryName
  );

  return (
    <ListItem.Accordion
      content={
        <>
          <ListItem.Content>
            <ListItem.Title>{categoryName}</ListItem.Title>
          </ListItem.Content>
        </>
      }
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}
    >
      {filterProductsByCategory.map((product) => (
        <ProductWithCheckBox
          categoryIcon={product.categoryIcon}
          categoryName={product.categoryName}
          id={product.id}
          name={product.name}
          key={product.id}
        />
      ))}
    </ListItem.Accordion>
  );
}
