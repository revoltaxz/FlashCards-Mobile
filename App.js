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
import { Ionicons } from '@expo/vector-icons'
import { setNotification } from "./utils/notification";
import Quiz from "./components/Quiz/Quiz";


const store = createStore(decks, applyMiddleware(thunk))
store.subscribe( () => {
  const data = store.getState().decks;
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
})

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
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz'
    }
  }
}))


export default class App extends React.Component {
  componentDidMount () {
    setNotification()
  }

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
