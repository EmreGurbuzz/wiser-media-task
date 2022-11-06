import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView, Modal } from 'react-native'
import React,{FC, useState} from 'react'
import styles from './CustomPopup.style'
interface ICustomPopup{
  visible:boolean,
  onPress:()=>void
  
}
const CustomPopup:FC<ICustomPopup> = (props) => {
  return (
    <Modal animationType='fade' visible={props.visible} transparent >
      <TouchableOpacity  style={styles.modalContainer}>
        <Modal animationType='slide' visible={props.visible} transparent >
          <View style={styles.modalInner}>
            <TouchableOpacity onPress={props.onPress} style={styles.delete}>
              <Text style={styles.buttonDelete}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onPress} style={styles.share}>
              <Text style={styles.buttonText}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onPress} style={styles.curation}>
              <Text style={styles.buttonText}>Add to Curation</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onPress} style={styles.cancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </TouchableOpacity>
    </Modal>
  )
}

export default CustomPopup