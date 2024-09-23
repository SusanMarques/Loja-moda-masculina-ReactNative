import { View, Text, StyleSheet, Image, Linking } from "react-native";

export default function Screen() {

    // Função para abrir o LinkedIn
    const abrirlink = () => {
        Linking.openURL('https://www.linkedin.com/in/seu-linkedin/');
    };

    return (
        <View style={styles.container}>
            <View style={styles.blocoPerfil}>
                <View style={styles.fotoenome}>
                {/* <Image
                    source={require('../../assets/foto.png')}
                    resizeMode="cover"
                    style={styles.perfil}
                /> */}
                <Text style={styles.nome}> {'<'} SUSAN KARIN /{'>'}</Text>
                </View>
                <View style={styles.bloco}>
                <Text style={styles.descricao}>
                    Concluinte em licenciatura em informática no IFRN e cursando desenvolvimento de sistemas no Senac/RN {"\n"}
                    🌱 Atualmente estou aprendendo JavaScript e React Native{"\n"}
                    💬 HardSkills: JavaScript, PHP, Laravel, React Native, Expo, Electron, React, API rest, Git e Github, PostgreSQL, SQL server, MYSQL, HTML e CSS
                    {"\n"}
                    Me encontre nas redes sociais:
                </Text>
                <Text style={styles.links}>
                    LinkedIn:{" "}
                    <Text style={styles.link} onPress={abrirlink}>
                        https://www.linkedin.com/in/seu-linkedin/
                    </Text>
                </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    nome: {
        padding: 10,
        fontWeight: '500',
        position: 'relative',
        marginTop: 100,
        color: '#713C87'
       
    },
    descricao: {
        padding: 20,
        textAlign: 'justify'
    },
    perfil: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    blocoPerfil: {
        alignItems: 'center'
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
        
    },
    links:{
        padding: 20
    },
    bloco:{
        backgroundColor: "#CFA4E1",
        borderRadius: 15
    },
    fotoenome:{
        flexDirection: 'row',
        
        
    }
});