import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  fetchNextPokemons,
  fetchPrevPokemons,
} from '../actions/actions'
import ListPokemons from '../components/ListPokemons'
import Error from '../components/Error'

class ShowPokemons extends Component {

  componentDidMount() {
    this.props.getPrevPokemons();
  }

  prev = () => {
    this.props.getPrevPokemons();
  }

  next = () => {
    this.props.getNextPokemons();
  }

  render() {
    const { pokemons, requestFailed, error } = this.props.pokemonStore;

    return (
      <div>
          <ListPokemons pokemons={pokemons}/>
          <button onClick={() => this.prev()}>
            PREVIOUS
          </button>

          <button onClick={() => this.next()}>
            NEXT
          </button>
          { requestFailed ? (<Error error={error}/>) : null}
      </div>
    )
  }
}

ShowPokemons.propTypes = {
  store: PropTypes.object
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch){
  return({
    getNextPokemons: () => dispatch(fetchNextPokemons()),
    getPrevPokemons: () => dispatch(fetchPrevPokemons()),
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowPokemons)