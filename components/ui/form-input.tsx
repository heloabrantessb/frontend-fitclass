import { TextInput, Text, StyleSheet } from "react-native";

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const color = {
  backgroundGray: "rgba(255, 255, 255, 0.2)",
  lightGray: "rgba(255, 255, 255, 0.6)",
};

export function FormInput({ placeholder, value, onChangeText, secureTextEntry }: Props) {
  return (
    <Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={color.lightGray}
      />
    </Text>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    width: "100%",
  },
});
