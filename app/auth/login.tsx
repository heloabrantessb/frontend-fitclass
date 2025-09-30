import { FormInput } from "@/components/ui/form-input";
import { ImageBackground } from "expo-image";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const image = require('../../assets/images/login_image.png');

export default function Login() {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image:{
        flex: 1,
        resizeMode: 'cover',
    }
})