import { View, TouchableOpacity, Text, Image } from "react-native";
import * as imagePicker from "expo-image-picker";
import styles from "./ImagePicker.styled";
import { AntDesign } from "@expo/vector-icons";

const ImagePicker = ({ state, setState }) => {
  const pickImage = async () => {
    if (state.avatar) {
      setState((prevState) => ({
        ...prevState,
        avatar: null,
      }));
      return;
    }
    let result = await imagePicker.launchImageLibraryAsync({
      mediaTypes: imagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setState((prevState) => ({
        ...prevState,
        avatar: result.assets[0].uri,
      }));
    }
  };

  return (
    <TouchableOpacity style={styles.imgPicker} onPress={pickImage}>
      {state.avatar && (
        <Image source={{ uri: state.avatar }} style={styles.imgPickerAvatar} />
      )}
      <View style={state.avatar ? styles.imgPickerDelete : styles.imgPickerAdd}>
        <AntDesign
          name={state.avatar ? "close" : "plus"}
          size={16}
          color={state.avatar ? "#BDBDBD" : "#FF6C00"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ImagePicker;
