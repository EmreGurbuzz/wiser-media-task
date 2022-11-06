import { StyleSheet } from "react-native";
import { Colors, Layout } from "../../config";

export default StyleSheet.create({
  containerSafe: {
    backgroundColor: Colors.white,
    borderBottomWidth:1,
    borderBottomColor:Colors.lightgray
    
  },
  safeInnerContainer:{
    padding:Layout.objectPadding,
    
  },
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  }
})