import React from 'react'
import { storiesOf } from '@storybook/react'

import Map from './Map'
import Marker from './Marker'

storiesOf('Maps', module)
  .add('Basic map', () => (
    <Map
      width={800}
      height={600}
      zoom={12}
      center={[38.86530697026126, -77.20057854052735]}
      source={(x, y, z) => `https://maps.geocod.io/tiles/base/${z}/${x}/${y}.png`}
    />
  ))
  .add('Map with markers', () => (
    <Map
      width={800}
      height={600}
      zoom={12}
      center={[38.86530697026126, -77.20057854052735]}
      source={(x, y, z) => `https://maps.geocod.io/tiles/base/${z}/${x}/${y}.png`}
    >
      <Marker position={[38.882666, -77.170150]} />
      <Marker position={[38.91, -77.24]} color="rgba(200, 0, 0, 0.7)" />
      <Marker position={[38.88, -77.19]} color="rgba(0, 0, 0, 0.7)" type="circle" />
      <Marker position={[38.86, -77.16]} color="rgba(0, 200, 200, 0.7)" type="donut" />
    </Map>
  ))
