import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './Header.style'
const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
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