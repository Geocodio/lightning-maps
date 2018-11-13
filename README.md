# Lightning Map `[WIP]`

A lightweight, dependency-free slippy map renderer.

Heavily inspired by [Pigeon Maps](https://github.com/mariusandra/pigeon-maps) and [Leaflet](https://leafletjs.com), but with slightly different goals in mind:

## Goals

* Modern, built using ES6+ syntax
* Lightweight, [absolutely zero dependencies](https://github.com/Geocodio/lightning-map/blob/master/package.json#L28) with a minified bundle of less than 20kb
* Ability to render thousands of markers, by using `<canvas>` rendering instead of depending on the DOM
* Wrappers for React and VueJS (Coming soon)

## Using

### 1. Include `LightningMap.min.js`

> Optional: You can also use your favorite module loader

```html
<script src="LightningMap.min.js"></script>
```

### 2. Create a `<canvas>` element

```html
<canvas id="map" width="800" height="600"></canvas>
```

### 3. Instantiate the map and add a marker

```javascript
var map = new LightningMap.Map(canvas, {
  source: function (x, y, z) {
    return `https://maps.geocod.io/tiles/base/${z}/${x}/${y}.png`;
  },
  zoom: 12,
  center: [38.86530697026126, -77.20057854052735]
});

map.addMarker(new LightningMap.Marker([38.882666, -77.170150]))
```

### 4. Success! You know have a map

![Example](docs/screenshots/marker-single.png)

## Development

```bash
npm run dev
npm run test:watch
```

```bash
npm run build
```
