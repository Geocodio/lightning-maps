import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Marker from './Marker'
import * as LightningMap from 'lightning-maps'

class Map extends Component {

  constructor(props) {
    super(props);

    this.lightningMap = null;
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.lightningMap = new LightningMap.Map(this.canvasRef.current, this.props);
    this.renderChildren();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps);
  }

  render() {
    this.renderChildren();

    return (
      <canvas ref={this.canvasRef} {...this.getFilteredProps()} />
    );
  }

  renderChildren = () => {
    let children = Array.isArray(this.props.children)
      ? this.props.children
      : [this.props.children];

    const lightningMap = this.lightningMap;

    if (!lightningMap) {
      return;
    }

    // TODO: Don't add markers that were already added

    children = children
      .filter(Component => {
        return Component && Component.type === Marker;
      })
      .map(Component => {
        const marker = new LightningMap.Marker(Component.props.position, Component.props);
        lightningMap.addMarker(marker);
      });
  }

  getFilteredProps() {
    const usedProps = Object.keys(Map.propTypes);

    return Object.keys(this.props)
      .filter(key => !usedProps.includes(key))
      .reduce((obj, key) => {
        obj[key] = this.props[key];
        return obj;
      }, {});
  }

}

Map.propTypes = {
  source: PropTypes.func.isRequired,
  zoom: PropTypes.number.isRequired,
  center: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
}

export default Map
