import { Pressable, Text, StyleSheet, Image, View } from "react-native";
import { Category } from "../types/category";
import { router } from "expo-router";

type Props = {
  data: Category;
};

export const CategoryItem = ({ data }: Props) => {
  const click = () => {
    router.navigate(`/categories/${data.id}`);
  };

  return (
    <Pressable onPress={click} style={styles.container}>
      <Image
        source={{ uri: data.cover }}
        resizeMode="cover"
        style={styles.image}
      />

      <Text style={styles.title}>{data.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  // Container da categoria (cada item individual)
  container: {
    margin: 10,
    backgroundColor: "#333333",
    borderRadius: 75, // Circular
    width: 150, // Largura fixa para alinhar as categorias
    height: 150, // Altura fixa para as imagens
    justifyContent: "center",
    alignItems: "center",
  },
  // Imagem da categoria
  image: {
    width: 150, // Tamanho igual ao container para manter a circularidade
    height: 150,
    borderRadius: 75, // Faz a imagem ficar circular
  },
  // Título da categoria
  title: {
    color: "#FFFFFF",
    fontSize: 18,
    marginTop: 10, // Espaçamento entre a imagem e o texto
    textAlign: "center",
  },
  // Container que contém todas as categorias
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center", // Centraliza os itens no meio
    alignItems: "center",
  },
});
