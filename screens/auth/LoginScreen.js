import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { useState } from "react";

import LoginForm from "../../components/AuthForms/LoginForm";
import AuthScreenSection from "../../components/AuthScreenSection/AuthScreenSection";

const LoginScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={{ flex: 1 }}>
        <AuthScreenSection>
          <LoginForm
            keyboardHide={keyboardHide}
            setIsShowKeyboard={setIsShowKeyboard}
            navigation={navigation}
          />
        </AuthScreenSection>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
