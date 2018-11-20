import React from 'react'
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux'
import { addQuestion } from "../../actions";

class NewQuestion extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  submit = () => {
    const { title, questions } = this.props.navigation.state.params
    const { question, answer } = this.state

    if (question.trim().length === 0 ) {
      Alert.alert('Oops!', 'Question field cannot be empty');
      return;
    }
    if (answer.trim().length === 0 ) {
      Alert.alert('Oops!', 'Answer field cannot be empty');
      return;
    }

    const data = {title, questions, question, answer }



    this.props.dispatch(addQuestion(data))

    Alert.alert('Successful', 'Question Added Successfully',
      [
        {
          text: 'OK', onPress: () =>
            this.props.navigation.navigate('DeckDetails', {
              title,
              questions
            }),

        }
      ],);
  }

  render () {
    const { question, answer } = this.state
    return (
      <KeyboardAvoidingView behavior="padding" style={style.container}>
        <Text>Question is </Text>
        <TextInput
          defaultValue="Question"
          value={question}
          style={style.input}
          onChangeText={question => this.setState({question})}/>
        <Text>Answer is </Text>
        <TextInput
          defaultValue="Answer"
          value={answer}
          style={style.input}
          onChangeText={answer => this.setState({answer})}/>

        <TouchableOpacity
          onPress={this.submit}
          style={style.submitButton}>
          <Text style={style.submitText}>Submit</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    justifyContent: 'center'
  },
  input: {
    width: 300,
    height: 56,
    padding: 12,
    borderWidth: 1,
    borderColor: '#7f7f7f',
    margin: 16
  },
  submitButton: {
    backgroundColor: '#000',
    padding: 12,
    height: 44,
  },
  submitText: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
  },
});

export default connect()(NewQuestion)