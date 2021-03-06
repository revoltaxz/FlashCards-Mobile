import React from 'react'
import { FlatList, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllDecks } from "../../actions";
import Deck from '../Deck/Deck'

class DeckList extends React.Component {
  componentDidMount () {
    this.props.getAllDecks()
  }

  renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckDetails', item)}>
          <Deck title={item.title} questions={item.questions} />
        </TouchableOpacity>
      </View>
    )
  }

  render () {
    const { deckList } = this.props
    return (
      <View>
        { deckList && (
          <FlatList
            style={{ padding: 20 }}
            data={deckList}
            keyExtractor={(item) => item.title}
            renderItem={this.renderItem}
          />
        )}
      </View>
    )
  }
}



const mapStateToProps = state => ({ deckList: state.decks })
const mapDispatchToProps = dispatch => bindActionCreators({ getAllDecks }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)