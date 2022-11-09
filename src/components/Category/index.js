import { Image, Text, TouchableOpacity } from "react-native";

export function Category({ name, id, icon }) {
  return (
    <TouchableOpacity key={id}>
      <Image source={{ uri: icon }} style={{ width: 50, height: 50 }} />
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}
