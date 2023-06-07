import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View, Text, Button } from "react-native";
import ScreenFC, { CustomScreenFC } from "../models/ScreenFC";
import { useDispatch, useSelector } from "react-redux";
import { CountProps, decrement, increment as incrementAction } from "../redux/actions/countAction";
import ToDo from "../components/ToDo/ToDo";
import Count from "../components/Count/Count";
import CustomButton from "../components/CustomButton/CustomButton";
import Title from "../components/Title/Title";

type A = "Home" | "Setting" | "Detail";
const test: A = "Setting";

const SettingScreen: CustomScreenFC<"Setting"> = ({ navigation }) => {

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<Array<string>>([]);
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(10000);
  
  const dispatch = useDispatch();

  const { count: countSelector } = useSelector(
    (state: { countReducer: CountProps }) => state.countReducer
  );
  
  useEffect(() => {
    console.log("useEffect Setting");
    return () => console.log("return useEffect Setting");
  }, []);

  const addTodo = () => {
    console.log("addTodo todos", todos);
    setTodos((t) => [...t, "New Todo"]);
  };

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  // const renderToDo = () => {
  //   console.log("useMemo 1 renderToDo");
  //   return <ToDo todos={todos} addTodo={() => addTodo()} />;
  // };

  const renderToDoMemo = useMemo(() => {
    console.log("useMemo 2 renderToDo");
    return <ToDo todos={todos} addTodo={() => addTodo()} />;
  }, [todos]);

  // const incrementAge = () => {
  //   setAge(age + 1);
  // };

  // const incrementSalary = () => {
  //   setSalary(salary + 1000);
  // };
  
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  
  return (
    <View>
      <Text>Sono in SettingScreen</Text>
      {renderToDoMemo}
      {/* {renderToDo()} */}
      <View>
        <Text> Count: {count}</Text>
        <Button onPress={increment} title="+" />
      </View>
      <Title />
      <Count text="Age" count={age} />
      <CustomButton title="Increment Age" handleClick={incrementAge} />
      <Count text="Salary" count={salary} />
      <CustomButton title="Increment Salary" handleClick={incrementSalary} />
      {/* <Text>{countSelector}</Text> */}
      {/* <Button title="Increment" onPress={() => dispatch(incrementAction())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} /> */}
    </View>
  );
};

export default SettingScreen;
