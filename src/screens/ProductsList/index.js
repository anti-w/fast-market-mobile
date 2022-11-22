import { Avatar, Button, Dialog, ListItem } from "@rneui/themed";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, FlatList, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getMarkets } from "../../api/getMarkets";

import { Product } from "../../components/Product";
import { addProduct } from "../../store/reducers/userProducts";
import { CATEGORIES, PRODUCTS } from "../../utils/mockData";

export function ProductsList({ navigation }) {
  const userProductsList = useSelector((state) => state.userProducts);
  const dispatch = useDispatch();

  const [market, setMarket] = useState([]);
  const [marketId, setMarketId] = useState("");
  const [selectMarketDialog, setSelectMarketDialog] = useState(false);

  const handleClickAddProduct = (
    name,
    id,
    categoryOrder,
    categoryName,
    categoryIcon
  ) => {
    if (userProductsList.find((product) => product.id == id)) return;

    dispatch(
      addProduct({ name, id, categoryName, categoryOrder, categoryIcon })
    );
  };

  const toggleSelectDialog = () => {
    setSelectMarketDialog(!selectMarketDialog);
  };

  useEffect(() => {
    (async () => {
      const { data } = await getMarkets();
      setMarket(data);
    })();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {marketId ? (
        <>
          <Text>Com algo</Text>
        </>
      ) : (
        <>
          <Button
            title={"Selecionar Mercado"}
            onPress={toggleSelectDialog}
            buttonStyle={{
              borderRadius: 6,
              width: 220,
              margin: 20,
            }}
          />
          <Dialog
            isVisible={selectMarketDialog}
            onBackdropPress={toggleSelectDialog}
          >
            <Dialog.Title title="Escolha um mercado" />
            {market.map((market, idx) => (
              <ListItem
                key={market.id}
                containerStyle={{
                  marginHorizontal: -10,
                  borderRadius: 8,
                }}
                onPress={() => {
                  setMarketId(market.id);
                  toggleSelectDialog();
                }}
              >
                <Avatar
                  rounded
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/862/862819.png",
                  }}
                />
                <ListItem.Content>
                  <ListItem.Title style={{ fontWeight: "700" }}>
                    {market.name}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))}
          </Dialog>
        </>
      )}
    </View>
  );
}
