import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { instance } from '../../MockAdapter'
import styles from './Home.style'
import Header from '../../components/Header'
interface Props {
  navigation: any
}
export class Home extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.containerSafe}>
          <View  style={styles.safeInnerContainer}>
            <Header />
          </View>
        </SafeAreaView>
      </View>
    )
  }
}

export default Home