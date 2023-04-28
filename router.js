import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";

import { PostsScreen, ProfileScreen, CreatePostsScreen } from "./screens/main";
import { useDispatch } from "react-redux";
import { signOut } from "./redux/authSlice";

const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const useRoute = (isLogin) => {
  const dispatch = useDispatch();

  if (!isLogin) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: "center",

        tabBarShowLabel: false,
        tabBarStyle: { height: 60 },
        tabBarActiveTintColor: "#FF6C00",
      }}
    >
      <Tab.Screen
        options={{
          headerTitle: "Публикации",
          headerRight: (props) => (
            <TouchableOpacity {...props} onPress={() => dispatch(signOut())}>
              <Feather
                style={{ marginRight: 10 }}
                name="log-out"
                size={20}
                color="black"
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, size }) => (
            <Feather name="grid" color={color} size={size} />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <Tab.Screen
        options={{
          headerTitle: "Создать публикацию",
          tabBarButton: (props) => {
            return (
              <TouchableOpacity
                disabled={props.accessibilityState.selected}
                {...props}
              />
            );
          },
          tabBarIcon: ({ size }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 70,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#FF6C00",
                color: "#fff",
              }}
            >
              <Feather name="plus" color={"white"} size={size} />
            </View>
          ),
        }}
        name="CreatePosts"
        component={CreatePostsScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
