import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { instance } from '../../MockAdapter'
export class App extends Component {
  componentDidMount() {
    instance.get('/users').then(values => {
      console.log(JSON.stringify(values.data, null, 2))
    })
  }
  render() {
    return (
      <SafeAreaView>
        <TouchableOpacity>
          <Text>app2</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

export default App