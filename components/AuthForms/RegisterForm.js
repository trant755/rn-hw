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

const RegisterForm = ({ keyboardHide, setIsShowKeyboard, navigation }) => {
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
      <View style={{ ...styles.container, flex: 0.65 }}>
        <View style={styles.imgPickerContainer}>
          <ImagePicker state={formState} setState={setFormState} />
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Регестрация</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={[
              isFocused.login ? styles.textInputActive : styles.textInput,
              { marginBottom: 16 },
            ]}
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
          <AuthBtn onSubmit={onSubmit} btnText={"Зарегистрироваться"} />
        </View>
        <View style={styles.formHellper}>
          <Text style={styles.formHellperText}>Уже есть аккаунт?</Text>
          <TouchableOpacity
            style={{ marginLeft: 4 }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.formHellperText}>Войти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterForm;
