import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "expo-router";
import Header from "../../components/Header";

const Profile = () => {
  const { user, setAuth } = useAuth();
  const router = useRouter();

  return (
    <ScreenWrapper bg="white">
      <UserHeader user={user} router={router} />
    </ScreenWrapper>
  );
};

const UserHeader = (user, router) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <Header title="Perfil" showBackButton={true} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
