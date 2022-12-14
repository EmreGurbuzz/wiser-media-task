import { View,Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import styles from './Detail.style'
interface IProps{
    navigation:any
}
const GetStarted:FC<IProps> = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                <Text style={styles.goBack}>Go Back..</Text>
            </TouchableOpacity>
        </View>
    )
}
0
export default GetStarted