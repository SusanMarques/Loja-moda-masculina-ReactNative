import { SQLiteProvider, useSQLiteContext, type SQLiteDatabase } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <SQLiteProvider databaseName="produtos.db" onInit={migrateDbIfNeeded}>
        <Header />
        <Content />
      </SQLiteProvider>
    </View>
  );
}

export function Header() {
  const db = useSQLiteContext();
  const [version, setVersion] = useState<string | null>(null); // Permitir que seja nulo inicialmente
  useEffect(() => {
    async function setup() {
      const result = await db.getFirstAsync<{ 'sqlite_version()': string }>('SELECT sqlite_version()');
      
      if (result && result['sqlite_version()']) { // Verificando se result não é nulo
        setVersion(result['sqlite_version()']);
      } else {
        setVersion('Versão desconhecida');
      }
    }
    setup();
  }, [db]);
  
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>SQLite version: {version}</Text>
    </View>
  );
}

interface Produto {
  id: number;
  titulo: string;
  descricao: string;
  preco: number;
  categoria: string;
}

export function Content() {
  const db = useSQLiteContext();
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');

  // Carregar os produtos do banco de dados
  useEffect(() => {
    async function setup() {
      const result = await db.getAllAsync<Produto>('SELECT * FROM produtos');
      setProdutos(result);
    }
    setup();
  }, [db]);

  // Função para cadastrar novo produto
  const cadastrarProduto = async () => {
    await db.runAsync(
      'INSERT INTO produtos (titulo, descricao, preco, categoria) VALUES (?, ?, ?, ?)',
      [titulo, descricao, parseFloat(preco), categoria]
    );

    // Atualizar a lista de produtos após o cadastro
    const result = await db.getAllAsync<Produto>('SELECT * FROM produtos');
    setProdutos(result);

    // Limpar os campos
    setTitulo('');
    setDescricao('');
    setPreco('');
    setCategoria('');
  };

  return (
    <ScrollView style={styles.contentContainer}>
      {/* Formulário de cadastro de produto */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Título"
          value={titulo}
          onChangeText={setTitulo}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={descricao}
          onChangeText={setDescricao}
        />
        <TextInput
          style={styles.input}
          placeholder="Preço"
          value={preco}
          onChangeText={setPreco}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Categoria"
          value={categoria}
          onChangeText={setCategoria}
        />
        <Button title="Cadastrar Produto" onPress={cadastrarProduto} />
      </View>

      {/* Lista de produtos cadastrados */}
      <View>
        {produtos.map((produto) => (
          <View style={styles.productItem} key={produto.id}>
            <Text style={styles.productText}>
              {produto.titulo} - {produto.descricao} - R$ {produto.preco.toFixed(2)} ({produto.categoria})
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

// Função para criar o banco de dados de produtos
async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;
  const result = await db.getFirstAsync<{ user_version: number }>('PRAGMA user_version');

  let currentDbVersion = 0;
  if (result && result.user_version !== undefined) {
    currentDbVersion = result.user_version;
  }

  if (currentDbVersion >= DATABASE_VERSION) {
    return;
  }

  if (currentDbVersion === 0) {
    await db.execAsync(`
      PRAGMA journal_mode = 'wal';
      CREATE TABLE produtos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        descricao TEXT NOT NULL,
        preco REAL NOT NULL,
        categoria TEXT NOT NULL
      );
    `);
    await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  productItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  productText: {
    fontSize: 16,
  },
});
