import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { useState } from "react";

import RegisterForm from "../../components/AuthForms/RegisterForm";
import AuthScreenSection from "../../components/AuthScreenSection/AuthScreenSection";

const RegistrationScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={{ flex: 1 }}>
        <AuthScreenSection>
          <RegisterForm
            keyboardHide={keyboardHide}
            setIsShowKeyboard={setIsShowKeyboard}
            navigation={navigation}
          />
        </AuthScreenSection>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
