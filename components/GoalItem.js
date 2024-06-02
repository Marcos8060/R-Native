import { View, StyleSheet, Text, Pressable } from "react-native";

const GoalItem = ({ itemData, handleDelete }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={handleDelete.bind(this, itemData.item.id)}
      >
        <Text style={styles.goalText}>{itemData?.item.name}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginHorizontal: 8,
    marginVertical: 4,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
