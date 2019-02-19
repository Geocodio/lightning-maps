import React, { Component } from 'react'

import { Map, Marker, Polygon } from '@src'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      width: window.innerWidth
    }
  }

  updateDimensions () {
    this.setState({ width: window.innerWidth })
  }

  componentDidMount () {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
  }

  render () {
    return (
      <div>
        <Map
          width={this.state.width}
          height={600}
          zoom={4}
          center={[38.86530697026126, -77.20057854052735]}
          source={(x, y, z) => `https://maps.geocod.io/tiles/base/${z}/${x}/${y}.png`}
        >
          <Marker position={[38.882666, -77.170150]} />
          <Marker position={[34.91, -84.24]} color='rgba(200, 0, 0, 0.7)' />
          <Marker position={[35.1, -77.19]} color='rgba(0, 0, 0, 0.7)' type='circle' />
          <Marker position={[38.86, -89.16]} color='rgba(0, 200, 200, 0.7)' type='donut' />
          <Marker position={[38.22, -86.25]} imageUrl='https://unpkg.com/svg-icon@0.8.2/dist/trimmed-svg/metro/camera.svg' width={16} height={13} type='image' />
          <Polygon
            sourceUrl='https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json'
            objectName='continent_North_America_subunits'
            options={{ fillStyle: 'rgba(255, 0, 0, 0.25)' }}
          />
        </Map>
      </div>
    )
  }
}

export default App
