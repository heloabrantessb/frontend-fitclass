import { LoginForm } from "@/components/forms/login-form";
import { Stack } from "expo-router";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
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
    backgroundColor: "rgba(198, 252, 3, 0.2)",
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
    borderColor: "white",
    borderWidth: 2,
  },
  firstTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  secondTitle: {
    color: "#C6FC03",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
