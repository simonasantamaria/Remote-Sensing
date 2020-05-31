var xmin = -72.778645
var ymin = -16.621663
var xmax = -72.66865
var ymax = -16.57553

var xmin2 = -72.738645
var ymin2 = -16.611663
var xmax2 = -72.70865
var ymax2 = -16.58553

var xmin3 = -72.778645
var ymin3 = -16.621663
var xmax3 = -72.75865
var ymax3 = -16.60553

var xmin4 = -72.688645
var ymin4 = -16.591663
var xmax4 = -72.66865
var ymax4 = -16.57553

var xmin5 = -72.688645
var ymin5 = -16.621663
var xmax5 = -72.66865
var ymax5 = -16.60553


var polygon1 = ee.Geometry.Polygon([
  [[xmin, ymin], [xmax, ymin], [xmax, ymax], [xmin, ymax]]
]);

var polygon2 = ee.Geometry.Polygon([
  [[xmin2, ymin2], [xmax2, ymin2], [xmax2, ymax2], [xmin2, ymax2]]
]);

var polygon3 = ee.Geometry.Polygon([
  [[xmin3, ymin3], [xmax3, ymin3], [xmax3, ymax3], [xmin3, ymax3]]
]);

var polygon4 = ee.Geometry.Polygon([
  [[xmin4, ymin4], [xmax4, ymin4], [xmax4, ymax4], [xmin4, ymax4]]
]);

var polygon5 = ee.Geometry.Polygon([
  [[xmin5, ymin5], [xmax5, ymin5], [xmax5, ymax5], [xmin5, ymax5]]
]);




// Create a planar polygon.
var planarPolygon1 = ee.Geometry(polygon1, null, false);
var planarPolygon2 = ee.Geometry(polygon2, null, false);
var planarPolygon3 = ee.Geometry(polygon3, null, false);
var planarPolygon4 = ee.Geometry(polygon4, null, false);
var planarPolygon5 = ee.Geometry(polygon5, null, false);

// Display the polygons by adding them to the map.
Map.centerObject(polygon1);
//Map.addLayer(polygon, {color: 'FF0000'}, 'geodesic polygon');
Map.addLayer(planarPolygon1, {color: '000000'}, 'planar polygon');

// Display the polygons by adding them to the map.
Map.centerObject(polygon2);
//Map.addLayer(polygon, {color: 'FF0000'}, 'geodesic polygon');
Map.addLayer(planarPolygon2, {color: '000000'}, 'planar polygon');

// Display the polygons by adding them to the map.
Map.centerObject(polygon3);
//Map.addLayer(polygon, {color: 'FF0000'}, 'geodesic polygon');
Map.addLayer(planarPolygon3, {color: '000000'}, 'planar polygon');

// Display the polygons by adding them to the map.
Map.centerObject(polygon4);
//Map.addLayer(polygon, {color: 'FF0000'}, 'geodesic polygon');
Map.addLayer(planarPolygon4, {color: '000000'}, 'planar polygon');

// Display the polygons by adding them to the map.
Map.centerObject(polygon5);
//Map.addLayer(polygon, {color: 'FF0000'}, 'geodesic polygon');
Map.addLayer(planarPolygon5, {color: '000000'}, 'planar polygon');
