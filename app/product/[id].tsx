import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View , Image, Text} from "react-native";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { Button } from "../../components/button";
import { getProductById } from "../../services/product";

export default function Screen(){
    const {id} = useLocalSearchParams();
    const idProduct = parseInt(id as string)

    const product = getProductById(idProduct);
    if(!product) return router.back;
    
    const comprar = () =>{
        alert("Você clicou no item: "+ product.title);
    }
    return(
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{title: ''}}/>
            <ScrollView style={styles.Area} contentContainerStyle={{alignItems: 'center'}}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.img}
                        source={{uri: product.image}}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <View style={styles.priceArea}>
                        <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonArea}>
                <Button
                    title="comprar "
                    onPress={comprar}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#DEE6F3',
    },
    Area:{
        flex: 1,
        padding: 10,
    },
    imageContainer: {
        width: '100%',
        alignItems: 'center',
    },
    img:{
        width: '100%',
        height: 350,
        borderTopLeftRadius: 0,  // Bordas superiores retas
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 30, // Bordas inferiores arredondadas
        borderBottomRightRadius: 30,
        marginBottom: 20,
    },
    contentContainer: {
        width: '90%',
        alignItems: 'center',
    },
    buttonArea:{
        padding: 10,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    },
    description:{
        fontSize: 15,
        color: "#555555",
        marginBottom: 20,
        textAlign: 'center'
    },
    priceArea:{
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#6FABDC',
        marginBottom: 20,
        width: '50%',
        alignItems: 'center',
    },
    price:{
        fontSize: 22,
        textAlign: 'center',
        color: 'white'
    }
});
