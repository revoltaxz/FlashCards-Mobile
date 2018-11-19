import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'DECKS'

export const getDecks = () => {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then( results => {
      JSON.parse(results)
    })
}

export function createDeck(deck) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck));
}