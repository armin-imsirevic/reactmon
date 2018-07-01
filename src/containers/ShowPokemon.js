import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  fetchPokemon
} from '../actions/actions'
import Pokemon from '../components/Pokemon'

class ShowPokemon extends Component {

  componentDidMount() {
    const { dispatch, match } = this.props
    dispatch(fetchPokemon(match.params.pokemonName))
  }

  render() {
    console.log(this.props);
    const { pokemon } = this.props.pokemonStore;
    return (
      <div>
         <Pokemon pokemon={pokemon} />
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