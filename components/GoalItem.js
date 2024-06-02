import { View,StyleSheet,Text } from "react-native";

const GoalItem = ({ itemData }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{itemData?.item.name}</Text>
    </View>
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
