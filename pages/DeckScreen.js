import { StatusBar, Pressable, View, Text, FlatList, ScrollView, ImageBackground } from 'react-native';
import styles from '../styles';
import { FontAwesome, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Card from '../components/Card';
import filters from '../constants/filters';
import FilterCard from '../components/FilterCard';
import { BlurView } from 'expo-blur';
import bg from '../assets/bg.png';
export default DeckScreen = ({ navigation }) => {
    return (
    <ImageBackground source={bg} style={{ height: '100%'}} >
        
        <ScrollView style={{ flex: 1 }}  >
            <View style={{ paddingTop: StatusBar.currentHeight, width: "100%", paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <MaterialIcons size={40} color='white' name='settings' onPress={() => navigation.navigate('Settings')} />
                <Ionicons size={44} color='white' name='information-circle-sharp' />
            </View>
            <View style={styles.homeColumn}>
                <Text style={{ ...styles.textMedium, letterSpacing: 8 }}>CHOOSE DECK</Text>
                <View style={{ flexDirection: 'row', gap: 20, }}>
                    <Card text={'PARTY AND FUN'} bottomText='PLAY' play={true} />
                    <Card text={'FOOD'} bottomText='PLAY' play={true} />
                    <Card text={'RELATIONSHIPS'} bottomText='BUY NOW' />

                </View>
                <Pressable style={{ gap: 10, alignItems: 'flex-end', marginHorizontal: 10 }}  >
                    <View style={{ ...styles.card, width: "100%", justifyContent: 'center', borderRadius: 50 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons name='lock-outline' size={64} />
                            <Text style={{ ...styles.buttonText, flex: 8, fontSize: 34, textAlign: 'left' }}>EXPLORE PREMIUM DECKS</Text>
                            <View style={{ flex: 3 }} />
                        </View>
                        <Text style={{ paddingHorizontal: 8, fontSize: 18, color: 'white', borderColor: 'white', backgroundColor: '#243e5d', textAlignVertical: 'center', borderWidth: 1, borderRadius: 18 }}>Starting at ₹120.00</Text>

                    </View>

                    <Text style={{ paddingHorizontal: 8, textAlign: 'center', fontSize: 18, color: 'white', borderColor: 'white', backgroundColor: '#ac5354', textAlignVertical: 'center', borderWidth: 1, borderRadius: 18 }}>EXPLORE</Text>

                </Pressable>

                <Text style={{ ...styles.textMedium, letterSpacing: 8, paddingHorizontal: 30, alignSelf: 'flex-start' }}>FILTERS</Text>
                <View style={{ width: "100%", paddingHorizontal: 20, gap: 10 }}>{
                    filters.map(
                        (item, index) => <FilterCard key={index} {...item} />
                    )}
                </View>
            </View>



        </ScrollView >
        </ImageBackground>  
    );
}

