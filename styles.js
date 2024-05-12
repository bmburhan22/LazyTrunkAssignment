import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width:"100%",
        },
        button: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 14,
            width:"100%",
            borderRadius: 20,
            elevation: 6,
            backgroundColor: 'white',
        },
        buttonText: {
            textAlign:'center',
            textAlignVertical:'center',
            flex:1,
            color: '#0c223b',
            fontSize:24,
            fontWeight:'800',
        },
        homeColumn:{
            flex: 5, alignItems: 'center', justifyContent: 'center', gap:30, width:"100%"
        }
        ,
        textLarge:{fontWeight: '900', fontSize: 80, color:'white'},
        textMedium:{fontWeight: '600', fontSize: 45, color:'white'},
        textSmall:{fontWeight: '500', fontSize: 36, color:'black'},
        textTiny:{fontWeight: '400', fontSize: 16, color:'black'},
        card: {
            alignItems: 'center',
            // gap:10,
            padding: 6,
            width:120,
            height:160,
            borderRadius: 30,
            elevation: 6,
            color:'black',
            backgroundColor: 'white',
        },
        filterCard: {
            gap:20,

            alignItems: 'center',
            paddingHorizontal: 20,
            width:"100%",
            height:80,
            borderRadius: 20,
            elevation: 6,
            color:'black',
            flexDirection: 'row',
            backgroundColor: 'white',
        },
    }
);