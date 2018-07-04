import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  fetchPokemon
} from '../actions/actions'
import Pokemon from '../components/Pokemon'
import Error from '../components/Error'

class ShowPokemon extends Component {

  componentDidMount() {
    const { dispatch, match } = this.props
    dispatch(fetchPokemon(match.params.pokemonName))
  }

  render() {
    const { pokemon, requestFailed, error } = this.props.pokemonStore;
    return (
      <div>
         <Pokemon pokemon={pokemon} />
         { requestFailed ? (<Error error={error}/>) : null}
      </div>
    )
  }
}

ShowPokemon.propTypes = {
  pokemon: PropTypes.string
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(ShowPokemon)