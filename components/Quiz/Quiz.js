import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { NavigationActions } from 'react-navigation'
import { clearLocalNotifications, setNotification } from "../../utils/notification";

export default class Quiz extends React.Component {

  state = {
    questionIndex: 0,
    correctAnswers: 0,
    show: false,
  };

  onCorrect = () => {
    const {questionIndex, correctAnswers} = this.state;
    this.setState({questionIndex: questionIndex + 1, correctAnswers: correctAnswers + 1, show: false});
  };

  startQuiz = () => {
    this.setState({questionIndex: 0, correctAnswers: 0, show: false});
  };

  backToDeck = () => {
    this.props.navigation.goBack();

  }

  onIncorrect = () => {
    this.setState({questionIndex: this.state.questionIndex + 1});
  };

  showAnswer = () => {
    this.setState({show: !this.state.show});
  };

  render() {
    const {questionIndex, correctAnswers, show} = this.state;
    const {questions} = this.props.navigation.state.params;
    const isQuestionAvailable = questionIndex < questions.length;
    const questionLeft = questions.length - questionIndex;

    if ( questionIndex === questions.length ) {
      clearLocalNotifications().then(setNotification);
    }

    return (
      <View style={{flex: 1}}>
        {isQuestionAvailable ? (
          <View style={styles.container}>

            <View style={{justifyContent: 'flex-start', flex: 1, alignItems: 'center'}}>
              <View>
                <Text>{questionLeft} / {questions.length}</Text>
              </View>
            </View>

            <View style={{flex: 2}}>
              <View>
                {show ? (
                  <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 24, textAlign: 'center'}}>{questions[questionIndex].answer}</Text>

                    <TouchableOpacity onPress={this.showAnswer}>
                      <Text style={styles.questionButton}>Question</Text>
                    </TouchableOpacity>

                  </View>) : (
                  <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 24}}>{questions[questionIndex].question}</Text>

                    <TouchableOpacity onPress={this.showAnswer}>
                      <Text style={styles.answerButton}>Answer</Text>
                    </TouchableOpacity>

                  </View>
                )}
              </View>
            </View>

            <View style={{alignItems: 'center', justifyContent: 'flex-start', flex: 2}}>
              <View style={styles.container}>

                <TouchableOpacity onPress={this.onCorrect}>
                  <Text style={styles.correctButton}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onIncorrect}>
                  <Text style={styles.incorrectButton}>Incorrect</Text>
                </TouchableOpacity>

              </View>

            </View>

          </View>

        ) : (
          <View style={[styles.container, { padding: 20, alignItems: 'center' }]}>
            <Text>Score: {correctAnswers}</Text>

            <View style={{alignItems: 'center', flex: 2}}>
              <View style={styles.container}>

                <TouchableOpacity onPress={this.startQuiz}>
                  <Text style={styles.correctButton}>Start Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.backToDeck}>
                  <Text style={styles.incorrectButton}>Back to Deck</Text>
                </TouchableOpacity>

              </View>

            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  correctButton: {
    backgroundColor: '#4f7a0d',
    justifyContent: 'center',
    padding: 16,
    textAlign: 'center',
    width: 200,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
  },
  incorrectButton: {
    backgroundColor: '#ff463f',
    justifyContent: 'center',
    padding: 16,
    textAlign: 'center',
    width: 200,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
  },
  answerButton: {
    fontSize: 18,
    color: '#fff',
    padding: 20,
    backgroundColor: '#ff463f',
    fontWeight: 'bold',
    marginTop: 16
  },
  questionButton: {
    fontSize: 18,
    backgroundColor: '#70dd2f',
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 16,
    padding: 20
  }
});