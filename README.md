# Lightning Maps (*Alpha release*)

A fast, lightweight slippy map renderer with very minimal dependencies.

Heavily inspired by [Pigeon Maps](https://github.com/mariusandra/pigeon-maps) and [Leaflet](https://leafletjs.com), but with slightly different goals in mind:

## Goals

* Modern, built using ES6+ syntax
* Lightweight, minimal dependencies
* Ability to render thousands of markers, by using `<canvas>` rendering instead of depending on the DOM
* Supports rendering of complex polygons
* Wrapper for React (VueJS coming soon)

## Using

### 1. Install

```
yarn add lightning-maps
```

Or link directly to our build via the [unpkg](https://unpkg.com) CDN:

```html
<script src="https://unpkg.com/lightning-maps@0.0.9/lib/LightningMaps.min.js"></script>
```

### 2. Create a `<canvas>` element

```html
<canvas id="map" width="800" height="600"></canvas>
```

### 3. Instantiate the map and add a marker

```javascript
var map = new LightningMaps.Map(canvas, {
  source: function (x, y, z) {
    return `https://maps.geocod.io/tiles/base/${z}/${x}/${y}.png`;
  },
  zoom: 12,
  center: [38.86530697026126, -77.20057854052735]
});

map.addMarker(new LightningMaps.Marker([38.882666, -77.170150]))
```

### 4. Success! You now have a map

![Example](docs/screenshots/marker-single.png)

## Development

### Run local development build and tests

```bash
yarn run dev
yarn run test:watch
```

### Development urls:
* [http://localhost:8080/simple.html](http://localhost:8080/simple.html)
* [http://localhost:8080/markers.html](http://localhost:8080/markers.html)
* [http://localhost:8080/polygons.html](http://localhost:8080/polygons.html)
* [http://localhost:8080/events.html](http://localhost:8080/events.html)

### Build library for distribution

```bash
yarn run build
```
