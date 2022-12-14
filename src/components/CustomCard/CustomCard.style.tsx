import { StyleSheet } from "react-native";
import { Colors, Fonts, Layout, Screen } from "../../config";

export default StyleSheet.create({
  container:{
    backgroundColor:Colors.white,
    marginVertical:10,
    padding:Layout.objectPadding
  },
  cardHeader:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  dotContainer:{
    flexDirection:'row',
    alignItems:'center',
    width:30,
    height:30,
    justifyContent:'center',
    
  },
  dot:{
    marginHorizontal:2,
    width:4,
    height:4,
    borderRadius:4,
    backgroundColor:Colors.darkblue
  },
  cardHeaderLeft:{
    flexDirection:'row'
  },
  userImage:{
    width:42,
    height:42,
    borderRadius:21
  },
  userWithoutImageContainer:{
    borderWidth:1,
    borderColor:Colors.lightgray,
    width:42,
    height:42,
    borderRadius:21,
    justifyContent:'center',
    alignItems:'center'
  },   
  userWithoutImageInner:{
    fontFamily:Fonts.Bold,
    fontSize:22
  },
  userInfo:{
    marginLeft:6,
    justifyContent:'space-between'
  },
  from:{
    fontFamily:Fonts.Bold
  },
  job:{
    fontFamily:Fonts.Regular,
    fontSize:13,
    marginBottom:5
  },
  insertDate:{
    fontFamily:Fonts.Regular,
    color:Colors.gray,
    marginLeft:6
  },
  postImage:{
    width:(Screen.Width*0.95-1),
    height:194,
    marginTop:15,
    resizeMode:'cover',
    borderBottomWidth:0,
    borderWidth:1,
    borderColor:Colors.lightgray
  },
  centered:{
    alignItems:'center',
    justifyContent:'center'
  },
  playButton:{
    width:120,
    height:120,
    resizeMode:'contain'
  },
  likedContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:6
  },
  likedImage:{
    width:20,
    height:20,
    resizeMode:'contain',
    marginRight:5
  },
  likedText:{
    fontFamily:Fonts.Regular,
    color:Colors.gray
  },
  likedTextName:{
    fontFamily:Fonts.Regular,
    color:Colors.black
  },
  postDetail:{
    padding:Layout.objectPadding,
    borderWidth:1,
    borderColor:Colors.lightgray,
    borderTopWidth:0
  },
  sharedText:{
    fontFamily:Fonts.Regular,
    color:Colors.gray
  },
  sharedFromYoutube:{
    fontFamily:Fonts.Regular,
    color:Colors.red
  },
  sharedFromSpotify:{
    fontFamily:Fonts.Regular,
    color:Colors.green
  },
  sharedFromOther:{
    fontFamily:Fonts.Regular,
    color:Colors.blue,
  },
  podcastContainer:{
    width:(Screen.Width*0.95-1),
    height:194,
    marginTop:15,
    resizeMode:'cover',
    borderWidth:1,
    borderBottomWidth:0,
    borderColor:Colors.lightgray
  },
  podcastImage:{
    width:175,
    height:175,
    borderRadius:175,
  },
  postHeader:{
    fontFamily:Fonts.Semibold,
    width:Screen.Width*0.85
  },
  tagContainer:{
    backgroundColor:Colors.backgroundColor,
    borderWidth:1,
    borderColor:Colors.lightgray,
    padding:8,
    paddingHorizontal:12,
    borderRadius:47,
    marginTop:10,
    marginRight:10
  },
  tagText:{
    fontFamily:Fonts.Regular,
    alignItems:'center',
  },
  userComment:{
    marginTop:10,
    fontFamily:Fonts.Regular
  },
  mention:{
    top:6
  },
  
})