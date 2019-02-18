/* global fetch, Image */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Marker from './Marker'
import Polygon from './Polygon'
import * as LightningMap from 'lightning-maps'

const DEFAULT_IMAGE_WIDTH = 32
const DEFAULT_IMAGE_HEIGHT = 32

class Map extends Component {
  constructor (props) {
    super(props)

    this.lightningMap = null
    this.canvasRef = React.createRef()

    this.state = {
      polygons: {},
      markerImages: {}
    }
  }

  componentDidMount () {
    this.lightningMap = new LightningMap.Map(this.canvasRef.current, this.getMapOptions())
    this.renderChildren()
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    // console.log(prevProps);
  }

  render () {
    this.renderChildren()

    return (
      <canvas ref={this.canvasRef} {...this.getCanvasProps()} />
    )
  }

  renderChildren = () => {
    let children = Array.isArray(this.props.children)
      ? this.props.children
      : [this.props.children]

    const lightningMap = this.lightningMap

    if (!lightningMap) {
      return
    }

    this.renderMarkers(children, lightningMap)
    this.renderPolygons(children, lightningMap)
  }

  renderMarkers (children, lightningMap) {
    if (this.props.markers && this.props.markers.length > 0) {
      const markers = this.props.markers.map(item => new LightningMap.Marker(item.coords, item.options || {}))

      lightningMap.setMarkers(markers)
    } else {
      const markers = children
        .filter(Component => Component && Component.type === Marker)
        .map(Component => {
          const props = Object.assign({}, Component.props)

          if (props.type === 'image' && props.imageUrl) {
            if (!(props.imageUrl in this.state.markerImages)) {
              this.setState({
                markerImages: {
                  ...this.state.markerImages,
                  [props.imageUrl]: null
                }
              })

              const markerIcon = new Image(props.width || DEFAULT_IMAGE_WIDTH, props.height || DEFAULT_IMAGE_HEIGHT)
              markerIcon.src = props.imageUrl

              markerIcon.onload = () => {
                this.setState({
                  markerImages: {
                    ...this.state.markerImages,
                    [props.imageUrl]: markerIcon
                  }
                })
              }

              return null
            } else {
              props.image = this.state.markerImages[props.imageUrl]
            }
          }

          return new LightningMap.Marker(props.position, props)
        })
        .filter(marker => marker !== null)

      lightningMap.setMarkers(markers)
    }
  }

  renderPolygons (children, lightningMap) {
    const polygons = children
      .filter(Component => Component && Component.type === Polygon)
      .map(Component => {
        const props = Component.props

        if (!(props.sourceUrl in this.state.polygons)) {
          this.setState({
            polygons: {
              ...this.state.polygons,
              [props.sourceUrl]: null
            }
          })

          // TODO: Fetch should be called from componentDidUpdate(...) instead to avoid state changes during render
          fetch(props.sourceUrl)
            .then(response => response.json())
            .then(json => {
              this.setState({
                polygons: {
                  ...this.state.polygons,
                  [props.sourceUrl]: new LightningMap.Polygon(json, props.objectName, props.options, props.hoverOptions)
                }
              })
            })
            .catch(err => console.log(`Could not load ${props.sourceUrl}: ${err.message || err}`))
        }

        return this.state.polygons[Component.props.sourceUrl]
      })
      .filter(polygon => polygon !== null)

    lightningMap.setPolygons(polygons)
  }

  getMapOptions () {
    const validOptions = ['source', 'zoom', 'center']

    return this.getFilteredProps(key => validOptions.includes(key))
  }

  getCanvasProps () {
    const usedProps = Object.keys(Map.propTypes)

    return this.getFilteredProps(key => !usedProps.includes(key))
  }

  getFilteredProps (filter) {
    return Object.keys(this.props)
      .filter(filter)
      .reduce((obj, key) => {
        obj[key] = this.props[key]
        return obj
      }, {})
  }
}

Map.propTypes = {
  source: PropTypes.func.isRequired,
  zoom: PropTypes.number.isRequired,
  center: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  markers: PropTypes.array
}

export default Map
