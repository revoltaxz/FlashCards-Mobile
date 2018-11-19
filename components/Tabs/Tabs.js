import React from 'react'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import DeckList from '../DeckList/DeckList'
import NewDeck from '../NewDeck/NewDeck'

export default createAppContainer(createBottomTabNavigator(
  {
    DeckList: DeckList,
    NewDeck: NewDeck,
  },
  {

  }
));