import React, { useState } from "react";
import { Button, TextInput, View, Text, StyleProp, ViewStyle, StyleSheet } from "react-native";

interface Props {
  // parent to children
  placeholder: string, 
  // children to parent
  showName?: (value: string) => void;
  style?: StyleProp<ViewStyle>;
}

const CustomInput: React.FC<Props> = ({placeholder, showName, style}) => {
  const [value, setValue] = useState<string>();
  const [show, setShow] = useState<boolean>(false);

  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
      />
      <Button title="Mostra risultato" onPress={() =>{
         setShow(!show)
         showName && value && showName(value)
         }} />
      {/* {show && <Text>{value}</Text>} */}
      {show ? <Text>{value}</Text> : <Text>Nessun Risultato!</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    backgroundColor: "grey"
  }
})

export default CustomInput;
