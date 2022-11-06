import { Text, View } from 'react-native'
import React, { Component } from 'react'
import {instance} from './MockAdapter'
export class App extends Component {
  componentDidMount() { 
    instance.get('/users').then(values=>{
      console.log(JSON.stringify(values.data,null,2))
    })
   }
  render() {
    return (
      <View>
        <Text>App</Text>
      </View>
    )
  }
}

export default App