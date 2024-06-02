import { View, StyleSheet, Text, Pressable } from "react-native";

const GoalItem = ({ itemData,handleDelete }) => {
  return (
    <Pressable onPress={handleDelete.bind(this, itemData.item.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData?.item.name}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
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
