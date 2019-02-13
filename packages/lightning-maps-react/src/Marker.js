import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'

class Marker extends Component {
  render () {
    return null
  }
}

Marker.defaultProps = {
  type: 'marker',
  color: 'black'
}

Marker.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  type: PropTypes.oneOf(['marker', 'circle', 'donut', 'image']),
  color: PropTypes.string,
  imageUrl: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

export default Marker
