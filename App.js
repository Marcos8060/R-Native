import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);

  const handleDelete = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((item) => item.id !== id)
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput {...{ text, setText, setGoals }} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <GoalItem {...{ itemData,handleDelete }} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    marginHorizontal: 8,
    marginVertical: 4,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
