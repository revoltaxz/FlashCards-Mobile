import {createAppContainer, createBottomTabNavigator, createStackNavigator} from "react-navigation";
import DeckList from "../DeckList/DeckList";
import { Ionicons } from "@expo/vector-icons";
import NewDeck from "../NewDeck/NewDeck";
import DeckDetails from "../DeckDetails/DeckDetails";
import NewQuestion from "../NewQuestion/NewQuestion";
import Quiz from "../Quiz/Quiz";
import React from "react";

const Tabs = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name='ios-home' color={tintColor} size={25} />
      )
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name='ios-add' color={tintColor} size={25} />
      )
    }
  },
})

export const AppNavigation = createAppContainer(createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'Home'
    }
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: {
      headerTintColor: '#000',
    },
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      title: 'New Question'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz'
    }
  }
}))