import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { decks } from "./reducers";
import thunk from 'redux-thunk'
import { STORAGE_KEY } from "./utils/api";
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from "react-navigation";
import DeckList from "./components/DeckList/DeckList";
import NewDeck from "./components/NewDeck/NewDeck";
import DeckDetails from "./components/DeckDetails/DeckDetails";
import NewQuestion from './components/NewQuestion/NewQuestion'


const store = createStore(decks, applyMiddleware(thunk))
store.subscribe( () => {
  const data = store.getState().decks;
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
})

const Tabs = createBottomTabNavigator({
    DeckList: DeckList,
    NewDeck: NewDeck,
})

const AppNavigation = createAppContainer(createStackNavigator({
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
  }
}))


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
