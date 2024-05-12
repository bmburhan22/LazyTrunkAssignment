import { StatusBar, View, Text, ImageBackground } from 'react-native';
import styles from '../styles';
import { FontAwesome, FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import IconButton from '../components/IconButton';
import bg from '../assets/bg.png';
export default Home = ({ navigation }) => {
    return (
    <ImageBackground source={bg} style={{ height: '100%'}} >

        <View style={styles.container} >
            <View style={{ paddingTop: StatusBar.currentHeight, width: "100%", paddingHorizontal: 20, flexDirection: 'row-reverse' }}>
                <MaterialIcons size={40} color='white' name='settings' onPress={() => navigation.navigate('Settings')} />
            </View>
            <View style={styles.homeColumn}>
                <Text style={{ ...styles.textLarge, color: '#a5d729', }}>NEVER</Text>
                <Text style={{ ...styles.textLarge}}>HAVE I</Text>
                <Text style={{ ...styles.textLarge, color: '#e06f6f' }}>EVER</Text>
            </View>
            <View style={{ ...styles.homeColumn, width:240 }}>
                <IconButton icon={<FontAwesome size={40} name='play-circle' />} fontSize={38} navTo='DeckScreen' text='PLAY' navigation={navigation} />
                <IconButton icon={<FontAwesome size={30} name='group' />} fontSize={28} navTo='DeckScreen' text='MULTIPLAYER' navigation={navigation} />
                <IconButton icon={<FontAwesome6 size={30} name='gamepad' />} fontSize={28} navTo='DeckScreen' text='HOW TO PLAY' navigation={navigation} />
            </View>
            <View style={{ flex: 1, width: "100%", flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }} alignItems='center'>
                <IconButton elevation={0} color='white' backgroundColor='transparent' textBorder={true} icon={<MaterialIcons color='white' size={24} name='rocket' />} fontSize={16} width={130} navTo='DeckScreen' text='FOLLOW US' navigation={navigation} />
                <IconButton elevation={0} color='white' backgroundColor='transparent' textBorder={true} icon={<MaterialCommunityIcons color='white' size={24} name='pac-man' />} fontSize={16} width={140} navTo='DeckScreen' text='MORE GAMES' navigation={navigation} />
            </View>

        </View >
        </ImageBackground>
    );
}

