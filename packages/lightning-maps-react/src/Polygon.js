import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as LightningMap from 'lightning-maps'

class Polygon extends Component {

  render() {
    return null;
  }

}

Polygon.defaultProps = {
  type: 'marker',
  color: 'black'
}

Polygon.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  type: PropTypes.oneOf(['marker', 'circle', 'donut']),
  color: PropTypes.string
}

export default Polygon
