import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NumberInputScreen from "./components/NumberInputScreen";
import DisplayNumberScreen from "./components/DisplayNumberScreen";
import GamePageScreen from "./components/GamePageScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NumberInput">
        <Stack.Screen
          name="NumberInput"
          component={NumberInputScreen}
          options={{ title: "Number Input" }}
        />
        <Stack.Screen
          name="DisplayNumber"
          component={DisplayNumberScreen}
          options={{ title: "Display Number" }}
        />
        <Stack.Screen
          name="GamePage"
          component={GamePageScreen}
          options={{ title: "Game Page" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
