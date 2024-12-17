import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CommentItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text>CommentItem</Text>
    </View>
  );
};

export default CommentItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 7,
  },
});
