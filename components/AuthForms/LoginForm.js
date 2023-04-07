import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

import styles from "./AuthForms.styled";
import AuthBtn from "./AuthBtn/AuthBtn";
import PasswordInput from "./PasswordInput/PasswordInput";

const initState = {
  email: "",
  password: "",
};

const LoginForm = ({ keyboardHide, setIsShowKeyboard }) => {
  const [formState, setFormState] = useState(initState);
  const [isFocused, setIsFocused] = useState({});

  const onChangeHandler = (name, value) => {
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = () => {
    console.log(formState);
    setFormState(initState);
    keyboardHide();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, justifyContent: "flex-end" }}
    >
      <View style={{ ...styles.container, flex: 0.57, paddingTop: 32 }}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Войти</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => onChangeHandler("email", text)}
            value={formState.email}
            placeholder="Адрес электронной почты"
            onFocus={() => {
              setIsShowKeyboard(true);
              setIsFocused({ email: true });
            }}
            onBlur={() => setIsFocused({})}
          />
          <PasswordInput
            onChangeText={(text) => onChangeHandler("password", text)}
            value={formState.password}
            placeholder={"Пароль"}
            isFocused={isFocused}
            onFocus={() => {
              setIsShowKeyboard(true);
              setIsFocused({ password: true });
            }}
            onBlur={() => setIsFocused({})}
          />
        </View>
        <View style={styles.btnContainer}>
          <AuthBtn onSubmit={onSubmit} btnText={"Войти"} />
        </View>
        <View style={styles.formHellper}>
          <Text style={styles.formHellperText}>
            Нет аккаунта? Зарегистрироваться
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
