import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useRoute } from "../router";

const Main = () => {
  const isLogin = useSelector((store) => store.auth.login);

  const routing = useRoute(isLogin);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
