import React from 'react'
import {StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-navigation';

class NewDeck extends React.Component {
  state = {
    text: ''
  }

  render () {
    return (
      <SafeAreaView style={style.container}>
        <Text style={{fontSize: 28}}>What is the title of your new deck ?</Text>

      <TextInput
    value={this.state.text}
    style={style.input}
    onChangeText={text => this.setState({text})}/>

    <TouchableOpacity
      onPress={this.addNewDeck}
      style={style.submitButton}>
      <Text style={style.submitText}>Submit</Text>

    </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  input: {
    width: 300,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    margin: 24,
  },
  submitButton: {
    backgroundColor: '#000',
    padding: 10,
    height: 44,
  },
  submitText: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
  },
});
export default NewDeck