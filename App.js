import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { decks } from "./reducers";
import thunk from 'redux-thunk'
import Tabs from './components/Tabs/Tabs'
import { STORAGE_KEY } from "./utils/api";


const store = createStore(decks, applyMiddleware(thunk))
store.subscribe( () => {
  console.log("\n====subscribe");
  const data = store.getState().decks;
  console.log(data);
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Tabs />
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
