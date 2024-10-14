import { View, Text, StyleSheet, ScrollView, TouchableOpacity , Image} from "react-native";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";


export default function Screen(){
    const router = useRouter();
    return(
        <View >
            <ScrollView>
            <TouchableOpacity  style={styles.menuItem} onPress={() => router.push('/menu/minhaConta')}>
                <FontAwesome size={25} name="user"  style={styles.ico}/>
                <Text style={styles.tituloMenu}> Minha conta </Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.menuItem} onPress={() => router.push('/menu/ofertas')}>
                <FontAwesome size={25} name="tags"  style={styles.ico}/>
                <Text style={styles.tituloMenu}> Ofertas e promoções</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.menuItem} onPress={() => router.push('/menu/carrinho')}>
                <FontAwesome size={25} name="shopping-cart"  style={styles.ico}/>
                <Text style={styles.tituloMenu}> Carrinho</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.menuItem} onPress={() => router.push('/menu/configuracoes')}>
                <FontAwesome size={25} name="cog"  style={styles.ico}/>
                <Text style={styles.tituloMenu}> Configurações</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.menuItem} onPress={() => router.push('/menu/cadastrar')}>
                <FontAwesome size={25} name="plus-square"  style={styles.ico}/>
                <Text style={styles.tituloMenu}> Cadastrar produtos</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
menuItem: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 18,
    marginVertical: 10,
    color: '#007AFF', 
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
},
img:{
    width: 30,
    height: 30
},
ico:{
paddingRight:10,
color: '#007AFF'
},
tituloMenu:{
    color: '#007AFF',
    fontSize: 20
}
});