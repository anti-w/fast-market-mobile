import { Avatar, ListItem } from "@rneui/themed";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../store/reducers/userProducts";

export function ProductWithCheckBox({ id, categoryName, categoryIcon, name }) {
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();

  const removeProductOnCheck = (productId) => {
    dispatch(removeProduct(productId));
    setCheck(!check);
  };

  return (
    <ListItem key={id} bottomDivider>
      <Avatar title={categoryName} source={{ uri: categoryIcon }} />
      <ListItem.Content>
        <ListItem.Title>{name}</ListItem.Title>
        <ListItem.CheckBox
          center
          title="Pegar"
          checked={check}
          onPress={() => {
            removeProductOnCheck(id);
          }}
        />
      </ListItem.Content>
    </ListItem>
  );
}
