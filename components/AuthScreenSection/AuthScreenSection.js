import { ImageBackground, View, TouchableWithoutFeedback } from "react-native";
import sectionStyles from "./AuthScreenSection.styled";

const AuthScreenSection = ({ children }) => {
  return (
    <View style={sectionStyles.container}>
      <ImageBackground
        style={sectionStyles.bgImage}
        source={require("../../assets/img/Photo-BG.jpeg")}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

export default AuthScreenSection;
