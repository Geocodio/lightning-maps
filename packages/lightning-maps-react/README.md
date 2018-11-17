# Lightning Maps React (*Alpha release*)

[![Npm Version][npm-version-image]][npm-version-url]
[![Build Status][travis-svg]][travis-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

React wrapper for [lightning-maps](https://github.com/geocodio/lightning-maps). - A lightweight, dependency-free slippy map renderer.

Heavily inspired by [Pigeon Maps](https://github.com/mariusandra/pigeon-maps) and [Leaflet](https://leafletjs.com), but with slightly different goals in mind:

## Demo

[**Live Demo**](https://geocodio.github.io/lightning-maps-react/)

## Installation & Usage

```bash
npm install --save lightning-maps
```

### Include the Component

```javascript
import React from 'react'
import { Map, Marker } from 'lightning-maps'

class Component extends React.Component {

  render() {
    return (
        <Map center={[38.865, -77.200]} zoom={12}>
            <Marker position={[38.912, -77.240]} color="red" />
        </Map>
    );
  }
}
```

[travis-svg]: https://travis-ci.org/geocodio/lightning-maps.svg
[travis-url]: https://travis-ci.org/geocodio/lightning-maps
[license-image]: http://img.shields.io/npm/l/lightning-maps.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/lightning-maps.svg
[downloads-url]: http://npm-stat.com/charts.html?package=lightning-maps
[npm-version-image]: https://img.shields.io/npm/v/lightning-maps.svg
[npm-version-url]: https://www.npmjs.com/package/lightning-maps
