import { TouchableOpacity, Text } from "react-native";

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

const styles = {
    botao : {
        backgroundColor: '#C6FC03',
    }
}