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
        backgroundColor: 'transparent', 
        borderColor: '#FFFFFF', 
        borderWidth: 2, 
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 25,
        alignItems: 'center', 
    },
    buttonText:{
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center'
    }
})