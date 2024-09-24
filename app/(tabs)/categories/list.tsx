import { View, StyleSheet, Text, FlatList } from "react-native";
import { getAllCategories } from "../../../services/category";
import { CategoryItem } from "../../../components/category-item";

export default function Screen() {
  const categories = getAllCategories();

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem data={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Define 2 colunas para exibir as categorias
        columnWrapperStyle={styles.row} // Ajusta o espaçamento entre as colunas
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  list: {
    flex: 1,
    padding: 10,
  },
  row: {
    justifyContent: "space-between", // Espaça as categorias igualmente
  },
});
