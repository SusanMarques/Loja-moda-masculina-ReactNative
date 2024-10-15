import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
// import { useRouter } from "expo-router";

export default function Screen() {
    // const router = useRouter();
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {/* Foto de Perfil */}
                <View style={styles.profileContainer}>
                    <Image
                        source={require('../../../assets/perfil.png')}
                        style={styles.perfil}
                    />
                    <Text style={styles.nameText}>Nome do Usuário</Text>
                </View>

                {/* Informações da Conta - Cada campo em um bloco */}
                <View style={styles.infoContainer}>
                    <View style={styles.infoBlock}>
                        <Text style={styles.infoLabel}>Email:</Text>
                        <Text style={styles.infoText}>usuario@email.com</Text>
                    </View>

                    <View style={styles.infoBlock}>
                        <Text style={styles.infoLabel}>CPF:</Text>
                        <Text style={styles.infoText}>000.000.000-00</Text>
                    </View>

                    <View style={styles.infoBlock}>
                        <Text style={styles.infoLabel}>Telefone:</Text>
                        <Text style={styles.infoText}>(00) 90000-0000</Text>
                    </View>

                    <View style={styles.infoBlock}>
                        <Text style={styles.infoLabel}>Endereço:</Text>
                        <Text style={styles.infoText}>Rua, bairro, cidade</Text>
                    </View>

                    {/* Botão Cadastrar Produtos */}
                    {/* <TouchableOpacity
                        style={styles.cadastrarProdutosButton}
                        onPress={() => router.push('/menu/editar')}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.buttonText}>Cadastrar Produtos</Text>
                    </TouchableOpacity> */}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    perfil: {
        width: 150,
        height: 150,
        borderRadius: 75,
        resizeMode: 'contain',
    },
    nameText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    infoContainer: {
        marginTop: 20,
    },
    infoBlock: {
        backgroundColor: '#f5f5f5',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    infoLabel: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
    infoText: {
        fontSize: 16,
        color: '#555',
    },
    cadastrarProdutosButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#14213d', // Cor de fundo azul
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 8,  // Bordas arredondadas
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,  // Sombra em dispositivos Android
        marginTop: 20, // Distância do último bloco de informações
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    scrollViewContent: {
        paddingBottom: 100, // Espaço extra para evitar sobreposição com a barra inferior
    },
});
