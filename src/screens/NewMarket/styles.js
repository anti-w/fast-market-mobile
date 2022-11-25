import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#070C0D",
  },

  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    fontSize: 20,
    height: 40,
    marginVertical: 15,
    padding: 10,
    borderRadius: 6,
    borderColor: "#4D49BF",
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: { fontSize: 18, fontWeight: "bold" },
});
