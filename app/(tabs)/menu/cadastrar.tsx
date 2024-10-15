import { View, ScrollView, StyleSheet, Text, TextInput } from "react-native";
import { useState } from "react";
import { Button } from "../../../components/button";

export default function Screen() {
  const [id, setId] = useState('');
  const [categoria, setCategoria] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');

  const cadastrar = () => {
    alert("Você cadastrou ");
};
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.texto}>ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o ID do produto"
          value={id}
          onChangeText={setId}
          keyboardType="numeric"
        />

        <Text style={styles.texto}>Título</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o Título do produto"
          value={titulo}
          onChangeText={setTitulo}
        />

        <Text style={styles.texto}>Descrição</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a Descrição do produto"
          value={descricao}
          onChangeText={setDescricao}
        />

        <Text style={styles.texto}>Preço</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o preço do produto"
          value={preco}
          onChangeText={setPreco}
          keyboardType="numeric"
        />

        <Text style={styles.texto}>Categoria</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a Categoria do produto"
          value={categoria}
          onChangeText={setCategoria}
        />
        

        <Button
            title="Cadastrar"
            onPress={cadastrar}
        />

        <View style={styles.espacoInferior}></View>

      </ScrollView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Fundo mais suave
    padding: 20,
  },
  input: {
    backgroundColor: '#fff', // Fundo branco para o input
    borderWidth: 1,
    borderColor: '#ddd', // Borda cinza clara
    marginBottom: 15,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    shadowColor: '#000', // Sombra leve
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // Para Android
  },
  texto: {
    fontWeight: '600',
    fontSize: 16, // Aumenta o tamanho da fonte
    color: '#333', // Texto mais escuro
    marginBottom: 5,
  },
  espacoInferior:{
        paddingBottom: 100, // Espaço extra para evitar sobreposição com a barra inferior
    },
});
