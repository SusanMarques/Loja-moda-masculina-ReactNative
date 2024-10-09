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
                source={require('../assets/background-loja.jpg')}
                style={styles.banner}
                resizeMode="cover"
            />
            
          
          
            <Image
                source={require('../assets/shop-logo.png')}
                style={styles.logo}
                
            />
            <View style={styles.content}>
            <Image
                source={require('../assets/logo-titulo-shopman.png')}
                style={styles.logoTitulo}
            />
                <Button
                    title="Ver produtos"
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
    logo:{
        width: 200,
        height: 200,
        zIndex: 1,
        marginBottom: 40
    },
    logoTitulo:{
        height: 50,
        width: 200
    }
});
