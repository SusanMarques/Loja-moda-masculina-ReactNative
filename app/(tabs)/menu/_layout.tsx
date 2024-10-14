import { Stack } from "expo-router";

export default function CategoryLayout(){
    return(
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="menupagina" options={{title: 'Menu'}}/>
            <Stack.Screen 
                name="minhaConta" 
                options={{ 
                    title: 'Minha Conta',
                    headerShown: true, // Exibe o cabeçalho com seta de voltar
                    headerBackTitle: 'Voltar', // Opcional: define o texto do botão voltar
                }}
            />
            <Stack.Screen 
                name="ofertas" 
                options={{ 
                    title: 'Ofertas e promoções',
                    headerShown: true, // Exibe o cabeçalho com seta de voltar
                    headerBackTitle: 'Voltar', // Opcional: define o texto do botão voltar
                }}
            />
             <Stack.Screen 
                name="carrinho" 
                options={{ 
                    title: 'Carrinho',
                    headerShown: true, // Exibe o cabeçalho com seta de voltar
                    headerBackTitle: 'Voltar', // Opcional: define o texto do botão voltar
                }}
            />
             <Stack.Screen 
                name="configuracoes" 
                options={{ 
                    title: 'Configurações',
                    headerShown: true, // Exibe o cabeçalho com seta de voltar
                    headerBackTitle: 'Voltar', // Opcional: define o texto do botão voltar
                }}
            />
             <Stack.Screen 
                name="cadastrar" 
                options={{ 
                    title: 'cadastro de produtos',
                    headerShown: true, // Exibe o cabeçalho com seta de voltar
                    headerBackTitle: 'Voltar', // Opcional: define o texto do botão voltar
                }}
            />
             
        </Stack>
    );
}