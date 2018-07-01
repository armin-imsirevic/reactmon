import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Pokemon extends Component {

  render() {
    return (
      
      <div>
        {this.props.pokemon}
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.string
}