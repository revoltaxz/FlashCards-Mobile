import { AsyncStorage } from 'react-native'

export const STORAGE_KEY = 'DECKS'

const initData = [
  {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  }
]

export const getDecks = () => {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then( results => {
      return results === null ? initialData() : JSON.parse(results)
    })
}

export function createDeck(deck) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(deck));
}

export function initialData() {
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(initData));
  return initData;
}
