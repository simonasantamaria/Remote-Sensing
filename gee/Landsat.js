//dates of interest
var start = ee.Date('2018-01-01');
var end = ee.Date('2018-12-02');

// Load a raw Landsat 5 ImageCollection for a single year.
var collection = ee.ImageCollection('LANDSAT/LC08/C01/T1')
    .filterDate(start, end);

// Create a cloud-free composite with default parameters.
var composite = ee.Algorithms.Landsat.simpleComposite(collection);

// Create a cloud-free composite with custom parameters for
// cloud score threshold and percentile.
var customComposite = ee.Algorithms.Landsat.simpleComposite({
  collection: collection,
  percentile: 75,
  cloudScoreRange: 5
});

var xmin2 = 8.806211654464908
var ymin2 = 47.33310048695524
var xmax2 = 8.959409286300845
var ymax2 = 47.67629811879117

var forest2 = ee.Geometry.Polygon([
  [[xmin2, ymin2], [xmax2, ymin2], [xmax2, ymax2], [xmin2, ymax2]]
]);

var polygons = ee.FeatureCollection([
  ee.Feature(forest2, {'class': 1}),
]);


// Display the composites.
Map.centerObject(forest2);

Map.addLayer(composite, {bands: ['B4', 'B3', 'B2'], max: 128}, 'TOA composite');
Map.addLayer(polygons, {}, 'training polygons');
Map.addLayer(customComposite, {bands: ['B4', 'B3', 'B2'], max: 128},
    'Custom TOA composite');

Export.image.toDrive({
  image: customComposite,
  description: 'imageToDriveExample22',
  scale: 30,
  region: forest2
});
