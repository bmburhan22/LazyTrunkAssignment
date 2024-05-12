import { Pressable, Switch, Text, View } from "react-native";
import styles from "../styles";
import { useState } from "react";

export default SettingsCard = ({ icon, text, cards }) => {
    const [switchValue, setSwitchValue] = useState(true);
    return (
        <Pressable style={styles.filterCard}  onPress={()=>setSwitchValue(val=>!val)}>
            {icon}

            <View style={{ flex:1, width:"100%", alignSelf:'center'}}> 
                <Text style={styles.textSmall}>{text}</Text>
                <Text style={styles.textTiny}>{cards}</Text>
             </View>
            <Switch value={switchValue}  thumbColor={switchValue?'#a5d729':'#e06f6f'}  onValueChange={setSwitchValue}/>
        </Pressable>
        
    );
}