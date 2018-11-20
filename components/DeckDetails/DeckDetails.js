import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class DeckDetails extends React.Component {
  render () {
    const { title, questions } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30}}>{title}</Text>
          <Text style={{ fontSize: 16}}>{`${questions.length} cards`}</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('NewQuestion', {
              title,
              questions,
            });
          }}
          style={styles.addCard}>
          <Text style={styles.addCardTitle}>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Quiz', {
              title,
              questions,
            });
          }}
          style={styles.startQuiz}>
          <Text style={styles.startQuizTitle}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  addCard: {
    backgroundColor: '#a7a7a7',
    margin: 24,
    padding: 10,
    borderRadius: 7,
    height: 45,
  },
  startQuiz: {
    backgroundColor: '#000',
    margin: 24,
    padding: 10,
    height: 45,
    borderRadius: 2,
  },
  addCardTitle: {
    color: '#000',
    fontSize: 22,
    textAlign: 'center',
  },
  startQuizTitle: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
  }
});

export default DeckDetails