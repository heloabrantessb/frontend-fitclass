import { Text, View, StyleSheet } from "react-native";
import { FormInput } from "../ui/form-input";
import { Botao } from "../ui/botao";
import { useAuth } from "@/contexts/authContext";
import { useState } from "react";
import { router } from "expo-router";

export function LoginForm() {
  const { login, error, loading, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const success = await login({ email, password });
    if (success) router.push({ pathname: '/home'});
  }

  return (
    <>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <FormInput
          placeholder="seu@email.com"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <FormInput
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <Botao title="Entrar" onPress={handleLogin} />
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    color: "white",
    marginBottom: 5,
  },
});
