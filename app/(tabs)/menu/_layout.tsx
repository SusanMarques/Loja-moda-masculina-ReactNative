import { Stack } from "expo-router";

export default function CategoryLayout(){
    return(
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="menupagina" options={{title: 'Menu'}}/>
        </Stack>
    );
}