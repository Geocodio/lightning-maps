import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Polygon extends Component {

  render() {
    return null;
  }

}

Polygon.defaultProps = {
  color: 'black'
}

Polygon.propTypes = {
  sourceUrl: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Polygon
