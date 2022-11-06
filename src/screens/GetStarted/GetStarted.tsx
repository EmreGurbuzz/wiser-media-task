import { View,Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import styles from './GetStarted.style'
interface IProps{
    navigation:any
}
const GetStarted:FC<IProps> = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')}/>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Home")}>
                <Text style={styles.pressHere}>Press Here for Continue..</Text>
            </TouchableOpacity>
        </View>
    )
}
0
export default GetStarted