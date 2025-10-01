import { LoginForm } from "@/components/forms/login-form";
import { router, Stack } from "expo-router";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const image = require("../../assets/images/login_image.png");

export default function Login() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.overlay}>
            {/* titulo */}
            <View style={styles.header}>
              <Text style={styles.firstTitle}>Treine no seu ritmo,</Text>
              <Text style={styles.secondTitle}>Sem filas e sem lotação</Text>
            </View>
            {/* formulario */}
            <View style={styles.loginContainer}>
              <LoginForm />
            </View>

            {/* footer */}
            <View style={styles.footer}>
              <Text style={{ color: "white", textAlign: "center" }}>
                Esqueceu sua senha?
              </Text>
              <Text style={{ color: "white" }}>
                Não tem conta?{" "}
                <TouchableOpacity onPress={() => router.push('/auth/register')} >
                  <Text style={styles.signUp}>Cadastre-se</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(198, 252, 3, 0.15)",
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  header: {
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  firstTitle: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  secondTitle: {
    color: "#C6FC03",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    width: "80%",
  },
  signUp: {
    color: "#C6FC03",
    fontWeight: "bold",
  },
  footer: {
  position: "absolute",
  bottom: 130,
  left: 0,
  right: 0,
  alignItems: "center",
},
});
