import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../config";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:Colors.white,
     

        
    },
    buttonContainer:{
        width:30,
        height:30,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonBack:{
        width:12,
        height:24,
        resizeMode:'contain'
    },
    buttonFilter:{
        width:22,
        height:22,
        resizeMode:'contain'
    },
    headerText: {
        fontFamily: Fonts.Bold,
        fontSize:20,
        
    }
})