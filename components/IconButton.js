import { Pressable, Text} from "react-native";
import styles from "../styles";
export default IconButton = ({color=styles.buttonText.color, textBorder, fontSize, icon, navTo, text, navigation, width=styles.button.width, backgroundColor=styles.button.backgroundColor, elevation=styles.button.elevation }) => {
    return (
        <Pressable style={{ ...styles.button, width, backgroundColor, elevation }} onPress={() => navigation.navigate(navTo)} >
            {icon}
            <Text style={{ ...styles.buttonText, fontSize, borderWidth: textBorder?1:0, borderRadius: 10 , color, borderColor:'white'}}>{text}</Text>
        </Pressable>
    );
}