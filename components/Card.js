import { Pressable, Text, View } from "react-native";
import styles from "../styles";

export default Card = ({fontSize=16, play, bottomText, text, width = styles.card.width, borderColor = styles.card.borderColor }) => {
    return (
        <Pressable style={{gap:10, width, alignItems:'center'}}  >
            <View style={{ ...styles.card, width }}>
                <View style={{ flex: 5 }} />
                <Text style={{ ...styles.buttonText, flex: 3, fontSize, borderColor }}>{text}</Text>
                </View>
            <Text style={{ paddingHorizontal:8, textAlign: 'center', fontSize: 18, color: 'white', borderColor: 'white', backgroundColor: play ? 'green' : '#ac5354', textAlignVertical: 'center', borderWidth: 1, borderRadius: 18 }}>{bottomText}</Text>

        </Pressable>
    );
}