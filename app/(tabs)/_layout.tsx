import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout(){
    return(
        <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#fff',  // Cor do ícone/texto da aba ativa
          tabBarInactiveTintColor: '#DEE6F3',  // Cor do ícone/texto da aba inativa
          tabBarStyle: {
            backgroundColor: '#004398',  // Cor de fundo da barra de abas (azul)
            borderTopWidth: 0,  // Remove a borda superior
            borderRadius: 15,  // Adiciona borda arredondada na tab bar
            margin: 10,  // Adiciona margem para dar espaço entre a tab bar e a borda da tela
            position: 'absolute',  // Deixa a tab bar flutuante
            left: 10,
            right: 10,
            bottom: 10,
          },
          headerStyle: {
            backgroundColor: '#004398',  // Cor da barra superior (header)
            borderBottomLeftRadius: 20,  // Borda arredondada no canto inferior esquerdo
            borderBottomRightRadius: 20,  // Borda arredondada no canto inferior direito
            height: 100,  // Ajusta a altura do header para caber o estilo arredondado
          },
          headerTintColor: '#fff',  // Cor do texto e dos ícones no header
          headerTitleStyle: {
            fontWeight: 'bold',  // Estilo do título
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Início',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
            headerTitle: () => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Início</Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="categories"
          options={{
            title: 'Categorias',
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="table" color={color} />,
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: 'Sobre',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
          }}
        />
        <Tabs.Screen
          name="menu"
          options={{
            title: 'Menu',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="bars" color={color} />,
          }}
        />
      </Tabs>
    );
  }