import { Pressable, Text, StyleSheet, Image, View } from "react-native";
import { Category } from "../types/category";
import { router } from "expo-router";
import {  useFonts, FiraSans_400Regular } from '@expo-google-fonts/fira-sans';

type Props = {
  data: Category;
};

export const CategoryItem = ({ data }: Props) => {
  const click = () => {
    router.navigate(`/categories/${data.id}`);
  };

  // Carrega fontes ( Tenor Sans)
  let [fontsLoaded] = useFonts({
    FiraSans_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
// ---------------------------------

  return (
    <Pressable onPress={click} style={styles.container}>
      <Image source={{ uri: data.cover }} style={styles.image} />

      {/* Aplica a fonte Tenor Sans no título */}
      <Text style={styles.title}>{data.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: "center", // Centraliza o texto e imagem
  },
  image: {
    width: 120, // Tamanho da imagem/círculo
    height: 120,
    borderRadius: 60, // Faz a imagem ficar circular
  },
  title: {
    marginTop: 5, // Espaço entre a imagem e o título
    fontSize: 16,
    color: "#000", // Cor do texto
    textAlign: "center", // Centraliza o texto abaixo da imagem
    fontFamily: 'FiraSans_400Regular', // Aplica a fonte Tenor Sans
  },
});
