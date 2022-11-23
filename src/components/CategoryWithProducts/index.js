import { Icon, ListItem } from "@rneui/themed";
import { useState } from "react";
import { ProductWithCheckBox } from "../ProductWithCheckBox";

export function CategoryWithProducts({ categoryName, userProducts }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <ListItem.Accordion
      content={
        <>
          <Icon name="place" size={30} />
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
      {userProducts.map((product) => (
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
