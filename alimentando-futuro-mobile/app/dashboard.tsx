import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Index() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Alimentando o Futuro</Text>

            <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                placeholder="Senha"
                secureTextEntry
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
            />

            {/* Botão Entrar */}
            <Pressable
                style={styles.button}
                onPress={() => router.push("/dashboard")}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </Pressable>

            {/* Botão Cadastro */}
            <Pressable
                style={[styles.button, { backgroundColor: "red" }]}
                onPress={() => router.push("/cadastro")}
            >
                <Text style={styles.buttonText}>Criar conta</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
    },
    button: {
        backgroundColor: "green",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 5,
    },
    secondaryButton: {
        backgroundColor: "#555",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});