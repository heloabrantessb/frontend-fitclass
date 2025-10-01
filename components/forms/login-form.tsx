import { Text, View, StyleSheet } from "react-native";
import { FormInput } from "../ui/form-input";
import { Botao } from "../ui/botao";

export function LoginForm() {
  return (
    <>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <FormInput placeholder="seu@email.com" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <FormInput placeholder="Digite sua senha" />
      </View>

      <Botao title="Entrar" />
    </>
  );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 15,
    },
    label:{
        color: 'white',
        marginBottom: 10,
    }
});
