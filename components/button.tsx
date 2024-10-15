import { Pressable, Text , StyleSheet} from "react-native";

type Props = {
    title: string;
    onPress: () => void;
}

export const Button = ({title, onPress}: Props) =>{
    return(
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#004398', // Fundo sólido azul
        borderRadius: 25, // Borda mais arredondada
        paddingVertical: 12,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000', // Sombra
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // Sombra no Android
    },
    buttonText: {
        fontSize: 15, // Tamanho da fonte ajustado
        color: '#fff', // Texto branco
        fontWeight: 'bold', // Texto mais destacado
        textTransform: 'uppercase', // Letras maiúsculas
    }
})