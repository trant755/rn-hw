import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  passInputContainer: {
    height: 40,
    flexDirection: "row",

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  passInputActive: {
    height: 40,
    flexDirection: "row",

    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  passInput: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    flexGrow: 1,
  },
  showPassBtn: {
    justifyContent: "center",
  },
  showPassBtnText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
});

export default styles;
