import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./PasswordInput.styled";

const PasswordInput = ({
  onChangeText,
  value,
  placeholder,
  onFocus,
  onBlur,
  isFocused,
}) => {
  const [isShowPass, setIsShowPass] = useState(false);

  return (
    <View
      style={
        isFocused.password ? styles.passInputActive : styles.passInputContainer
      }
    >
      <TextInput
        style={styles.passInput}
        secureTextEntry={!isShowPass}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <Pressable
        onPress={() => {
          setIsShowPass(!isShowPass);
        }}
        style={styles.showPassBtn}
      >
        {({ pressed }) => (
          <Text
            style={{ ...styles.showPassBtnText, opacity: pressed ? 0.6 : 1 }}
          >
            {isShowPass ? "Скрыть" : "Показать"}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default PasswordInput;
