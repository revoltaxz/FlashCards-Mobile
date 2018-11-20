import React from 'react'
import { Text } from 'react-native'
import { Card } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation';

const Deck = ({ title, questions }) => {
  return (
    <SafeAreaView style={{ padding: 20, flex: 1, textAlign: 'center' }}>
      <Card title={title}>
        <Text style={{ textAlign: 'center', fontSize: 16}}>{`${questions.length} cards`}</Text>
      </Card>
    </SafeAreaView>
  )
}

export default Deck