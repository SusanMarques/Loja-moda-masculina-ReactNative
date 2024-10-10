import { Stack } from "expo-router";

export default function CategoryLayout(){
    return(
        <Stack >
            <Stack.Screen name="list" options={{title: 'Categorias'}}/>
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
