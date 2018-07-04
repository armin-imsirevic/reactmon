import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  fetchPokemons,
  CURRENT,
  NEXT,
  PREV,
} from '../actions/actions'
import ListPokemons from '../components/ListPokemons'
import Error from '../components/Error'
import RequestStatus from '../components/RequestStatus';

class ShowPokemons extends Component {

  componentDidMount() {
    this.props.getPokemons(CURRENT);
  }

  prev = () => {
    this.props.getPokemons(PREV);
  }

  next = () => {
    this.props.getPokemons(NEXT);
  }

  render() {
    const { pokemons, requestFailed, error, isRequestRunning } = this.props.pokemonStore;

    return (
      <div>
          <ListPokemons pokemons={pokemons}/>
          <button onClick={() => this.prev()}>
            PREVIOUS
          </button>

          <button onClick={() => this.next()}>
            NEXT
          </button>
          <RequestStatus isRequestRunning={isRequestRunning}/>
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
    getPokemons: (command) => dispatch(fetchPokemons(command)),
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowPokemons)