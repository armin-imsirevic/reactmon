import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Error extends Component {

  render() {
    return (
        <h4>Error: {this.props.error.message}</h4>
    )
  }
}

Error.propTypes = {
  error: PropTypes.object
}