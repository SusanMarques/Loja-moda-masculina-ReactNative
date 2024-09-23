import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, StyleSheet, View, StatusBar} from "react-native";
import { Button } from "../components/button";
import { router } from "expo-router";


export default function Screen() {
    const start = () => {
        router.replace('/home');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <Image
                source={require('../assets/banner-loja-masculina.jpg')}
                style={styles.banner}
                resizeMode="cover"
            />
            
            {/* Camada preta semi-transparente */}
            <View style={styles.overlay} />

            <View style={styles.content}>
                <Text style={styles.h1}>Modern Man</Text>
                <Button
                    title="Comprar"
                    onPress={start}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    banner: {
        ...StyleSheet.absoluteFillObject, 
        width: '100%',
        height: '100%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1, 
        marginBottom: "40%"
    },
    h1: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white', 
    },
});
