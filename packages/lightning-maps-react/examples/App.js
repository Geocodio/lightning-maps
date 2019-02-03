import React, { Component } from 'react'
import './App.css'

import { Map, Marker, Polygon } from '@src'

class App extends Component {
  render () {
    return (
      <div>
        <Map
          width={800}
          height={600}
          zoom={4}
          center={[38.86530697026126, -77.20057854052735]}
          source={(x, y, z) => `https://maps.geocod.io/tiles/base/${z}/${x}/${y}.png`}
        >
          <Marker position={[38.882666, -77.170150]} />
          <Marker position={[34.91, -84.24]} color='rgba(200, 0, 0, 0.7)' />
          <Marker position={[35.1, -77.19]} color='rgba(0, 0, 0, 0.7)' type='circle' />
          <Marker position={[38.86, -89.16]} color='rgba(0, 200, 200, 0.7)' type='donut' />
          <Polygon sourceUrl='https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json' color='red' />
        </Map>
      </div>
    )
  }
}

export default App
