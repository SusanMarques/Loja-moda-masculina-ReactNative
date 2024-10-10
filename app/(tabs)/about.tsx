import { View, Text, StyleSheet, Image, Linking, ScrollView } from "react-native";

export default function Screen() {

    // Função para abrir o LinkedIn
    const abrirlink = () => {
        Linking.openURL('https://www.linkedin.com/in/seu-linkedin/');
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image
                source={require('../../assets/shop-logo.png')}
                style={styles.logo}
                />
            <Text style={styles.text}>
            <Text style={styles.title}>Sobre a Shop Man{"\n"}</Text>
            A <Text style={styles.bold}>Shop Man</Text> nasceu com o propósito de redefinir o conceito de moda masculina, oferecendo produtos que unem estilo, qualidade e conforto em cada detalhe.{"\n"}{"\n"}
            Desde nossa fundação, nos dedicamos a entender as necessidades dos homens modernos, que buscam se vestir bem sem abrir mão da praticidade e elegância.{"\n"}{"\n"}
            Com uma seleção exclusiva de roupas casuais, sociais e acessórios, trabalhamos com marcas reconhecidas e também com coleções próprias, sempre acompanhando as principais tendências da moda mundial.{"\n"}{"\n"}
            Na <Text style={styles.bold}>Shop Man</Text>, acreditamos que cada peça de roupa deve ser uma extensão da personalidade de quem a veste, seja para o dia a dia ou para ocasiões especiais.{"\n"}{"\n"}
            Nosso compromisso é proporcionar uma experiência de compra diferenciada, com atendimento personalizado e um ambiente que reflete o estilo e a essência do homem contemporâneo.{"\n"}{"\n"}
            Mais do que uma loja, somos o destino certo para quem busca sofisticação e autenticidade em cada look.
            </Text>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F9F9F9'
    },
    logo:{
        width: 200,
        height:200,
    },
    text: {
      fontSize: 16,
      color: '#333',
      lineHeight: 24,
      textAlign: 'justify',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    bold: {
      fontWeight: 'bold',
    },
  });