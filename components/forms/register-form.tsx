import { StyleSheet, View, Text } from "react-native";
import { FormInput } from "../ui/form-input";
import { Botao } from "../ui/botao";
import { useState } from "react";
import AuthService from "@/services/authService";
import { RegisterData } from "@/services/authService";

export function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthday, setBirthday] = useState(""); // string por enquanto
  const [cep, setCep] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    setLoading(true);
    setError(null);

    const data: RegisterData = {
      name,
      email,
      password,
      birthday,
      password_confirmation: passwordConfirmation,
      cpf,
      cep,
    };

    console.log("Enviando dados de registro:", JSON.stringify(data, null, 2));

    try {
      const response = await AuthService.register(data);
      console.log("Resposta do registro:", JSON.stringify(response, null, 2));
      alert("Cadastro realizado com sucesso!");
    } catch (err: any) {
      console.error("Erro completo no registro:", err);
      if (err.response) {
        console.error("Erro axios.response registro:", err.response);
      }
      setError(err.message || "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome</Text>
        <FormInput placeholder="Seu nome" value={name} onChangeText={setName} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data de Nascimento</Text>
        <FormInput
          placeholder="Qual a sua data de nascimento?"
          value={birthday}
          onChangeText={setBirthday}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>CPF</Text>
        <FormInput
          placeholder="999.999.999-99"
          value={cpf}
          onChangeText={setCpf}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <FormInput
          placeholder="seu@email.com"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>CEP</Text>
        <FormInput placeholder="99.999-999" value={cep} onChangeText={setCep} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Digite sua senha</Text>
        <FormInput
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirme sua senha</Text>
        <FormInput
          placeholder="Confirme sua senha"
          value={passwordConfirmation}
          onChangeText={setPasswordConfirmation}
        />
      </View>

      <Botao title="Cadastrar" onPress={handleRegister} />
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 8,
  },
  label: {
    color: "white",
    marginBottom: 5,
  },
});
