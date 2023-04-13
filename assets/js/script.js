
mapboxgl.accessToken = 'pk.eyJ1IjoiY2hpY2tlbmNoYW1wNzEiLCJhIjoiY2xnNnlzeXRsMDh2OTNlcGEwNTIxemJlYiJ9.uV30dsqz49aMZVVR3s6mrg';
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

map.on('load', () => {
  // Add the vector tileset as a source.
  map.addSource('ethnicity', {
    type: 'vector',
    url: 'mapbox://examples.8fgz4egr'
  });
  map.addLayer( {
    'id': 'population',
    'type': 'circle',
    'source': 'ethnicity',
    'source-layer': 'sf2010',
    'paint': {
  // Make circles larger as the user zooms from z12 to z22.
    'circle-radius': {
    'base': 1.75,
    'stops': [
      [12, 2],
      [22, 180]
    ]
  },
  // Color circles by ethnicity, using a `match` expression.
  'circle-color': [
  'match',
  ['get', 'ethnicity'],
  'White',
  '#fbb03b',
  'Black',
  '#223b53',
  'Hispanic',
  '#e55e5e',
  'Asian',
  '#3bb2d0',
  /* other */ '#ccc'
  ]
  }
  },
  // Place polygons under labels, roads and buildings.
  'aeroway-polygon'
  );
  });