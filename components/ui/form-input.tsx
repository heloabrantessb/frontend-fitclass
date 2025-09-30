import { TextInput, Text, StyleSheet } from "react-native";

type Props = {
    placeholder: string;
}

const color = {
    backgroundGray: 'rgba(255, 255, 255, 0.2)',
    lightGray: 'rgba(255, 255, 255, 0.3)',
}

export function FormInput({placeholder}: Props) {
    return (
        <Text>
            <TextInput placeholder={placeholder} style={styles.input} placeholderTextColor = {color.lightGray}/>
        </Text>
    )
}

const styles = StyleSheet.create({
    input : {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        width: '90%',
    },
})