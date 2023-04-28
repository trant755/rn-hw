import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";

import { signIn, signOut, isLogin } from "../../redux/authSlice";
import styles from "./AuthForms.styled";
import AuthBtn from "./AuthBtn/AuthBtn";
import PasswordInput from "./PasswordInput/PasswordInput";

const initState = {
  email: "",
  password: "",
};

const LoginForm = ({ keyboardHide, setIsShowKeyboard, navigation }) => {
  const [formState, setFormState] = useState(initState);
  const [isFocused, setIsFocused] = useState({});
  const dispatch = useDispatch();

  const onChangeHandler = (name, value) => {
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = () => {
    console.log(formState);
    setFormState(initState);
    keyboardHide();
    dispatch(signIn());
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
            style={[
              isFocused.email ? styles.textInputActive : styles.textInput,
              { marginBottom: 16 },
            ]}
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
          <Text style={styles.formHellperText}>Нет аккаунта?</Text>
          <TouchableOpacity
            style={{ marginLeft: 4 }}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.formHellperText}>Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
