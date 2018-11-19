import { GET_DECKS } from "../utils/actionTypes";
import { getDecks, createDeck } from "../utils/api";

export const getAllDecks = () => dispatch => {
  getDecks().then( payload => {
    console.log(payload)
    dispatch({ type: GET_DECKS, payload })
  })
}
