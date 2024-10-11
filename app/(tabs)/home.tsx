import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { getAllProducts } from "../../services/product";
import { ProductItem } from "../../components/product-item";
import { getAllCategories } from "../../services/category";
import { CategoryItem } from "../../components/category-item";
import {  useFonts, FiraSans_400Regular } from '@expo-google-fonts/fira-sans';

export default function Screen(){
    const products = getAllProducts();
    const categories = getAllCategories();

     // Carrega fontes ( fira Sans)
  let [fontsLoaded] = useFonts({
    FiraSans_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
// ---------------------------------

    return(
        <View style={styles.container}>
            <ScrollView>
            <FlatList
            horizontal={true}
            data={categories}
            renderItem={({ item }) => <CategoryItem data={item} />}
            keyExtractor={(item) => item.id.toString()}
            style={styles.list}
            />

            <Text style={styles.titulo}>Tendências do Momento</Text>
            <FlatList
                horizontal={true}
                data={products}
                renderItem={({item}) => <ProductItem data={item}/>}
                keyExtractor={item => item.id.toString()}
                style={styles.list}
            />
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#DEE6F3'
    },
    list:{
        flex: 1,
        width: '100%',
        padding: 20,
        
    },
    titulo:{
        fontSize: 20,
        marginLeft: 20,
        fontWeight:'500',
        fontFamily: 'FiraSans_400Regular',
    }
})