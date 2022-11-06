import { StyleSheet } from "react-native";
import { Colors, Fonts, Layout, Screen } from "../../config";

export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.backgroundColor,
    justifyContent:'center',
    alignItems:'center'
  },
  logo:{
    width:Screen.Width*0.9,
    height:Screen.Width*0.9,
    resizeMode:'contain'
  },
  pressHere:{
    fontFamily:Fonts.Regular,
    fontSize:16
  }
  
})