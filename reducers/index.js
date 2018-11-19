import {ADD_DECK, GET_DECKS} from "../utils/actionTypes";

const initialState = {
  decks: [
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
}

export const decks = ( state = initialState, action ) => {
  switch (action.type) {
    case GET_DECKS:
      return { ...state, decks: action.payload }
    case ADD_DECK: {
      return { ...state, decks: [...state.decks, action.payload ]}
    }
    default:
      return state
  }
}