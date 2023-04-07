import { useState } from "react";

import {
  View,
  Text,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import ImagePicker from "../ImagePicker/ImagePicker";
import AuthBtn from "./AuthBtn/AuthBtn";
import styles from "./AuthForms.styled";
import PasswordInput from "./PasswordInput/PasswordInput";

const initState = {
  login: "",
  email: "",
  password: "",
  avatar: null,
};

const RegisterForm = ({ keyboardHide, setIsShowKeyboard }) => {
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
      <View style={{ ...styles.container, flex: 0.65 }}>
        <View style={styles.imgPickerContainer}>
          <ImagePicker state={formState} setState={setFormState} />
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Регестрация</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={isFocused.login ? styles.textInputActive : styles.textInput}
            onChangeText={(text) => onChangeHandler("login", text)}
            value={formState.login}
            placeholder="Логин"
            onFocus={() => {
              setIsShowKeyboard(true);
              setIsFocused({ login: true });
            }}
            onBlur={() => setIsFocused({})}
          />
          <TextInput
            style={isFocused.email ? styles.textInputActive : styles.textInput}
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
          <AuthBtn onSubmit={onSubmit} btnText={"Зарегистрироваться"} />
        </View>
        <View style={styles.formHellper}>
          <Text style={styles.formHellperText}>Уже есть аккаунт? Войти</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterForm;
