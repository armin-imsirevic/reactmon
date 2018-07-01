import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class ListPokemons extends Component {

  render() {
    return (
      <ul>
          {this.props.pokemons.map(pokemon =>
            <li key={pokemon}>
              <Link to={'/pokemon/'+pokemon}>
                {pokemon}
              </Link>
            </li>)
          }
      </ul>
    )
  }
}

ListPokemons.propTypes = {
  pokemons: PropTypes.array
}