import { StyleSheet, View, Text } from 'react-native';
import { FormInput } from "../ui/form-input";
import { Botao } from "../ui/botao";

export function RegisterForm() {
  return (
    <>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome</Text>
        <FormInput placeholder="Seu nome" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data de Nascimento</Text>
        <FormInput placeholder="Seu nome" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>CPF</Text>
        <FormInput placeholder="999.999.999-99" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <FormInput placeholder="seu@email.com" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>CEP</Text>
        <FormInput placeholder="99.999-999" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Digite sua senha</Text>
        <FormInput placeholder="Digite sua senha" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirme sua senha</Text>
        <FormInput placeholder="Confirme sua senha" />
      </View>

      <Botao title="Cadastrar" />
    </>
  );
}

const styles = StyleSheet.create({
     inputContainer: {
        marginBottom: 8,
    },
    label:{
        color: 'white',
        marginBottom: 5,
    }
})