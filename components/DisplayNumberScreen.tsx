import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

interface DisplayNumberProps {
  route: any; // You can replace 'any' with specific type if available
  navigation: any;
}

const DisplayNumberScreen: React.FC<DisplayNumberProps> = ({
  route,
  navigation,
}) => {
  const { lista } = route.params;

  const [names, setNames] = useState(lista as string[]);

  const handleContinueClick = () => {
    if (!allFieldsFilled()) return;
    navigation.navigate("GamePage", { value: names });
  };

  const allFieldsFilled = (): boolean => {
    let valid = true;
    names.forEach((name) => (!name ? (valid = false) : null));
    if (!valid) alert("preencha todos os nomes");
    return valid;
  };

  const changeNames = (a: any) => {
    console.log(a);
    let clone = [...names];
    clone[a.target.id] = a.nativeEvent.text;
    setNames(clone);
  };

  return (
    <View>
      {names.map((name, i) => {
        return (
          <TextInput
            keyboardType="numeric"
            placeholder="digite o nome"
            value={names[i]}
            onChange={changeNames}
            id={String(i)}
            key={String(i)}
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
        );
      })}

      <Button title="Continue" onPress={handleContinueClick} />
    </View>
  );
};

export default DisplayNumberScreen;
