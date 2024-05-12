import { StatusBar, Pressable, View, Text, FlatList, ScrollView, Switch, ImageBackground } from 'react-native';
import styles from '../styles';
import { FontAwesome, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { useState } from 'react';
import IconButton from '../components/IconButton';
import bg from '../assets/bg.png';
export default Settings = ({ navigation }) => {
    const [switchValue, setSwitchValue] = useState(true);
    return (
    <ImageBackground source={bg} style={{ height: '100%'}} >

        <View style={styles.container}  >
            <View style={{ width: "100%", paddingTop: StatusBar.currentHeight, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <FontAwesome size={40} color='white' name='volume-up'  />
                <Ionicons size={44} color='white' name='information-circle-sharp' />
            </View>
            <View style={{ marginHorizontal: 20, padding: 10, width: "100%", gap: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0c223b', flexDirection: 'row' }}>
                <MaterialIcons size={40} color='white' name='settings' />
                <Text style={styles.textMedium}>SETTINGS</Text>
            </View>

            <View style={{ flex: 4, gap: 30, paddingHorizontal:10, justifyContent: 'center' }}>
                <Pressable style={{ ...styles.filterCard, backgroundColor: '#a39700' }}  >
                    <Ionicons size={40} name='language' />
                    <Text style={{ ...styles.textSmall, flex: 3 }}>Languages</Text>
                    <Text style={styles.textTiny}>Eng (US)</Text>
                    <FontAwesome6 name='flag-usa' size={30} />
                    <Octicons name='triangle-right' size={40} />
                </Pressable>
                <Pressable style={{ ...styles.filterCard, backgroundColor: '#e36c6c' }} onPress={() => setSwitchValue(val => !val)} >
                    <FontAwesome size={40} name='child' />

                    <Text style={{ ...styles.textSmall, flex: 3 }}>Kids Mode</Text>
                    <Text style={styles.textTiny}>{switchValue ? "ON" : "OFF"}</Text>
                    <Switch value={switchValue} thumbColor={switchValue ? '#a5d729' : '#e06f6f'} onValueChange={setSwitchValue} />
                </Pressable>
                <Pressable style={{ ...styles.filterCard, backgroundColor: '#55b3b3' }} >
                    <FontAwesome size={40} name='dollar' />
                    <Text style={{ ...styles.textSmall, flex: 3 }}>Purchases</Text>
                
                    <Octicons name='triangle-right' size={40} />
                </Pressable>

            </View>

            <View style={{ flex: 1, width: "100%", flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }} alignItems='center'>
                <IconButton elevation={0} color='white' backgroundColor='transparent' textBorder={true} icon={<MaterialIcons color='white' size={24} name='rocket' />} fontSize={16} width={130} navTo='DeckScreen' text='FOLLOW US' navigation={navigation} />
                <IconButton elevation={0} color='white' backgroundColor='transparent' textBorder={true} icon={<MaterialCommunityIcons color='white' size={24} name='pac-man' />} fontSize={16} width={140} navTo='DeckScreen' text='MORE GAMES' navigation={navigation} />
            </View>
        </View>
        </ImageBackground>
    );  
}

