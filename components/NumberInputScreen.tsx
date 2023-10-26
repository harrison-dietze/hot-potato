import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

interface NumberInputProps {
  navigation: any; // You can replace 'any' with specific type if available
}

const NumberInputScreen: React.FC<NumberInputProps> = ({ navigation }) => {
  const [inputValue, setInputValue] = useState("");

  const handleContinueClick = () => {
    if (parseInt(inputValue) > 2) {
      let lista = [];
      for (let index = 0; index < Number(inputValue); index++) {
        lista[index] = "";
      }
      navigation.navigate("DisplayNumber", { lista: lista });
    } else alert("insira um número maior que 2");
  };

  return (
    <View>
      <TextInput
        keyboardType="numeric"
        placeholder="Enter a number"
        value={inputValue}
        inputMode="numeric"
        onChangeText={setInputValue}
        style={
          {
            padding: "10px",
            border: "2px solid #ccc",
            borderRadius: "4px",
            fontSize: "16px",
            width: "300px",
            margin: "10px 0",
            outline: "none", // Remove default focus border
          } as any
        }
      />
      <Button
        title="Continue"
        onPress={handleContinueClick}
        disabled={parseInt(inputValue || "0") < 3}
      />
    </View>
  );
};

export default NumberInputScreen;
