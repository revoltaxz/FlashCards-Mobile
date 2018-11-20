import {ADD_DECK, GET_DECKS, ADD_QUESTION} from "../utils/actionTypes";
import { getDecks, createDeck } from "../utils/api";

export const getAllDecks = () => dispatch => {
  getDecks().then( payload => {
    dispatch({ type: GET_DECKS, payload })
  })
}


export const addDeck = (deck) => dispatch => {
  dispatch({ type: ADD_DECK, payload: deck })
}

export const addQuestion = (question) => dispatch => {
  dispatch({ type: ADD_QUESTION, payload: question})
}