import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { AsyncStorage } from 'react-native';
import { decks } from "./reducers";
import thunk from 'redux-thunk'
import { STORAGE_KEY } from "./utils/api";
import { Ionicons } from '@expo/vector-icons'
import { setNotification } from "./utils/notification";
import { AppNavigation } from "./components/Navigation/Navigation";

const store = createStore(decks, applyMiddleware(thunk))
store.subscribe( () => {
  const data = store.getState().decks;
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
})


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
