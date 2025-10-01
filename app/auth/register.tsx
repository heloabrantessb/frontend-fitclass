import { RegisterForm } from "@/components/forms/register-form";
import { router, Stack } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons"; 

const image = require("../../assets/images/login_image.png");

export default function Register() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.overlay}> 

          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="white" onPress={() => router.back()} />
          </TouchableOpacity>

            {/* titulo */}
            <View style={styles.header}>
              <Text style={styles.firstTitle}>Treine no seu ritmo,</Text>
              <Text style={styles.secondTitle}>Sem filas e sem lotação</Text>
            </View>
            {/* formulario */}
            <View style={styles.registerContainer}>
              <RegisterForm />
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
    justifyContent: "flex-end",
    alignItems: "center",
  },
  registerContainer: {
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
  backButton: {
    position: "absolute",
    top: 35,   
    left: 10,  
    padding: 8,
  },
});
