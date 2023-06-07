import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Button } from "react-native";

interface Props {
  handleClick: () => void;
  title: string;
}

const CustomButton: React.FC<Props> = ({ title, handleClick }) => {
  console.log("CustomButton", title);

  useEffect(() => {
    console.log("useEffect CustomButton");

    return () => console.log("return useEffect CustomButton");
  }, []);

  useFocusEffect(() => {
    console.log("focus CustomButton")
    console.log("*********");
    return () => console.log("return focus CustomButton");
  });

  return <Button title={title} onPress={handleClick} />;
};

// export default CustomButton;
export default React.memo(CustomButton);
