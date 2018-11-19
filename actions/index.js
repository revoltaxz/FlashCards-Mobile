import {ADD_DECK, GET_DECKS} from "../utils/actionTypes";
import { getDecks, createDeck } from "../utils/api";

export const getAllDecks = () => dispatch => {
  getDecks().then( payload => {
    dispatch({ type: GET_DECKS, payload })
  })
}


export const addDeck = (deck) => dispatch => {
  console.log(deck)
  dispatch({ type: ADD_DECK, payload: deck })
}