import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import { decks } from "./reducers";
import thunk from 'redux-thunk'
import Tabs from './components/Tabs/Tabs'

export default class App extends React.Component {
  render() {
    const store = createStore(decks, applyMiddleware(thunk))
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
