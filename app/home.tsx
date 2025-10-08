import { View, Text, StyleSheet} from "react-native";

export default function Home(){
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Olá, Você está autenticado</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  texto: {
    color: 'red',
  }
});
