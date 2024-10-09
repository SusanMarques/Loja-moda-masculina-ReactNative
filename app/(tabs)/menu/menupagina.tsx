import { View, Text, StyleSheet, ScrollView, TouchableOpacity , Image} from "react-native";
import { useRouter } from "expo-router";


export default function Screen(){
    const router = useRouter();
    return(
        <View >
            <ScrollView>
            <TouchableOpacity onPress={() => router.push('/menu/minhaConta')}>
                <Text style={styles.menuItem}>Minha conta</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/menu/ofertas')}>
                    <Text style={styles.menuItem}>Ofertas e promoções</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/menu/carrinho')}>
                    <Text style={styles.menuItem}>Carrinho</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/menu/sobre')}>
                    <Text style={styles.menuItem}>Sobre a Loja</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/menu/configuracoes')}>
                    <Text style={styles.menuItem}>Configurações</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
menuItem: {
    fontSize: 18,
    marginVertical: 10,
    color: '#007AFF', 
    backgroundColor: '#fff',
    padding: 10,
},
img:{
    width: 30,
    height: 30
},

});