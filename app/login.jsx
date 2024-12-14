import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { wp, hp } from "../helper/common";
import { StatusBar } from "expo-status-bar";
import BackButton from "../components/BackButton";
import { useRouter } from "expo-router";
import { theme } from "../constants/theme";
import Input from "../components/Input";
import Icon from "../assets/icons";
import { useState, useRef } from "react";
import Button from "../components/Button";
import { Alert } from "react-native";

const Login = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Inicio de sesión", "Todos los campos son obligatorios");
      return;
    }

    let email = emailRef.current.trim();
    let password = passwordRef.current.trim();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      Alert.alert("Inicio de sesión", error.message);
      return;
    }
  };

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router} />

        {/* Bienvenida */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Hola,</Text>
          <Text style={styles.welcomeText}>Bienvenido de nuevo!</Text>
        </View>

        {/* Formulario */}
        <View style={styles.form}>
          <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
            Inicia sesión para continuar
          </Text>
          <Input
            icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
            placeholder="Correo electrónico"
            onChangeText={(value) => (emailRef.current = value)}
          />
          <Input
            icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
            placeholder="Contraseña"
            secureTextEntry={true}
            onChangeText={(value) => (passwordRef.current = value)}
          />
          <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
          {/* Boton */}
          <Button title="Iniciar sesión" loading={loading} onPress={onSubmit} />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>¿No tienes una cuenta?</Text>
          <Pressable onPress={() => router.push("signUp")}>
            <Text
              style={[
                styles.footerText,
                {
                  color: theme.colors.primaryDark,
                  fontWeight: theme.fonts.semibold,
                },
              ]}
            >
              Regístrate
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});
