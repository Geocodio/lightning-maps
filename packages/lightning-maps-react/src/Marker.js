import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Marker extends Component {

  render() {
    return null;
  }

}

Marker.defaultProps = {
  type: 'marker',
  color: 'black'
}

Marker.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  type: PropTypes.oneOf(['marker', 'circle', 'donut']),
  color: PropTypes.string
}

export default Marker
