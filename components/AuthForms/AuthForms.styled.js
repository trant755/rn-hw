import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  imgPickerContainer: {
    alignItems: "center",
    marginTop: -60,
    marginBottom: 32,
  },
  form: {
    marginHorizontal: 20,
    gap: 16,
    marginBottom: 43,
  },
  title: {
    alignItems: "center",
    marginBottom: 32,
  },
  titleText: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },
  textInput: {
    height: 40,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  textInputActive: {
    height: 40,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",

    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  btnContainer: {
    marginHorizontal: 20,
    marginBottom: 16,
  },
  formHellper: {
    alignItems: "center",
  },
  formHellperText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});

export default styles;
