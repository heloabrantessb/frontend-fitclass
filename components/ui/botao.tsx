import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
    title: string;
}

export function Botao({title}: Props) {
    return (
        <TouchableOpacity style={styles.botao}>
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