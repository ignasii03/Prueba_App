import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { Alert } from "react-native";

const Home = () => {
  const { user, setAuth } = useAuth();

  const onLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Cerrar sesión", "Error al cerrar sesión");
    }
  };

  return (
    <ScreenWrapper>
      <Text>Home</Text>
      <Button title="Cerrar sesión" onPress={onLogout} />
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});
