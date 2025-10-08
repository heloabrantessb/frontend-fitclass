import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from "react-native";

interface Props {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
}

export function Botao({title, onPress}: Props) {
    return (
        <TouchableOpacity style={styles.botao} onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao : {
        backgroundColor: '#C6FC03',
        borderRadius: 10,
        padding: 10,
        width: '80%',
        alignItems: 'center',
        marginTop: 10,
    }
})