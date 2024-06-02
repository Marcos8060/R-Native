import { TextInput, View, StyleSheet,Button } from "react-native";

const GoalInput = ({ text,setText,setGoals }) => {

  const handleChange = (enteredText) => {
    setText(enteredText);
  };
  
  const handleSubmit = () => {
    setGoals((previousGoals) => [
      ...previousGoals,
      { name: text, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={handleChange}
        style={styles.textInput}
        placeholder="Your course goal!"
      />
      <Button onPress={handleSubmit} title="Add Goal" />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 4,
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 8,
  },
});
