require(["esri/Map", "esri/layers/FeatureLayer", "esri/views/MapView"], function (
    Map,
    FeatureLayer,
    MapView
) {

      // create the layer
    const chicagoCrime = new FeatureLayer ({
        url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Chicago_Crime_Tracts/FeatureServer/0",
        outFields: ['*'],
        renderer: renderer
    });

    const map = new Map({
        basemap: "gray-vector"
    });
    
    const view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 10,
        center: [-87.5445556640397, 41.88004206296473]
    });

    view.when(function() {
        // add layer
        map.add(chicagoCrime);
    });
});

