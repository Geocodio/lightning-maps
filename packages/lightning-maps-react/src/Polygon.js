import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'

class Polygon extends Component {
  render () {
    return null
  }
}

Polygon.propTypes = {
  sourceUrl: PropTypes.string.isRequired,
  objectName: PropTypes.string,
  options: PropTypes.object,
  hoverOptions: PropTypes.object
}

export default Polygon
