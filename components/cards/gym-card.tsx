import { View, Text, StyleSheet } from "react-native";
import { Botao } from "../ui/botao";

type Props = {
  name: string;
  address: string;
};

export function GymCard({ name, address }: Props) {
  return (
    <View style={styles.card}>
    {/* Header */}
      <View>
        <Text>{name}</Text>
        <Text>{address}</Text>
      </View>

      <View>
        <Text>Próximas Aulas:</Text>
        <View>
            <View></View> {/* Circulo Verde */ }
            <Text>Aula 1</Text>
            <Text>00:00</Text>
            <Text>01/01</Text>
        </View>
      </View>

      <Botao title="Ver Academia"/>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#4b4949ff',
    }
});
