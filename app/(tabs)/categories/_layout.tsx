import { Stack } from "expo-router";

export default function CategoryLayout(){
    return(
        <Stack >
            <Stack.Screen
                name="list"
                options={{
                    title: 'Categorias',
                    headerStyle: {
                        backgroundColor: '#004398', // Cor de fundo da barra superior
                    },
                    headerTintColor: '#fff', // Cor do texto no header
                }}
            />
             <Stack.Screen
                name="[id]"
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#004398',  // Cor de fundo do header na página de detalhes
                    },
                    headerTintColor: '#fff',  // Cor do texto e ícones no header
                }}
            />
        </Stack>
    );
}
