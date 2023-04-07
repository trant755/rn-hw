import { TouchableOpacity, Text } from "react-native";

import styles from "./AuthBtn.styled";

const AuthBtn = ({ btnText, onSubmit }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onSubmit}>
      <Text style={styles.btnText}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default AuthBtn;
