import { Link } from "expo-router";
import { Product } from "../types/product"
import {Pressable, Text, StyleSheet, Image, View } from "react-native";

type Props = {
    data: Product;
}

export const ProductItem = ({data}: Props) =>{
    return(
        // rota dinamica
        <Link href={`/product/${data.id}`} asChild>
            <Pressable style={styles.container}>
                <Image
                    style={styles.img}
                    source={{uri: data.image}}
                    resizeMode="cover"
                />
                <View style={styles.info}>
                    <Text style={styles.price}>R$ {data.price.toFixed(2)}</Text>
                    <Text style={styles.title}>{data.title}</Text>
                </View>
            </Pressable>
        </Link>
    );
}
const styles = StyleSheet.create({
    container:{
        marginBottom: 20
    },
    img:{
        width: 200,
        height: 250,
        borderRadius: 30,
        backgroundColor: "#CCCCCC",
        marginRight: 20
    },
    info:{
        flex: 1
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    description:{
        fontSize: 13,
        color: "#555555",
        marginBottom: 10
    },
    price:{
        fontSize: 20,
        fontWeight: 'bold',
       
    }
})