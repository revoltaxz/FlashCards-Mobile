import React from 'react'
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux'
import { addQuestion } from "../../actions";

class NewQuestion extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  submit = () => {
    const { question, answer } = this.state
    const { title, questions } = this.props.navigation.state.params

    if (question === '') {
      Alert.alert('Oops!', 'Question field cannot be empty');
      return;
    }
    if (answer === '') {
      Alert.alert('Oops!', 'Answer field cannot be empty');
      return;
    }

    const data = {
      "title": title,
      "questions": [
        {question, answer}
      ]
    }



    this.props.dispatch(addQuestion(data))

    Alert.alert('Successful', 'Question Added Successfully',
      [
        {
          text: 'OK', onPress: () =>
            this.props.navigation.goBack()
        }
      ],);
  }

  render () {
    const { question, answer } = this.state
    return (
      <View style={style.container}>
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

      </View>
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