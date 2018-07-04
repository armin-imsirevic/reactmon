import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class RequestStatus extends Component {

  render() {
    return (
        <h4>Request is running: {this.props.isRequestRunning.toString()}</h4>
    )
  }
}

RequestStatus.propTypes = {
  isRequestRunning: PropTypes.bool,
}