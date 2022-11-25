import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#070C0D",
  },

  logoWithIcon: {
    flexDirection: "row",
    height: 300,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  logoText: {
    fontSize: 75,
    color: "#F26241",
    fontFamily: "AnnieUseYourTelescope_400Regular",
  },

  logoImg: {
    marginTop: 5,
    width: 128,
    height: 128,
  },

  slogan: {
    fontFamily: "AnnieUseYourTelescope_400Regular",
    marginTop: -20,
    fontSize: 30,
  },
});
