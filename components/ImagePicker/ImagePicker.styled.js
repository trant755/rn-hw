import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imgPicker: {
    position: "relative",
    width: 120,
    height: 120,
    borderRadius: 16,

    alignItems: "center",

    backgroundColor: "#F6F6F6",
  },
  imgPickerAdd: {
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 80,
    left: 107,

    backgroundColor: "#fff",
    borderRadius: 50,
    borderColor: "#FF6C00",
    borderWidth: 1,
  },
  imgPickerDelete: {
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 80,
    left: 107,

    backgroundColor: "#fff",
    borderRadius: 50,
    borderColor: "#BDBDBD",
    borderWidth: 1,
  },
  imgPickerAvatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  form: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontWeight: 500,
    fontSize: 30,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});

export default styles;
