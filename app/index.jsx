import { View, Text, Button } from "react-native";
import React from "react";
import Loading from "../components/Loading";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Loading />
    </View>
  );
};

export default index;
