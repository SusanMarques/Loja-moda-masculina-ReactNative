import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { Button } from "../../components/button";
import { getProductById } from "../../services/product";
import { Ionicons } from '@expo/vector-icons';  // Ícones

export default function Screen(){
    const { id } = useLocalSearchParams();
    const idProduct = parseInt(id as string);

    const product = getProductById(idProduct);
    if (!product) return router.back();
    
    const comprar = () => {
        alert("Você clicou no item: " + product.title);
    };

    const voltar = () => {
        router.back();  // Função para voltar à tela anterior
    };

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: '' }} />
            
            <ScrollView style={styles.Area} contentContainerStyle={{ alignItems: 'center' }}>
                
                {/* Botão de Voltar sobre a Imagem */}
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.img}
                        source={{ uri: product.image }}
                        resizeMode="cover"
                    />
                    <TouchableOpacity style={styles.backButton} onPress={voltar}>
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                </View>

                {/* Conteúdo abaixo da imagem */}
                <View style={styles.contentContainer}>
                    <View style={styles.tituloPreco}>
                        <Text style={styles.title}>{product.title}</Text>
                        <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
                    </View>

                    <Text style={styles.description}>{product.description}</Text>
                    
                        
                    
                </View>
            </ScrollView>

            {/* Botão de comprar */}
            <View style={styles.buttonArea}>
                <Button
                    title="comprar"
                    onPress={comprar}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DEE6F3',
    },
    Area: {
        flex: 1,
        padding: 10,
    },
    imageContainer: {
        width: '100%',
        height: 450,  // Defina a altura da imagem
        position: 'relative',  // Para o botão ficar sobre a imagem
        overflow: 'hidden',  // Impede que elementos ultrapassem os limites
    },
    img: {
        width: '100%',  // Faz a imagem ultrapassar as laterais
        height: '100%',
        position: 'absolute',
        top: -50,  // Faz a imagem ultrapassar a parte superior
        borderBottomLeftRadius: 30,  // Bordas arredondadas na parte inferior
        borderBottomRightRadius: 30,
    },
    backButton: {
        position: 'absolute',
        top: 40,  // Ajuste da posição para cima
        left: 20,  // Posição do botão à esquerda
        zIndex: 10,
        backgroundColor:' rgba(0, 0, 0, 0.5)',  // Fundo semitransparente
        padding: 10,
        borderRadius: 50,
    },
    contentContainer: {
        width: '90%',
        alignItems: 'center',
        marginTop: 20,  // Espaço abaixo da imagem
    },
    buttonArea: {
        padding: 10,
        marginBottom: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        
    },
    description: {
        fontSize: 15,
        color: "#555555",
        marginBottom: 20,
        textAlign: 'justify',
    },
    priceArea: {
        padding: 10,
        borderRadius: 10,
        
        marginBottom: 20,
        width: '50%',
        alignItems: 'center',
    },
    price: {
        fontSize: 22,
        textAlign: 'center',
        
    },
    tituloPreco:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
        
        
    }
});
