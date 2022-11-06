import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { FC } from 'react'
import styles from './Header.style'
interface IHeader{
  goBack:()=>void,

}
const Header:FC<IHeader> = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>props.goBack()} style={styles.buttonContainer}>
        <Image style={styles.buttonBack} source={require('../../assets/images/back-button.png')} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Individual View</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Image style={styles.buttonFilter} source={require('../../assets/images/filtered.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default Header