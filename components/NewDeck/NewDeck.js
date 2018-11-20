import React from 'react'
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux'
import { addDeck } from "../../actions";

class NewDeck extends React.Component {
  state = {
    title: '',
    questions: []
  }

  submit = () => {
    const { dispatch } = this.props
    const data = this.state
    if ( data.title !== '') {
      dispatch(addDeck(data))
      this.setState({ title: '' })
      Alert.alert('Successful', 'Question Added Successfully',
        [
          {
            text: 'OK', onPress: () =>
              this.props.navigation.navigate('DeckDetails', {
                title: data.title,
                questions: []
              }),

          }
        ],);
    }
  }

  render () {
    return (
      <SafeAreaView style={style.container}>
        <Text style={{fontSize: 24, textAlign: 'center'}}>What is the title of your new deck ?</Text>

        <TextInput
      value={this.state.text}
      style={style.input}
      onChangeText={title => this.setState({title})}/>

        <TouchableOpacity
          onPress={this.submit}
          style={style.submitButton}>
          <Text style={style.submitButtonText}>Submit</Text>

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
    backgroundColor: '#70dd2f',
    padding: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
});
export default connect()(NewDeck)