import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  fetchPokemons,
  updateOffset,
} from '../actions/actions'
import ListPokemons from '../components/ListPokemons'

class ShowPokemons extends Component {

  componentDidMount() {
    const {pokemonStore, getPokemons} = this.props
    getPokemons(pokemonStore.offset);
  }

  prev = () => {
    const { offset } = this.props.pokemonStore
    const newOffset = (offset > 0) ? offset - 20 : 0;
    this.props.updateOffset(newOffset);
    this.props.getPokemons(newOffset);

  }

  next = () => {
    const { offset } = this.props.pokemonStore
    const newOffset = offset + 20;
    this.props.updateOffset(newOffset);
    this.props.getPokemons(newOffset);

  }

  render() {
    console.log(this.props);
    const { pokemons } = this.props.pokemonStore;

    return (
      <div>
          <ListPokemons pokemons={pokemons}/>
          <button onClick={() => this.prev()}>
            PREVIOUS
          </button>
          <button onClick={() => this.next()}>
            NEXT
          </button>
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
    getPokemons: (offset) => dispatch(fetchPokemons(offset)),
    updateOffset: (offset) => dispatch(updateOffset(offset)),
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowPokemons)